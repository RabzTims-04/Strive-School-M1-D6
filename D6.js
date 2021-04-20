

    
    const changeH1Heading = function(){
    let firstHeading = document.getElementById('mainTitle')
    
    if(firstHeading.innerText = button.value){      
    firstHeading.innerText = 'Smart Shopping'
    }
    else{
        firstHeading.innerText =  'Smart OneStopShop'
        // let colorChange = firstHeading.innerText
        // colorChange.style.color = "gold"       
    }
    button.value = !button.value
   
}

const changePageBackgroundColor = function(){
    document.body.style.backgroundColor = "lightgrey"
}

const changeFooterAddress = function(){
    let footerAddress = document.getElementById('footer')  
    footerAddress.innerText = 'Visit us at: Fake Address, str no. fake, postal# fake, fake, fake'
}

const addCssClass = function(){
    let newCssClass = document.querySelectorAll('.link')  
        for(let i=0; i<newCssClass.length; i++){
            newCssClass[i].classList.add("amazonChange")        
    }   
}

const toggleClass = function(){
    let imageToggle = document.querySelectorAll("img")
    for(let i=0; i<imageToggle.length; i++){
        if(imageToggle){
            imageToggle[i].style.display = "none"

        }

       
    }
} 

const priceColor = function(){
    let diffColor = document.getElementsByClassName("price")
    let colorArray = ["red", "orange", "yellow", "green", "blue"]
    
 
        for(let i=0; i<diffColor.length; i++){
            for(let j=0; j<colorArray.length; j++){
                diffColor[i].style.color = colorArray[i]
            }
        }  
    
}

