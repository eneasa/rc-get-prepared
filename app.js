// this is the worksheet, the first worksheet has ID=2, second worksheet ID=3 and so on 
function GetGoogleSheetRowsByWorkSheetIDRequest(googleSheetNumber) {
    
    // this is the sheet ID found in the URL
    var googleSheetID = "13mgj70xn9kRwZdNHqMyIxc08JnuQtBS7gz6PijZuKbE";

    var url = "https://spreadsheets.google.com/feeds/list/" + googleSheetID + "/" + googleSheetNumber + "/public/values?alt=json";
    
    return $.getJSON(url);
    
}