dropdown = document.querySelector('.dropdown');
menu = document.querySelector('.menu');
top = document.querySelector('.top')
nav = document.querySelector('.nav')

function drop(){
    if(dropdown.style.display === 'none'){
        dropdown.style.display = 'flex';
    }
    else{
        dropdown.style.display = 'none';
    }
}