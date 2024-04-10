const chkBox=document.querySelector('input[type="checkbox"]')
const nav=document.getElementById('navigation')
const textBox=document.querySelector('.text-box')
const toggleIcon=document.querySelector('.toggle-icon')
const image1=document.querySelector('.image-1')
const image2=document.querySelector('.image-2')
const image3=document.querySelector('.image-3')

function toggleImageMode(color){
    image1.src=`img/undraw_proud_coder_${color}.svg`
    image2.src=`img/undraw_feeling_proud_${color}.svg`
    image3.src=`img/undraw_conceptual_idea_${color}.svg`
}


function lightMode(){
    nav.style.backgroundColor='rgb(255,255,255,50%)'
    textBox.style.backgroundColor='rgb(0,0,0,50%)'
    toggleIcon.children[0].textContent="Light Mode"
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    toggleImageMode("light")
}

function darkMode(){
    nav.style.backgroundColor='rgb(0,0,0,50%)'
    textBox.style.backgroundColor='rgb(255,255,255,50%)'
    toggleIcon.children[0].textContent="Dark Mode"
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
    toggleImageMode("dark")
}

function toggleMode(e){
    if (e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        localStorage.setItem('theme','dark')
        darkMode()
    }else{
        document.documentElement.setAttribute('data-theme','light')
        localStorage.setItem('theme','light')
        lightMode()
    }
}

chkBox.addEventListener("change",toggleMode)
const currentTheme=localStorage.getItem('theme')

if (currentTheme){
    if (currentTheme=="dark"){
        chkBox.checked=true
        document.documentElement.setAttribute('data-theme','dark')
        darkMode()
    }
}