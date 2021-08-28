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
    var planDescription = $("#" + time).val();
    localStorage.setItem(time,planDescription)
})

function  textInPlans(){
    for (var i = 0; i <18; i++){
        var savePlanTime = localStorage.getItem(i + "")
        if (savePlanTime !== null){
            $("#" + i + "").val(savePlanTime)
            console.log(savePlanTime)
        } 
     }
    
}
        
textInPlans()


