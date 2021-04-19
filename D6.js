const changeH1Heading = function(){
    let firstHeading = document.getElementById('mainTitle')  
    firstHeading.innerText = 'Crafty Love'.toUpperCase()
}

const changePageBackgroundColor = function(){
    document.body.style.backgroundColor = "pink"
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
    let imageToggle = document.querySelectorAll(".Image")
    for(let i=0; i<imageToggle.length; i++){

        imageToggle[i].style.display = "none"
    }
}
toggleClass()

const priceColor = function(){
    let diffColor = document.getElementsByClassName("price")
    let colorArray = ["red", "orange", "yellow", "green", "blue"]
    for(let i=0; i<diffColor.length; i++){
        for(let j=0; j<colorArray.length; j++){
            diffColor[i].style.color = colorArray[i]
    }
    }

}

