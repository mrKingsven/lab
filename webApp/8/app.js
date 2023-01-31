const samoyedTxt = document.querySelector('#samoyed')
const labradorTxt = document.querySelector('#labrador')
const shavkaTxt = document.querySelector('#shavka')

const samoyedImg = document.querySelector('#img-samoyed')
const labradorImg = document.querySelector('#img-labrador')
const shavkaImg = document.querySelector('#img-shavka')

const allImg = document.querySelectorAll('.dog-img')



samoyedTxt.addEventListener("mouseover", ()=>{
  samoyedImg.style.display = 'block'
  labradorImg.style.display = 'none'
  shavkaImg.style.display = 'none'
});
labradorTxt.addEventListener("mouseover", ()=>{
  samoyedImg.style.display = 'none'
  labradorImg.style.display = 'block'
  shavkaImg.style.display = 'none'
});
shavkaTxt.addEventListener("mouseover", ()=>{
  samoyedImg.style.display = 'none'
  labradorImg.style.display = 'none'
  shavkaImg.style.display = 'block'
});