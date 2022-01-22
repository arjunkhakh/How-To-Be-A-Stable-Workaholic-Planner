var date = document.querySelector("#currentDay");

var textArea = document.querySelectorAll(".textarea");

var container = document.querySelector(".container")

var hour = document.querySelectorAll(".hour") 

var button = document.querySelectorAll(".saveBtn")

date.textContent = moment().format("dddd DDDo MMMM YYYY")

var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

$(hour).each(function(i)
{
     $(this).attr("data-id",time[i]);
      $(this).html(time[i]);
 });

 function clearStorage(event) {
     localStorage.clear()
     document.location.reload();
 }

 $(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $(".saveBtn").on("click", function(){
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);

    })
 
for (i = 9; i < 19; i++) {
    $("#" + i + " .description").val(localStorage.getItem(i));

    var t = new Date().getHours();

    if (t = i) {
    document.getElementById(i + "box").style.backgroundColor = "#ff6961";
    document.getElementById(i + "box").style.color = "white";
    } else if (t < i) {
    document.getElementById(i + "box").style.backgroundColor = "#d3d3d3";
    document.getElementById(i + "box").style.color = "white";
    } else if (t > i) {
    document.getElementById(i + "box").style.backgroundColor = "#77dd77";
    document.getElementById(i + "box").style.color = "white";
} 
  }

});