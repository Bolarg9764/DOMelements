
/*CHANGING THE ENTIRE BODY ELEMENT
WITH AN EVENET LISTENER */

/*const body = document.body;

body.addEventListener('click', () => {
          body.innerHTML = '<h1>Hello, world</h1>';
          console.log('you clicked on the body of the page');
                               
 });*/


const btnUpdate = document.getElementById("btn-main");
const btnToggle = document.querySelector(".btn-toggle");



//INSTEAD OF SELECTING ELEMENTS WITH GETELEMENTSBYTAGNAME
// QUERY SELECTOR SEEMS TO BE A MORE EFFICIENT WAY 
//const highlights = document.getElementsByClassName("highlight");
const highlights = document.querySelectorAll(".highlight");
for(const highlight of highlights) {
  highlight.style.backgroundColor = "cornsilk";
}

//INSTEAD OF SELECTING ELEMENTS WITH GETELEMENTSBYTAGNAME
// QUERY SELECTOR SEEMS TO BE A MORE EFFICIENT WAY 
//const items = document.getElementsByTagName("li");
const items = document.querySelectorAll("li");
for(let i = 0; i<items.length; i++) {
  items[i].style.color = "orchid";
  
}

/*btnUpdate.addEventListener('click', () => {
  headline.style.border = "solid 2px red";
  headline.style.fontSize = "60px"
     const headline = document.getElementById("headline");
     const input = document.querySelector('.input-main');            
          
      headline.textContent = input.value;
      headline.className = 'grow';
      input.value = '';;*/
                           
                           
                           }
 );

btnToggle.addEventListener('click', () => {

  const listContainer = document.querySelector('.list-container');
  
if (listContainer.style.display === 'none') {
  //listContainer.style.display = 'block';
  listContainer.removeAttribute('style');
  btnToggle.textContent  = "hide List"
} else{
  listContainer.style.display = 'none';
  btnToggle.textContent  = "show List";
}


 });





