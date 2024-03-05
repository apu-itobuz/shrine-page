// const heroSection = document.getElementById("heroSection");
// const cardSection = document.getElementById("cardSection");
// const evenSection = document.getElementById("evenSection");

// const search = document.getElementById("search");
// const showInput = document.getElementById("showInput");

// //let inputBox = document.createElement("input");
// //inputBox.type = "text";
// //inputBox.className = "inputBox"; // set the CSS class
// //console.log(inputBox);

// function showcommentform() {
//     let data =
//         "Section:<br><input class = 'inputBox' type='text' name='name'>";
//         showInput.innerHTML = data;
//         //-----
//         if(showInput== 'heroSection'){
//             cardSection,evenSection.style.display = 'none';
//         }
         
// }

// // function searchSection() {
// //     search.append(inputBox);
// //     showInput.append(search);
// //     console.log("click");
// // }

// search.addEventListener("click", () => {
//     showcommentform()
//     });

//     search.addEventListener("click",(e) =>{
    
//     })




// document.getElementById('searchButton').addEventListener('click', function() {
//     var inputText = document.querySelector('.inputText');
//     inputText.style.display = (inputText.style.display === 'none' || inputText.style.display === '') ? 'block' : 'none';
// });






// let inputText = document.querySelector(".inputText").value.toLowerCase()
// let sections = ['heroSection', 'cardSection','evenSection']

// function showSection(section){
//     sections.forEach(value){
//         if(sections.value == 'heroSection'){
//          sections.style.display = ? 'block' : 'none';
//         }
//     }
// }


// const heroSection = document.getElementById("heroSection");
// const cardSection = document.getElementById("cardSection");
// const evenSection = document.getElementById("evenSection");
// const inputText = document.getElementById("inputText");

// let sections = ["heroSection","cardSection","evenSection"]

// function showSection(){
//     sections.forEach(value){
//         if(sections.value == 'heroSection'){
//             sections.style.display = (inputText.includes(sections)) ? 'block' : 'none';
//         }
//     }



// let inputText = documet.querySelector('.inputText')
// let sectionArr = ['heroSection', 'cardSection','evenSection']
// function showSection() {
//     inputText.value.toLowerCase()
//     sectionArr.forEach( (sectionValue) => {
//         let element = document.getElementById(sectionValue)
//         if(element){
//             element.style.display = (inputText.includes(element) ? "block" : "none")
//         }
//     })    
// }

// let search = document.querySelector('.search').addEventListener('click', () => { 
// if 
// (if inputText.value.)
// })

//-----------------------------------------------------------------------------------------------

// function showSection() {
//     let inputText = document.querySelector('.inputText').value.toLowerCase();
//     let sections = ['hero', 'card', 'event','footer'];

//     sections.forEach( (x)=> {
//         let element = document.getElementById(x + 'Section');
//         if (element) {
//             element.style.display = (inputText.includes(x)) ? 'block' : 'none';
//         }
//     });

// }



//     document.querySelector('.inputText').addEventListener('input', showSection);


//     document.querySelector('.search').addEventListener('click', function() {
//     let inputText = document.querySelector('.inputText');
//    inputText.style.visibility = (inputText.style.visibility === 'hidden') ? 'visible' : 'hidden';
// });

//--------------------------------------------------------


const heroSection = document.getElementById("heroSection");
const cardSection = document.getElementById("cardSection");
const eventSection = document.getElementById("eventSection");
const search = document.getElementsByClassName("search")[0];
const inputText = document.getElementById("inputText");

let sections = ['hero', 'card', 'event','footer']
function showSection(){
    let inputText1 = inputText.value.toLowerCase()
    sections.forEach((secName) => {
        let element = document.getElementById(secName + 'Section');
            if (element){
                element.style.display = (inputText1.includes(secName)) ? 'block' : 'none';
            }
        
    })
}
inputText.addEventListener('input', showSection);
//------
search.addEventListener('click', () => {
   if(inputText.style.visibility == "hidden"){
        inputText.style.visibility="visible";
    }
    else{
        inputText.style.visibility="hidden";
    }
})
//-------



