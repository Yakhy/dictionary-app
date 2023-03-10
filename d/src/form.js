import fetchApi from "./request"
import { updateUI } from "./createWord"
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const input = document.getElementById('input')
const form = document.querySelector('.search-form')
import { errorUI } from './errorUI'


form.addEventListener("submit", (e) => {
  e.preventDefault()

  console.log(input.value)
  fetchApi(`${url}${input.value}`)
    .then(data => updateUI(data[0]))
    .catch((error)=>{
      errorUI()
    })
  form.reset()
})