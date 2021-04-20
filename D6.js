

    let buttonValue = true
    const changeH1Heading = function(){
    let firstHeading = document.getElementById('mainTitle')
    
    if(firstHeading.innerText = buttonValue){      
        firstHeading.innerText = 'Smart Shopping'
        firstHeading.style.color = "gold"
    }
    else{
        // firstHeading.style.color = "gold"
        firstHeading.innerText =  'Smart OneStopShop'
        firstHeading.style.color = "black"
       
        // let colorChange = firstHeading.innerText
        // colorChange.style.color = "gold"       
    }
    buttonValue = !buttonValue
   
}
let back = false
const changePageBackgroundColor = function(){
    if(back === true){
        document.body.style.backgroundColor = "white"
    }
    else{
        document.body.style.backgroundColor = "lightgrey"
    }  
    back = !back
}

let foot = false
const changeFooterAddress = function(){
    let footerAddress = document.getElementById('footer')  
    if(foot === true){
        footerAddress.innerText = 'myNew Adresss Street no. 45, 78021, Hamburg, Germany'
    }
        else{
            footerAddress.innerText = 'Visit us at: Fake Address, str no. fake, postal# fake, fake, fake'        
    }
    foot = !foot
}

let css = false
const addCssClass = function(){
    let newCssClass = document.querySelectorAll('.link')  
        for(let i=0; i<newCssClass.length; i++){
            if(css === true){
                newCssClass[i].classList.remove("amazonChange")
            }
            else{
                newCssClass[i].classList.add("amazonChange")
            }
                    
    }  
    css = !css
}

// const toggleClass = function(){
//     let imageToggle = document.querySelectorAll("img")
//     for(let i=0; i<imageToggle.length; i++){
//          if(imageToggle){
//             imageToggle[i].style.display = "none"

//         }

       
//     }
// }
let toggle = false
const toggleClass = function () {
    //
    let imageToggle = document.querySelectorAll("img")
    
    for(let i=0; i<imageToggle.length; i++){
        if(toggle === true){
            imageToggle[i].style.display = 'none'
    }
    else{
        imageToggle[i].style.display = 'block'
    }
  }
  toggle = !toggle
}


// const toggleClass = function(){
//     let imageToggle = document.getElementsByClassName(".Image")
//     for(let i=0; i<imageToggle.length; i++){  
//             if(imageToggle[i].style.display === "block"){
//                 imageToggle[i].style.display = "none"
//             }
//             else{
//                 imageToggle[i].style.display = "block" 
//             }
            
                          
       
//     }
// }
let color = false
const priceColor = function(){
    let diffColor = document.getElementsByClassName("price")
    let colorArray = ["red", "orange", "yellow", "green", "blue"]
    
 
        for(let i=0; i<diffColor.length; i++){
            for(let j=0; j<colorArray.length; j++){
                if(color === true){
                    diffColor[i].style.color = colorArray[i]
                }
                else{
                    diffColor[i].style.color = 'black'
                }
                
            }
        }  
    color = !color
}

