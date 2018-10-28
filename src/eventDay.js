(function addInput() {
    var day = document.getElementsByClassName("day");
    var input=document.createElement('input');
    var taskTittle=document.getElementsByClassName('task-tittle');
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
                taskTittle[item].innerHTML=input.value;
                input.value=""; 
                input.blur();
            }
        })
    });
}());