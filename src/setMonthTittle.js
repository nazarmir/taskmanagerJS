function setMonthTitle(monthIndex, yearIndex) {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var h = document.createElement('h3');
    var before = document.getElementById('names-of-days');
    h.innerHTML = `${months[monthIndex]} ${yearIndex}`;
    h.id = 'month-tittle';
    document.body.insertBefore(h, before);

    h.addEventListener('mouseover',function(event){
        event.preventDefault();
        h.innerHTML='Cureent Month';
    })

    h.addEventListener('click',function(event){
        event.preventDefault();
        var curMonth=document.getElementById('november');
        curMonth.innerHTML='';
    
        $(function(){
            $.getScript('src/generateCurrMonth.js',refresh); 
        });
        h.innerHTML=`${months[monthIndex]} ${yearIndex}`;
    })

    h.addEventListener('mouseout',function(event){
        h.innerHTML=`${months[monthIndex]} ${yearIndex}`;
    })
    

}
setMonthTitle(monthIndex, yearIndex);
