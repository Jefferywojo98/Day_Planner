$("#currentDay").text(moment().format("dddd, MMMM Do"));

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
$(".saveBtn").on("click", function(){
    var time =$(this).attr("data-time")
    console.log(time)
    // var planDescription = $("#" + time).val();
    var lineDescription = $(this).siblings(".col-8").val();
    console.log(lineDescription)
    localStorage.setItem(time,lineDescription)
    
    
})

function  textInPlan(){
    for (var i = 0; i <18; i++){
        var savePlanTime = localStorage.getItem(i + "")
        console.log(savePlanTime)
        console.log(Object.entries(localStorage.key(11)))
        if (savePlanTime != null){
            $("#" + i + "").val(savePlanTime)
            console.log(savePlanTime)
            console.log(document.getElementsByClassName('col-8').textContent += savePlanTime + '\n')

        } 
     }
    
}
        
textInPlan()





