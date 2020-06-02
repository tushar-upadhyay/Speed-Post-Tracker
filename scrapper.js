var cheerio = require('cheerio');
var axios = require('axios');
var getFormData = require('./getParams');
var fs = require('fs');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
async function scrap(id){
let res = await axios.get('https://www.indiapost.gov.in/_layouts/15/DOP.Portal.Tracking/TrackConsignment.aspx')
   var $ = cheerio.load(res.data);
   let data = getFormData($,id);
   let headers = data[1];
   let form = data[0];
   
   result = await axios({
       url:'https://www.indiapost.gov.in/_layouts/15/DOP.Portal.Tracking/TrackConsignment.aspx',
       method:'POST',
       headers:headers,
       data:form
   })
   return result.data;
}
module.exports = scrap;





