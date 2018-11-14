// \b(0?\d{1,2}|1\d{1,2}|2[0-5]{2}|24[0-9]{1})(\.(0?\d{1,2}|1\d{1,2}|2[0-5]{2}|24[0-9]{1})){3}\b

class Modal{
    constructor(){
        var body=document.body;
        this.taskModal=document.createElement('div');
        this.taskModal.className='taskModal';
        body.appendChild(this.taskModal);

        var taskModalContent=document.createElement('div');
        taskModalContent.className='taskModalContent';
        this.taskModal.appendChild(taskModalContent);

        const closeModalBtn=document.createElement('span');
        closeModalBtn.id="closeModalBtn";
        closeModalBtn.innerHTML="&times";
        taskModalContent.appendChild(closeModalBtn);
        closeModalBtn.addEventListener('click',this.close.bind(this));

        const taskTittle=document.createElement('span');
        taskTittle.innerHTML='Enter your task';
        taskModalContent.appendChild(taskTittle);

        const inputModalTask=document.createElement('input');
        inputModalTask.id="inputTask";
        taskModalContent.appendChild(inputModalTask);
        inputModalTask.addEventListener('keyup',this.enterData.bind(this));
    }

    open(){
        this.taskModal.style.display='block';
    }

    close(){
        this.taskModal.style.display='none';
    }

    enterData(e){
        var input=document.getElementById('inputTask');
        if(e.keyCode==13){
            //let inputTittle=document.createElement('p');
            //inputTittle.className='inputTittle';
            //inputTittle.innerHTML=input.value;
            alert(input.value)
            //taskModalContent.appendChild(inputTittle);
            input.value='';
            input.blur();
        }
    }

    checkModal(e){
        if(e.target == this.taskModal){
            this.taskModal.style.display='none';
        }
    }   

    refresh(){
        var day = document.getElementsByClassName('day');
        var modall=document.getElementsByClassName('taskModal');

        day = document.getElementsByClassName('day');
        [].forEach.call(day,function(el){
            el.addEventListener('click', function (event) {
                event.preventDefault();
                modal.open();
            });
        });

        [].forEach.call(modall,function(el){
            el.addEventListener('click', function (event) {
                event.preventDefault();
                modal.checkModal(event);
            });
        });
    }
}

var modal = new Modal();
modal.refresh();

