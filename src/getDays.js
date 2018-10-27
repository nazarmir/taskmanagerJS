 var daysCounter = (function () {
    var date=new Date();
    var days=new Date(date.getYear(), date.getMonth() + 1, 0);
    return days.getDate();
 }());

var monthIndex=(function(){
    var month = new Date;
    return month.getMonth();
}());

var yearIndex=(function(){
    var year = new Date;
    return year.getFullYear();
}());
