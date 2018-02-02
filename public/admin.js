function s(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
function getDate() {
  var m_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December"); 
var d = new Date(); 
var curr_date = s(d.getDate()); 
var curr_month = d.getMonth(); 
var curr_year = d.getFullYear(); 
return m_names[curr_month] + " " + curr_date + ", " + curr_year
}

function post() {
var pTitle = $("#pTitle").val();
var token = $("#token").val();
var pContent = $("#pContent").val();
$.post("/posts/new?title=" + pTitle + "&body=" + pContent + "&token=" + token + "&date=" + getDate());
}
