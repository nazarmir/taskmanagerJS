(function addInput() {
    var day = document.getElementsByClassName("day");
    var input=document.createElement('input');
    [].forEach.call(day,function(el,item){
        el.addEventListener('click', function (e) {
            e.preventDefault();
            if (!this.classList.contains('task')){
                day[item].appendChild(input);
                input.focus();
            }
            else
                this.classList.remove('task');
                input.value="";     
        });
    });
    input.addEventListener('keyup',function(event){
        event.preventDefault();
        if(event.keyCode==13){
            var taskTittle=document.getElementById('task-tittle');
            taskTittle.innerHTML=input.value;
            input.value=""; 
            input.blur();
        }
    })
}());