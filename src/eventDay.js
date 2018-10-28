(function addEventOnDay() {
    var day = document.getElementsByClassName("day");
    var input=document.createElement('input');
    [].forEach.call(day,function(el,item){
        el.addEventListener('click', function (event) {
            event.preventDefault();
            if (!this.classList.contains('task')){
                day[item].appendChild(input);
                input.focus();
            }
            else
                this.classList.remove('task');
                input.value="";     
        });
        el.addEventListener('keyup',function(event){
            event.preventDefault();
            if(event.keyCode==13){
                var taskTittle=document.createElement('span');
                taskTittle.className='task-tittle';
                taskTittle.innerHTML=input.value;
                input.value=""; 
                day[item].removeChild(input);
                day[item].appendChild(taskTittle);
            }
        })
    });
}());