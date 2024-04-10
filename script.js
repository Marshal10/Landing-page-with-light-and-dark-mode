const chkBox=document.querySelector('input[type="checkbox"]')
const nav=document.getElementById('navigation')
const textBox=document.querySelector('.text-box')


function lightMode(){
    nav.style.backgroundColor='rgb(255,255,255,50%)'
    textBox.style.backgroundColor='rgb(0,0,0,50%)'
}

function darkMode(){
    nav.style.backgroundColor='rgb(0,0,0,50%)'
    textBox.style.backgroundColor='rgb(255,255,255,50%)'

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