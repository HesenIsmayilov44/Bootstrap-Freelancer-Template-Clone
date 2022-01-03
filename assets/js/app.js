// ------------------ Menu activate
let menuBtn = document.querySelector('.menu-activate')
let nav = document.querySelector('.nav')
menuBtn.addEventListener('click', ()=> {
    nav.classList.toggle('active')
    
})



// ------------------ Nav link activate

let links = document.querySelectorAll('.nav a')

links.forEach(link =>{
    link.addEventListener('click', ()=>{
        links.forEach(link_ =>{
            link_.classList.remove('active')
        })
        link.classList.add('active')
        nav.classList.remove('active')
    })
})


// ---------------- Open item details
let body = document.querySelector('body')
let items = document.querySelectorAll('.portifolio-item')

items.forEach(item =>{
    item.querySelector('.go-detail').addEventListener('click',()=>{
        let itemDetail = item.querySelector('.portifolio-details')
        itemDetail.classList.add('active')
        body.classList.add('no-scrool')
        itemDetailCloseIcon = itemDetail.querySelector('.close-details-icon')
        itemDetailCloseIcon.addEventListener('click',()=>{
            itemDetail.classList.remove('active')
            body.classList.remove('no-scrool')
        })
        itemDetailCloseBtn = itemDetail.querySelector('.close-details-btn')
        itemDetailCloseBtn.addEventListener('click',()=>{
            itemDetail.classList.remove('active')
            body.classList.remove('no-scrool')
        })
        itemDetailCloseBackground = itemDetail.querySelector('.details-close-background')
        itemDetailCloseBackground.addEventListener('click',()=>{
            itemDetail.classList.remove('active')
            body.classList.remove('no-scrool')
        })
    })
})



// give active class to nav element when scrooling
let portifolio_ = document.querySelector('#portifolio')
let about_ = document.querySelector('#about')
let contact_ = document.querySelector('#contact')
let home_ = document.querySelector(".home") 
console.log(home_)
var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
        if(elementInViewport(portifolio_)){
                links.forEach(link_ =>{
                    link_.classList.remove('active')
                })
                links[0].classList.add('active')
    
        }else if(elementInViewport(about_)){
            links.forEach(link_ =>{
                link_.classList.remove('active')
            })
            links[1].classList.add('active')
        }
        else if(elementInViewport(contact_)){
            links.forEach(link_ =>{
                link_.classList.remove('active')
            })
            links[2].classList.add('active')
        }
        // remove active class from all links when scroll on top
        if(elementInViewport(home_)){
            links.forEach(link_ =>{
                link_.classList.remove('active')
            })
        }
    },20);
}, false);




function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset
    //   (top + height) <= (window.pageYOffset + window.innerHeight) &&
    //   (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }

  function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }