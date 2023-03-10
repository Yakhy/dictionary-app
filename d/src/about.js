const body = document.querySelector('body')
const darkBtn = document.querySelector('#checkbox')
const content = document.querySelector('.dropdown-content')
const style = document.querySelector('.content')
const sans = document.querySelector('.sans')
const serif = document.querySelector('.serif')
const mono = document.querySelector('.mono')
const dropbtn = document.querySelector('.dropbtn')
const input = document.querySelector('.search-input')
// const modeLocal = localStorage.getItem('mode')
// if(modeLocal){
//   body.classList.add('dark-mode')
//   darkBtn.classList.toggle('hidden')
//   lightBtn.classList.toggle('hidden')
// }
const local = localStorage.getItem('mode') 
if(local) {
  body.classList.toggle('dark-mode')
  body.classList.toggle('white')

  dropbtn.classList.toggle('white')
  content.classList.toggle('content')
  input.classList.toggle('input')
}

darkBtn.addEventListener('click', ()=> {
 document.body.classList.toggle('dark-mode')
  body.classList.toggle('white')
  content.classList.toggle('content')
  input.classList.toggle('input')
  
  if(body.classList.contains('dark-mode')){
    localStorage.setItem('mode', 'dark-mode')
    
  } else {
    localStorage.setItem('mode', '')
  }

})



sans.addEventListener("click", ()=>{
  body.style.fontFamily = 'Inter'
  dropbtn.textContent = 'Sans-serif'
  localStorage.setItem('font',  'sans-serif')
})

serif.addEventListener("click", ()=>{
  body.style.fontFamily = 'Lora'
  dropbtn.textContent = 'Serif'
  localStorage.setItem('font',  'serif')
})

mono.addEventListener("click", ()=>{
  body.style.fontFamily = 'Inconsolata'
  dropbtn.textContent = 'Mono'
  localStorage.setItem('font',  'mono')
})

let font = localStorage.getItem('font')
if (font) {
    document.body.style.fontFamily = font
    switch (font) {
        case 'serif':
          dropbtn.textContent = 'Serif'
            break;
        case 'sans-serif':
          dropbtn.textContent = 'Sans-Serif'
            break;
        case 'mono':
          dropbtn.textContent = 'Mono'
            break;
    }
}