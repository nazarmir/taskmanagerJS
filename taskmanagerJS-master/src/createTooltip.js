class createTooltip{
    constructor() {
        this.taskToolTip = document.createElement('div');
        this.taskToolTip.className = 'tooltip';
    }

    show(data) {
        setTimeout(1000);
        this.taskToolTip.style.display = 'block';
        this.taskToolTip.innerHTML = data;
        document.body.appendChild(this.taskToolTip);
    }

    hide() {
        this.taskToolTip.style.display = 'none';
    }
}

var tooltip = new createTooltip();
var day = document.getElementsByClassName('day');
[].forEach.call(day,function(el){
    
     var data = document.getElementById('november').getAttribute('data-ele');
    el.addEventListener('mouseover', function (event) {
        event.preventDefault();
        tooltip.show(data);
    });
});
[].forEach.call(day,function(el){
    el.addEventListener('mouseout', function (event) {
        event.preventDefault();
        tooltip.hide();
    });
});