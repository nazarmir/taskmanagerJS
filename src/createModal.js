// \b(0?\d{1,2}|1\d{1,2}|2[0-5]{2}|24[0-9]{1})(\.(0?\d{1,2}|1\d{1,2}|2[0-5]{2}|24[0-9]{1})){3}\b

var body=document.body;
class Modal{
    constructor(){
        this.taskModal=document.createElement('div');
        this.taskModal.className='taskModal';
        body.appendChild(this.taskModal);

        const taskModalContent=document.createElement('div');
        taskModalContent.className='taskModalContent';
        this.taskModal.appendChild(taskModalContent);

        const closeModalBtn=document.createElement('span');
        closeModalBtn.id="closeModalBtn";
        closeModalBtn.innerHTML="&times";
        taskModalContent.appendChild(closeModalBtn);
        
        closeModalBtn.addEventListener('click',this.close.bind(this));
    }

    open(){
        this.taskModal.style.display='block';
    }

    close(){
        this.taskModal.style.display='none';
    }

    checkModal(e){
        if(e.target == this.taskModal){
            this.taskModal.style.display='none';
        }
    }
}


var day = document.getElementsByClassName('day');
var modal=document.getElementsByClassName('taskModal');

var modal = new Modal();
[].forEach.call(day,function(el){
    el.addEventListener('click', function (event) {
        event.preventDefault();
        modal.open();
    });
});

[].forEach.call(modal,function(el){
    el.addEventListener('click', function (event) {
        event.preventDefault();
        modal.checkModal();
    });
});