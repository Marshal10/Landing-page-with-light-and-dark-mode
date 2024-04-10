const chkBox=document.querySelector('input[type="checkbox"]')
const nav=document.getElementById('navigation')
const textBox=document.querySelector('.text-box')
const toggleIcon=document.querySelector('.toggle-icon')


function lightMode(){
    nav.style.backgroundColor='rgb(255,255,255,50%)'
    textBox.style.backgroundColor='rgb(0,0,0,50%)'
    toggleIcon.children[0].textContent="Light Mode"
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
}

function darkMode(){
    nav.style.backgroundColor='rgb(0,0,0,50%)'
    textBox.style.backgroundColor='rgb(255,255,255,50%)'
    toggleIcon.children[0].textContent="Dark Mode"
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
}

function toggleMode(e){
    if (e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkMode()
    }else{
        document.documentElement.setAttribute('data-theme','light')
        lightMode()
    }
}

chkBox.addEventListener("change",toggleMode)