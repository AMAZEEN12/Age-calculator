

function calculateAge(){

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    var spanYear = document.getElementById("err");
    var spanMonth = document.getElementById("error");
    var spanDay = document.getElementById("errorMsg");


    var emptyField = true;
    
    if (day === '') {
        spanDay.textContent = "This field is required";
        document.getElementById("dayLabel").style.color ="hsl(0, 100%, 67%)";
        document.getElementById("day").style.border = "1px solid hsl(0, 100%, 67%)";
        emptyField = false;
    }
    if (month === '') {
        spanMonth.textContent = "This field is required";
        document.getElementById("monthLabel").style.color ="hsl(0, 100%, 67%)";
        document.getElementById("month").style.border = "1px solid hsl(0, 100%, 67%)";
        emptyField = false;
    }
    if (year === '') {
        spanYear.textContent = "This field is required";
        document.getElementById("yearLabel").style.color ="hsl(0, 100%, 67%)";
        document.getElementById("year").style.border = "1px solid hsl(0, 100%, 67%)";
        emptyField = false;
    }
    if (!emptyField) {
        return;
    }

    var isValid = true;

    if (day < 1 || day > 31) {
        spanDay.textContent = "Must be a valid day";
        document.getElementById("dayLabel").style.color ="hsl(0, 100%, 67%)";
        document.getElementById("day").style.border = "1px solid hsl(0, 100%, 67%)";
        isValid = false;
    }
     if (month < 1 || month > 12) {
        spanMonth.textContent = "Must be a valid month";
        document.getElementById("monthLabel").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("month").style.border = "1px solid hsl(0, 100%, 67%)";
        isValid = false;
    }
     if (year < 1900 || year > 2024) {
        spanYear.textContent = "Must be a valid year";
        document.getElementById("yearLabel").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("year").style.border = "1px solid hsl(0, 100%, 67%)";
        isValid = false;
    }

    if (isValid) {
        var lastDayOfMonth = new Date(year, month, 0).getDate();
        if (day > lastDayOfMonth) {
            spanDay.textContent = "Must be a valid date";
            document.getElementById("dayLabel").style.color ="hsl(0, 100%, 67%)";
        document.getElementById("day").style.border = "1px solid hsl(0, 100%, 67%)";
        isValid = false;
        }
    }


    if (!isValid) {
        return;
    }

    var currentDate = new Date();
    var birthDate = new Date(year, month - 1, day);

    var calcYears = document.getElementById("ageInYears");
    var calcMonths = document.getElementById("ageInMonths");
    var calcDays = document.getElementById("ageInDays");

    var ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    var ageMonth = currentDate.getMonth() - birthDate.getMonth();
    var ageDate = currentDate.getDate() - birthDate.getDate();

    if (ageDate < 0) {
        // Adjust for negative days by borrowing from months
        ageMonth--;
        // Calculate correct ageDays
        var lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageDate = lastDayOfPreviousMonth - birthDate.getDate() + currentDate.getDate();
    }
        
    

    if (ageMonth < 0) {
        // Adjust for negative months by borrowing from years
        ageYear--;
        // Calculate correct ageMonths
        ageMonth = 12 + ageMonth;
    }


    calcYears.innerHTML = ageYear;
    calcMonths.innerHTML = ageMonth;
    calcDays.innerHTML = ageDate;

    
   
}

