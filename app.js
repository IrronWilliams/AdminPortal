// const navToggle = document.querySelector('.nav-toggle') //targeting the nav-toggle button on populations.html

// //when add population button is clicked, adding the class population-open to the population-links class
// navToggle.addEventListener('click', () =>{
//     document.body.classList.toggle('nav-open')
// })


// function testButton(){
//     document.getElementById("population-hides").style.display='block' 
//     console.log('testing button')
// }


// const populations = document.querySelector(".population-hides2")
// const popButton = document.querySelector('.population-button')
// const popLinks = populations.querySelectorAll('a')  //grabbing all the a tags from the population choices

// //when add population button is clicked, adding a classList to the population-links class
// popButton.addEventListener('click', ()=>{
//     populations.classList.toggle('population-open')
//     popButton.classList.toggle('toggle')

// })


//targeting the population-toggle button on populations.html. button is in a div with class called 'population-toggle'
const populationToggle = document.querySelector('.population-toggle') 

/*adding an event listener on the button. when the add population button is clicked, adding a class called
 'populations-toggle' to the div the button belongs to. */
populationToggle.addEventListener('click', () =>{
    document.body.classList.toggle('populations-toggle')
})
