var temp1 = `
<table cellspacing="0" rules="all" class="responsivetable MailArticleOER  table" border="1" id="ctl00_PlaceHolderMain_ucNewLegacyControl_gvTrckMailArticleDtlsOER" style="border-collapse:collapse;">
		<tbody><tr align="center">
			<th scope="col">Booked At</th><th scope="col">Booked On</th><th scope="col">Destination Pincode</th><th scope="col">Tariff</th><th scope="col">Article Type</th><th scope="col">Delivery Location</th><th scope="col">Delivery Status</th>
		</tr><tr>
			<td>Ujjain G.P.O.</td><td>6/8/2020 </td><td>450331</td><td>94.40</td><td>Inland Speed Post</td><td>Burhanpur</td><td>Packed</td>
		</tr>
	</tbody></table>
<br>
	<table cellspacing="0" rules="all" class="responsivetable MailArticleEvntOER table" border="1" id="ctl00_PlaceHolderMain_ucNewLegacyControl_gvTrckMailArticleEvntOER" style="border-collapse:collapse;">
		<tbody><tr align="center">
			<th scope="col">Date</th><th scope="col">Time</th><th scope="col">Office</th><th scope="col">Event</th>
		</tr><tr>
			<td>6/06/2020</td><td>5:6:45</td><td>Ujjain S.O</td><td>Item Packed </td>
		</tr>
		<tr>
			<td>7/06/2020</td><td>7:30:15</td><td>Ujjain S.O</td><td>Item dispached </td>
		</tr>
		<tr>
			<td>8/06/2020</td><td>5:50:40</td><td>Indore S.O</td><td>Item Arrived </td>
		</tr>
		<tr>
			<td>8/06/2020</td><td>6:6:45</td><td>Indore S.O</td><td>Item Dispached </td>
		</tr>
		<tr>
			<td>11/06/2020</td><td>12:20:45</td><td>Burhanpur SO</td><td>Item Arrived </td>
		</tr>
		<tr>
			<td>12/06/2020</td><td>10:3:20</td><td>Burhanpur SO</td><td>Out for delivery </td>
		</tr>
		<tr>
			<td>12/06/2020</td><td>13:7:40</td><td>Burhanpur SO</td><td>consignee not answered the call </td>
		</tr>
	</tbody></table>
`
let temp2 = `
<table cellspacing="0" rules="all" class="responsivetable MailArticleOER  table" border="1" id="ctl00_PlaceHolderMain_ucNewLegacyControl_gvTrckMailArticleDtlsOER" style="border-collapse:collapse;">
		<tbody><tr align="center">
			<th scope="col">Booked At</th><th scope="col">Booked On</th><th scope="col">Destination Pincode</th><th scope="col">Tariff</th><th scope="col">Article Type</th><th scope="col">Delivery Location</th><th scope="col">Delivery Status</th>
		</tr><tr>
			<td>Ujjain G.P.O.</td><td>6/8/2020 </td><td>487001</td><td>94.40</td><td>Inland Speed Post</td><td>Narsinghpur</td><td>Packed</td>
		</tr>
		<tr>
			<td>7/06/2020</td><td>7:30:15</td><td>Ujjain S.O</td><td>Item dispached </td>
		</tr>
		<tr>
			<td>8/06/2020</td><td>5:50:40</td><td>Indore S.O</td><td>Item Arrived </td>
		</tr>
		<tr>
			<td>8/06/2020</td><td>6:6:45</td><td>Indore S.O</td><td>Item Dispached </td>
		</tr>
		<tr>
			<td>10/06/2020</td><td>15:10:25</td><td>Narsinghpur SO</td><td>Item Arrived </td>
		</tr>
		<tr>
			<td>12/06/2020</td><td>10:3:20</td><td>Burhanpur SO</td><td>Weather Problem </td>
		</tr>
		
	</tbody></table>
<br>
	<table cellspacing="0" rules="all" class="responsivetable MailArticleEvntOER table" border="1" id="ctl00_PlaceHolderMain_ucNewLegacyControl_gvTrckMailArticleEvntOER" style="border-collapse:collapse;">
		<tbody><tr align="center">
			<th scope="col">Date</th><th scope="col">Time</th><th scope="col">Office</th><th scope="col">Event</th>
		</tr><tr>
			<td>6/06/2020</td><td>5:20:45</td><td>Ujjain S.O</td><td>Item Packed </td>
		</tr>
	</tbody></table>
`
module.exports = [temp1,temp2];