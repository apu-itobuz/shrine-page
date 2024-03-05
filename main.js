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



function showSection() {
    var inputText = document.querySelector('.inputText').value.toLowerCase();
    var sections = ['hero', 'card', 'even'];

    sections.forEach(function (section) {
        var element = document.getElementById(section + 'Section');
        if (element) {
            element.style.display = (inputText.includes(section)) ? 'block' : 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.inputText').addEventListener('input', showSection);
});
