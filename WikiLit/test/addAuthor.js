//открыть
let modalForm = document.getElementById("modalForm");
let modalFormBack = document.getElementById("modal-background");
let openModal = document.querySelectorAll(".addAuthor");
function openModalForm() {
    for (let om = 0; om < openModal.length; om++) {
        openModal[om].onclick = function() {
            modalForm.style.display = "block";
            modalFormBack.style.display = "block";
        }
    }
}
openModalForm();
//закрыть
let closeB1 = document.querySelector("#closeModalForm");
let closeB2 = document.querySelector("#btn-secondary");
let background = document.querySelector("#modal-background");
function closeModalForm() {
    closeB1.onclick = function () {
        modalForm.style.display = "none";
        background.style.display = "none";
    }
    closeB2.onclick = function () {
        modalForm.style.display = "none";
        background.style.display = "none";
    }
    background.onclick = function () {
        modalForm.style.display = "none";
        background.style.display = "none";
    }

}
closeModalForm();
/**добавить автора**/
let butSave = document.querySelector("#btn-primary");
let butAdd = document.querySelectorAll(".addAuthor");
for(let par = 0; par < butAdd.length; par++) {
    let parent = butAdd[par].parentNode;
}
parent.addEventListener('click', function(e) {
    if (e.target.classList.contains('addAuthor')) {
        let currentAuthorElement = e.target.parentElement.parentElement;
        let countryType = e.target.countryType;
        let inp = currentAuthorElement.querySelector(".createBlock");
        let blockAdd = currentAuthorElement.querySelector(".authors-block");
            butSave.onclick = function () {
                let name = document.getElementById('recipient-name').value;
                let dates =  document.getElementById('recipient-years').value;
                let imgSrc = document.getElementById('recipient-photo').value;
                let chooseCentury = document.getElementById('recipient-century').value;
                    let clone = inp.cloneNode(true);
                        clone.children[1].innerHTML = name + '<br>' + dates;
                            let image2 = clone.getElementsByTagName('img')[0];
                            image2.url = imgSrc;
                            //image2.onload = function() { console.log('Success'); };
                            // image2.onerror = function() { console.log('Error'); };
                                blockAdd.appendChild(clone);
                                    let newAuthor = {
                                        century: chooseCentury,
                                        picture: imgSrc,
                                        name: name,
                                        year: dates,
                                    }
                                let countryes = JSON.parse(localStorage.getItem('testObject'));
                                    countryes.forEach(function(country) {
                                        if (country.id === countryType) {
                                                country.authors.push(newAuthor);
                                        }
                                    });
                                localStorage.setItem("testObject", JSON.stringify(countryes));
                                    modalForm.style.display = "none";
                                    background.style.display = "none";
            };
    }
});

($("#addNewAuthor").validate());
$(document).ready(function() {
        $("#recipient-name").rules("add", {
            required: true,
                messages: {
                    required: "Это поле обязательно для заполнения",
                }
        });
        $("#recipient-years").rules("add", {
            required: true,
            digits: true,
                messages: {
                    required: "Это поле обязательно для заполнения",
                }
        });  
});

$("#btn-primary").click(function(){ $("#addNewAuthor").submit() ;});
