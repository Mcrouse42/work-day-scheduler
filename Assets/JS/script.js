// Run everything inside function when page loads
$(document).ready(function() {
    
    // Get current date and display it
    var todaysDate = moment().format("dddd, MMMM Do");
        $("#currentDay").append(todaysDate);
    
    // Listen for save button to be clicked, save tasks to localStorage 
    $(".saveBtn").on("click", function() {
        var task = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, task);
    });
    


    // Function to loop through tasks in localStorage and display them
    function loadTasks() {
        for (var i = 9; i < 18; i++) {
            var task = localStorage.getItem("hour-"+ [i])
            $("#" + [i]).val(task);
        }
    }
    
    loadTasks();
});