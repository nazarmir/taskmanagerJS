 var daysCounter = (function () {
    var date=new Date();
    var days=new Date(date.getYear(), date.getMonth() + 1, 0);
    return days.getDate();
 }());

 console.log(daysCounter);