let popup = document.getElementById("modal");

//открыть модальное
function openModalWindow() {
let openModal = document.querySelectorAll(".autorSection");
  for (let z = 0; z < openModal.length; z++) {
      openModal[z].onclick = function() {
          popup.style.display = "block";
          fon.style.display = "block";
      }
    }
}
openModalWindow();

//закрыть модальное
let closeP = document.querySelector("#close-button");
let fon = document.querySelector("#modal-overlay");
function closeModalWindow() {
    closeP.onclick = function () { 
        popup.style.display = "none";
        fon.style.display = "none";
    }
    fon.onclick = function () { 
        popup.style.display = "none";
        fon.style.display = "none";
    }
}
closeModalWindow();

let modalButtons = document.querySelectorAll(".authors-block");
let bioAut = document.querySelector(".textBiography");
let innerBio = [];
let innerAuthPhoto = [];

function modalWindowBlock() {
    returnObj.forEach(function(item) {
      item.authors.forEach(function(bio) {
        innerAuthPhoto.push(bio.picture);
        innerBio.push(bio.biography);
    });

  });
}
modalWindowBlock();

//биография
function addAuthorsBiography() {
  innerBio.forEach(function(bio, ind) {
   modalButtons[ind].addEventListener('click', function() {
      bioAut.innerHTML = bio;
    });
  });
}
addAuthorsBiography();

//фото
function addAuthorsPhoto() {
  innerAuthPhoto.forEach(function(pic, ind) {
    modalButtons[ind].addEventListener('click', function() {
      let authorsWorksBlocks = document.querySelector(".mainPhoto").children[0].src = "../WikiLitEdited/" + pic; 
    });
  });
}
addAuthorsPhoto();

let innerAuthTitle = [];
let innerAuthReleaseYears = [];
let innerAuthGen = [];

let worksReleaseYears = document.querySelector(".textReleaseYears");
let worksBlock = document.querySelector(".textGenre");
let worksTitle = document.querySelector(".textTitle");

function addAuthorsW() {
  returnObj.forEach(function(item) {
    item.authors.forEach(function(bio) {
      bio.works.forEach(function(work, ind) {
        let replaceReleaseYears = work.releaseYears.replace(/, /g, ' <br /> ');
        let replaceGenre = work.genre.replace(/, /g, ' <br /> ');
        let replaceTitle = work.titles.replace(/, /g, ' <br /> ');

              innerAuthGen.push(replaceGenre);
              innerAuthTitle.push(replaceTitle);
              innerAuthReleaseYears.push(replaceReleaseYears);

              innerAuthReleaseYears.forEach(function(g, i, p) {
                  modalButtons[i].addEventListener('click', function() {
                    worksReleaseYears.innerHTML = innerAuthReleaseYears[i];
                  });   
                });
                innerAuthGen.forEach(function(g, i, p) {
                  modalButtons[i].addEventListener('click', function() {
                    worksBlock.innerHTML = innerAuthGen[i];
                  });   
                });
                innerAuthTitle.forEach(function(g, i, p) {
                  modalButtons[i].addEventListener('click', function() {
                    worksTitle.innerHTML = innerAuthTitle[i];
                  });   
                });

      });
    });
  });
}
addAuthorsW()




let editBtn = document.getElementById("editButton");
let editText = document.querySelectorAll(".textBiography")
     console.log(editText)
editBtn.addEventListener("click", function(e) {
  if (!editText[0].isContentEditable) {
    editText[0].contentEditable = "true";
    editBtn.ierHTML = "Save Changes";
    editBtn.style.backgroundColor = "#17da58";
  } else {
    editText[0].contentEditable = "false";
    editBtn.ierHTML = "Enable Editing";
    editBtn.style.backgroundColor = "#f15000";
     // localStorage.setItem(editText[0].getAttribute("class"), editText[0].ierHTML);
  }
});
/*
if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem("title") !== null) {
    editText[0].ierHTML = localStorage.getItem("testObject");
  }
}
*/










/*
let gen = document.querySelector(".textWork");
let worksArr = [];
let genreArr = [];
let titleArr = [];
let releaseYearsArr = [];
returnObj.forEach(function (outer, ind) {
  worksArr.push(outer.works)
    worksArr[ind].forEach(function (outer, ind) {
      genreArr.push(outer.genre);
      titleArr.push(outer.title);
      releaseYearsArr.push(outer.releaseYears);
    });
});
let editArr = [];
editArr = genreArr.splice(0, 7).join("\n");
let editArr2 = [];
editArr2 = titleArr.splice(0, 7).join ("\n");


worksArr.forEach(function(item, ind) {
modalButtons[ind].addEventListener('click', function(e) {
  gen.innerHTML = editArr + ':' + editArr2;

   });
});










  //=> "- " + elem.releaseYears + " " + elem.genre + ": " + elem.title).join ("\n");



p.forEach(function(item, ind) {
modalButtons[ind].addEventListener('click', function(e) {
  gen.innerHTML = ro;
   });
});





//npm i webpack-cli -D
//npm i jquery -
//файл: start webpack watch
*/