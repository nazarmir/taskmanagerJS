function DaysGeneration(daysCounter) {
    var month = document.getElementById('november');
    for (let i = 0; i < daysCounter; i++) {
        var days = document.createElement('div');
        days.className='day';
        days.setAttribute('data-day-number', i+1);
        month.appendChild(days);
    }
}
DaysGeneration(30);

var userBrowser = detect.parse(navigator.userAgent);

console.log(userBrowser.browser.family);
if(userBrowser.browser.family == ''){

}