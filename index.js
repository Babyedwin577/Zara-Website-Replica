console.log("The start")
const buttons=document.querySelectorAll(".scroll-ul .special")
const cards=document.querySelectorAll(".card-grid .card") 
const firstButton=buttons[0]
const firstspan=firstButton.querySelector('.font-styles')
firstspan.style.fontFamily='medium'
firstspan.style.fontWeight='500' 
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        buttons.forEach((bb)=>{
           const unclickedSpan=bb.querySelector(".font-styles")
           if(unclickedSpan){
            unclickedSpan.style.fontWeight='300'
            unclickedSpan.style.fontFamily='large'
           }
        })
        const clickedSpan=btn.querySelector('.font-styles')
        if(clickedSpan){
            clickedSpan.style.fontWeight=500;
            clickedSpan.style.fontFamily='medium'
        }
       const buttonvalue=btn.dataset.filter;
       console.log(buttonvalue)
       cards.forEach((card)=>{
           const cardValue=card.dataset.id;
           console.log(cardValue)
           if(buttonvalue=="ALL"){
            card.style.display="flex"
           }
           else if(buttonvalue.toLowerCase()==cardValue.toLowerCase()){
            card.style.display="flex"
           }
           else{
            card.style.display="none"
           }
       })
    })
})

let scrollValue=0;
const scroll=document.querySelector(".scroll-menu")
window.addEventListener("scroll",()=>{
   let scrolled=window.pageYOffset
   console.log(scrolled)
   if(scrolled>scrollValue){
    scroll.style.transition="opacity 1.2s ease"
    scroll.style.opacity="0"
    scroll.classList.add("hide-scroll-menu")
   }
   else{
    scroll.style.opacity="1"
    scroll.classList.remove("hide-scroll-menu")
   }
   scrollValue=scrolled<= 0 ? 0 : scrolled
})

const view=document.querySelector(".view")
const cardGrid=document.querySelector(".card-grid")
const viewCount=document.querySelector('.haha')
const info=document.querySelectorAll(".item-info-wrapper")
ifclicked=false
view.addEventListener('click',()=>{
    console.log("clicked")
    if(ifclicked){
        cardGrid.style.gridTemplateColumns="repeat(2,1fr)"
        viewCount.innerHTML=2
        info.forEach((element)=>{
            element.style.display="block"
        })
    }
    else{
        cardGrid.style.gridTemplateColumns="repeat(4,1fr)"
        viewCount.innerHTML=4
        info.forEach((element)=>{
            element.style.display="none"
        })
    }
    ifclicked= !ifclicked
})

const burger=document.querySelector(".burger-navbar")
const burgerMenu=document.querySelector(".full-screen-menu")
const mach=document.querySelector(".mach")
burger.addEventListener('click',()=>{
    console.log("burger clicked")
    burgerMenu.style.opacity="1"
    burgerMenu.style.transition="right 0.5s ease, opacity 0.5s ease"
    burgerMenu.style.background="#fff"
    burgerMenu.style.zIndex="9999"
    mach.style.opacity="1"
    mach.style.pointerEvents="none"
})

