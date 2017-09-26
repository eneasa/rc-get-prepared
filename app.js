// this is the worksheet, the first worksheet has ID=2, second worksheet ID=3 and so on 
function GetGoogleSheetRowsByWorkSheetIDRequest(googleSheetNumber) {
    
    // this is the sheet ID found in the URL
    var googleSheetID = "13mgj70xn9kRwZdNHqMyIxc08JnuQtBS7gz6PijZuKbE";

    var url = "https://spreadsheets.google.com/feeds/list/" + googleSheetID + "/" + googleSheetNumber + "/public/values?alt=json";
    
    return $.getJSON(url);
    
}

// this is the worksheet, the first worksheet has ID=2, second worksheet ID=3 and so on 
function GetKenticoCloudRowsByPath(path) {
    
    // this is the sheet ID found in the URL
    var projectID = "112fe4bd-5bac-41f2-8ba1-719f736a3017";

    var url = "https://deliver.kenticocloud.com/" + projectID + "/items/" + path + "";
    
    return $.getJSON(url);
    
}

// this is the worksheet, the first worksheet has ID=2, second worksheet ID=3 and so on 
function GetKenticoCloudRowsbyType(type) {
    
    // this is the sheet ID found in the URL
    var projectID = "112fe4bd-5bac-41f2-8ba1-719f736a3017";

    var url = "https://deliver.kenticocloud.com/" + projectID + "/items?system.type[in]=" + type + "";
    
    return $.getJSON(url);
    
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ""));
}

function goBack() {
    window.history.back();
}

function GetImagePath(imageField){

    var defaultImage = "http://placehold.it/42x42"
    return imageField[0] ? imageField[0].url : defaultImage;
    
}