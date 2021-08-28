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


