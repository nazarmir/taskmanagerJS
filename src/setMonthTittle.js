function setMonthTitle(monthIndex, yearIndex) {
    var months = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
    var h = document.createElement('h3');
    var before = document.getElementById('november');
    h.innerHTML = `${months[monthIndex]} ${yearIndex}`;
    h.className = 'month-tittle';
    document.body.insertBefore(h, before);
}

setMonthTitle(monthIndex, yearIndex);