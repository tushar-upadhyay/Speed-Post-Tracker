var solve = require('./captchaSolver');
const  qs = require('qs');
var formData = {
    ctl00$ScriptManager: "ctl00$PlaceHolderMain$ucNewLegacyControl$upnlTrackConsignment|ctl00$PlaceHolderMain$ucNewLegacyControl$btnSearch",
    MSOWebPartPage_PostbackSource:"",
    MSOTlPn_SelectedWpId:"", 
    MSOTlPn_View: 0,
    MSOTlPn_ShowSettings: "False",
    MSOGallery_SelectedLibrary:"",
    MSOGallery_FilterString:"", 
    MSOTlPn_Button: "none",
    __LASTFOCUS:"",
    MSOSPWebPartManager_DisplayModeName: "Browse",
    MSOSPWebPartManager_ExitingDesignMode: "false",
    __EVENTTARGET: "",
    __EVENTARGUMENT:"",
    MSOWebPartPage_Shared:"", 
    MSOLayout_LayoutChanges:"",
    MSOLayout_InDesignMode:"",
    MSOSPWebPartManager_OldDisplayModeName: "Browse",
    MSOSPWebPartManager_StartWebPartEditingName: "false",
    MSOSPWebPartManager_EndWebPartEditing: "false",
    __REQUESTDIGEST:"",
    __VIEWSTATE:"",
    __VIEWSTATEGENERATOR: "",
    __VIEWSTATEENCRYPTED: "",
    __EVENTVALIDATION: "",
    ctl00$UCLogin1$hdnIsMobileSite: "false",
    ctl00$PlaceHolderMain$ucNewLegacyControl$hdnMobileSite: "false",
    ctl00$PlaceHolderMain$ucNewLegacyControl$txtOrignlPgTranNo: "",
    ctl00$PlaceHolderMain$ucNewLegacyControl$ucCaptcha1$txtCaptcha: "",
    __ASYNCPOST: "false",
    ctl00$PlaceHolderMain$ucNewLegacyControl$btnSearch: "Search",
}
var headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "3979",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Cookie": "WSS_FullScreenMode=false",
    "Host": "www.indiapost.gov.in",
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
    "Origin": "https://www.indiapost.gov.in",
    "Referer": "https://www.indiapost.gov.in/_layouts/15/DOP.Portal.Tracking/TrackConsignment.aspx",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "X-MicrosoftAjax": "Delta=true",
    "X-Requested-With": "XMLHttpRequest"
}

module.exports = function getFormData($,id){
    let context = $('#ctl00_PlaceHolderMain_ucNewLegacyControl_ucCaptcha1_lblCaptcha').text();
    let captcha = $('#ctl00_PlaceHolderMain_ucNewLegacyControl_ucCaptcha1_divMathCaptcha').text();
    if(captcha==""){
     captcha = $('#ctl00_PlaceHolderMain_ucNewLegacyControl_ucCaptcha1_divimgcaptcha').text();
    }
    captcha = solve(captcha,context);
    let __VIEWSTATE = $('#__VIEWSTATE').val();
    let __REQUESTDIGEST = $('#__REQUESTDIGEST').val();
    let __VIEWSTATEGENERATOR = $('#__VIEWSTATEGENERATOR').val();
    let __EVENTVALIDATION = $('#__EVENTVALIDATION').val();
    formData["__VIEWSTATE"] = __VIEWSTATE;
    formData["__REQUESTDIGEST"] = __REQUESTDIGEST;
    formData["__VIEWSTATEGENERATOR"] = __VIEWSTATEGENERATOR;
    formData['__EVENTVALIDATION'] = __EVENTVALIDATION;
    formData['ctl00$PlaceHolderMain$ucNewLegacyControl$txtOrignlPgTranNo'] = id;
    formData['ctl00$PlaceHolderMain$ucNewLegacyControl$ucCaptcha1$txtCaptcha'] = captcha;
    return [qs.stringify(formData),headers];
}







