// this is the worksheet, the first worksheet has ID=2, second worksheet ID=3 and so on 
function GetGoogleSheetRowsByWorkSheetIDRequest(googleSheetNumber) {
    
    //var deferred = $.Deferred();

    // this is the sheet ID found in the URL
    var googleSheetID = "13mgj70xn9kRwZdNHqMyIxc08JnuQtBS7gz6PijZuKbE";

    var url = "https://spreadsheets.google.com/feeds/list/" + googleSheetID + "/" + googleSheetNumber + "/public/values?alt=json";
    
    return $.getJSON(url).then(function(data) {

        // data.deed.entry has all the rows
        //deferred.resolve(data.feed.entry);
    });

    //return deferred.promise();
    
}