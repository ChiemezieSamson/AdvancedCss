import { listItems, Images } from "./Data.js"

const List = document.querySelector(".list")
const Thumbnail = document.querySelector(".thumbnail")
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')

const myListElements = listItems.map((list) => (
  `<div class="item">
     <img src=${list.Image} alt=${list.type}/>

    <div class="content">
      <h2 class="title">${list.title}</h2>
      <h4 class="type">${list.type}</h4>
      <p class="description">
        ${list.description}
      </p>
      <div class="button">
        <button type="button">${list.buttonTex}</button>
      </div>
    </div>
  </div>`
)).join('') // Join all items into a single string

// Set the innerHTML once
List.innerHTML = myListElements

Images.forEach((thumbnail) => {
  
  const thumbnailHTML = `
    <div class="item">
      <img src=${thumbnail.Image} alt="thumbnail"/>
    </div>`;

    if (thumbnail.Image) {

      Thumbnail.innerHTML += thumbnailHTML;  // Append each item to the existing content
    }
})

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
  }