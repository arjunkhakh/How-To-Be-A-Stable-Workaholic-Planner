// Variables Defined Here including an array being defined as a variable
var date = document.querySelector("#currentDay");
var textArea = document.querySelectorAll(".textarea");
var container = document.querySelector(".container")
var hour = document.querySelectorAll(".hour") 
var button = document.querySelectorAll(".saveBtn")
var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

// The Exact date at the moment
date.textContent = moment().format("dddd DDDo MMMM YYYY")

// A Function for the array which puts in the times from the array and place them in each time block
$(hour).each(function(i)
{
     $(this).attr("data-id",time[i]);
      $(this).html(time[i]);
 });

 // A Function to clear the contents on the page and on the local storage
 function clearStorage(event) {
     localStorage.clear()
     document.location.reload();
 }

 // When the document is ready, it will make the save buttons put the input into local storage with the time and information inside it.
 $(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);

    })
 
    // In this for loop, the first part is making sure the information stays on the page and in local storage.
for (i = 9; i < 19; i++) {
    $("#" + i + " .description").val(localStorage.getItem(i));

    // for this if statement, it gets a defined variable of the exact time and changes the background colour of the block to according what time it is.
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