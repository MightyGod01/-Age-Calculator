const Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-inputs").value);
    let birthMonth, birthDate, birthyear;


    let birthDetails = {
        date: inputDate.getDate(),
        Months: inputDate.getDate() + 1,
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear)

    if (
        birthDetails.year > currentYear ||
        (birthDetails.Months > currentMonth &&
            birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.Months
            == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-");
        return;
    }

    birthyear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.Months) {
        birthMonth = currentMonth - birthDetails.Months;
    }
    else {
        birthyear--;
        birthMonth = 12 + currentMonth - birthDetails.Months;
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    }
    else {
        birthMonth--;
        let days = Months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;

        if (birthMonth < 0) {
            birthMonth = 11;
            birthyear--;
        }
    }

    displayResult(birthDate, birthMonth, birthyear)
}

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("Months").textContent = bMonth;
    document.getElementById("Days").textContent = bDate;


}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400
        == 0)) {
        Months[1] = 29;
    }
    else {
        Months[1] = 28;
    }
}