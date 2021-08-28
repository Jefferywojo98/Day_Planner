let currentTime = moment().format("h");
console.log(currentTime)

var currentHour = moment().hour()
console.log(moment().hour())

for (var i = 0; i < 18; i++) {
    if (i < currentHour) {
        $("#" + i).addClass("past")
    }
    else if (i === currentHour) {
        $("#" + i).addClass("present")
    }
    else {
        $("#" + i).addClass("future")
    }
}


//accept user input and store it as a variable
//add the usertext content to that variable
//append the usertext content to class/div/id

$(".saveBtn").on("click", function () {

    var time = $(this).attr("data-time")
    var descriptionOfTask = $("#" + time).val();
    //console.log(descriptionOfTask);
    localStorage.setItem(time, descriptionOfTask)
})


function placeTextInTaskSection() {


    for (var i = 0; i < 18; i++) {
        var savedTime = localStorage.getItem(i + "")
        if (savedTime !== null) {
            $("#" + i + "").val(savedTime)
            console.log(savedTime)
        } 
    }
}

placeTextInTaskSection()