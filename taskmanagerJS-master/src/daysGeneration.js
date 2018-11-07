function DaysGeneration(daysCounter) {
    var month = document.getElementById('november');
    for (let i = 1; i <= daysCounter; i++) {
        var days = document.createElement('div');
        var dayNumber = document.createElement('span');
        days.className='day';
        dayNumber.className = 'day-number';
        dayNumber.innerHTML = i;
        days.setAttribute('data-day-number', i);
        days.appendChild(dayNumber);
        month.appendChild(days);
    }
}
DaysGeneration(daysCounter);