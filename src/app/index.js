import { site } from "./site";
import { model } from './model';
import '../style/style.css'

const $site = document.querySelector('.site')
const btns = document.querySelectorAll('#btn')

btns.forEach(btn => {
  const type = btn.getAttribute('data-type')
  const currentInput = document.querySelector(type)

  const styles = btn.getAttribute('data-styles')
  const currentStyles = document.querySelector(styles)


  btn.addEventListener('click', () => {
    if(currentInput.value === ''){
      alert('Заполните значения')
    } else {
      model.splice(0, 1)
      model.push({type: type.replace('#', ''), value: currentInput.value, styles: currentStyles.value})
      currentInput.value = ''
      currentStyles.value = ''
      site($site)
    }
  })
})