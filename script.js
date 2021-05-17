let headerMenuBtn = document.querySelector('.header-menu-img');
let headerMenu = document.querySelector('.header-menu');
let body = document.querySelector('body')


headerMenuBtn.addEventListener('click', function(){
    headerMenu.classList.toggle('active-menu');
})





//inputs
let input1 = document.querySelector('.one-input');
let input2 = document.querySelector('.two-input');   
// let btn = document.querySelector('.btn');

input1.addEventListener('keypress', function(e) {
    if(input1.value.length == 10) {
        input2.focus()
        e.preventDefault()
    }
})


input2.onkeydown = function(event){
    if(event.keyCode == 8 && input2.value.length == 0) {
        input1.focus()
        // event.preventDefault()
        // input1.focus()
    }
    console.log(event.keyCode)
}
