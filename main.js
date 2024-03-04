const heroSection = document.getElementById("heroSection");
const cardSection = document.getElementById("cardSection");
const evenSection = document.getElementById("evenSection");

const search = document.getElementById("search");
const showInput = document.getElementById("showInput");

//let inputBox = document.createElement("input");
//inputBox.type = "text";
//inputBox.className = "inputBox"; // set the CSS class
//console.log(inputBox);

function showcommentform() {
    let data =
        "Section:<br><input class = 'inputBox' type='text' name='name'>";
        showInput.innerHTML = data;
        //-----
        if(showInput== 'heroSection'){
            cardSection,evenSection.style.display = 'none';
        }
         
}

// function searchSection() {
//     search.append(inputBox);
//     showInput.append(search);
//     console.log("click");
// }

search.addEventListener("click", () => {
    showcommentform()
    });

    search.addEventListener("click",(e) =>{
    
    })
    


