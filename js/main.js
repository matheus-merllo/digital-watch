window.addEventListener('load', time);
window.addEventListener('load', weekday);

setInterval(time, 1000);

function weekday(){
    var wDay = document.querySelector('#weekday')
    var fullDay = document.querySelector('#day');
    
    var date = new Date();
    var weekday = date.getDay();

    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth()+1).padStart(2, '0');
    var year = String(date.getFullYear());

    fullDay.innerHTML = `${day}/${month}/${year}`;

    switch(weekday){
        case 0:
            wDay.innerHTML = 'domingo';
            break;
        case 1:
            wDay.innerHTML = 'segunda-feira';
            break;
        case 2:
            wDay.innerHTML = 'terça feira';
            break;
        case 3:
            wDay.innerHTML = 'quarta-feira';
            break;
        case 4:
            wDay.innerHTML = 'quinta-feira';
            break;
        case 5:
            wDay.innerHTML = 'sexta-feira';
            break;
        case 6:
            wDay.innerHTML = 'sábado';
            break;
    }
}

function time(){
    var hour = document.querySelector('.hours');
    var minute = document.querySelector('.minutes');
    var second = document.querySelector('.seconds');
    
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = hours<10 ?'0'+hours :hours;
    minutes = minutes<10 ?'0'+minutes :minutes;
    seconds = seconds<10 ?'0'+seconds :seconds;

    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}
