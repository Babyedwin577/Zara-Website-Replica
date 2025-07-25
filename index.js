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




