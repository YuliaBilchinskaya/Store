let images = new Array();
let i = 0;
images[0] = "./sass/img/234.jpg";
images[1] = "./sass/img/3.jpg";
images[2] = "./sass/img/4.jpg";
images[3] = "./sass/img/1.jpg";
function viewImages() {
    document.getElementById("backgroundPhoto").children[0].src = images[i];
    i++;
    if (i == images.length) {
        i = 0;
    }
    setTimeout("viewImages()",5000);
}
viewImages();

// блок: блок автора + страна
let contentBlock = document.getElementById("content");

function authorBlocks() {
    returnObj.forEach(function(authors) {
        addMainBlock(contentBlock, authors);
    })
}

authorBlocks();

//Создаёт раздел со страной, заполняет авторов
function addMainBlock(contentBlock, country) {

    let mainBlock = document.createElement("div");
    mainBlock.className = "main-block";
    contentBlock.appendChild(mainBlock);

    let mainTitle = addMainTitleBlock(mainBlock);
    let headerTitle = addAuthorTitleParts(mainTitle);
    addAddButtonParts(mainTitle, country.id);
    fillCountry(headerTitle, country);

    country.authors.forEach(function(author){
        let authsBlock = addAuthorsBlock(mainBlock);
        let informationBlock = addNewAuthorBlock(authsBlock, author);
    })
}

//добавляет блок: заголовок
function addMainTitleBlock(mainBlockForTitle) {
    let mainTitle = document.createElement("div");
    mainTitle.className = "mainTitle";
    mainBlockForTitle.appendChild(mainTitle);
    let hr = document.createElement("hr");
    mainBlockForTitle.appendChild(hr);
    return mainTitle
}

//добавляет блок страна
function addAuthorTitleParts(mainTitleBlock) {
    let headerTitle = document.createElement("h3");
    headerTitle.className = "title-block";
    mainTitleBlock.appendChild(headerTitle);
    return headerTitle;
}

//добавляет блок кнопка
function addAddButtonParts(mainTitleBlock, countryId) {
    let butTitle = document.createElement("button");
    butTitle.className = "addAuthor";
    butTitle.countryType = countryId;
    butTitle.innerText = "Добавить автора";
    mainTitleBlock.appendChild(butTitle);
}

// Заполнение страны
function fillCountry(headerTitle, countryData) {
    headerTitle.innerHTML = countryData.title;
}

//блок автора
function addAuthorsBlock(mainBlockForAuth, author) {
    let mainAuthorsBlocks = document.createElement("div");
    mainAuthorsBlocks.className = "authors-block";
    mainBlockForAuth.appendChild(mainAuthorsBlocks);
    return mainAuthorsBlocks;
}

//Заполняет инфу по автору
function addNewAuthorBlock(authBlock, author) {
    authBlock.innerHTML = '<div class = "createBlock"><div class = "photo-block"></div><div class = "information-block"></div><button class="del" >&#10006;</button></div></div><br>';
    let informationBlock = authBlock.querySelector(".information-block");

    let paragraph = document.createElement("p");
    paragraph.className = "autorSection";
    informationBlock.appendChild(paragraph);

    paragraph.innerHTML = author.name + '<br />' + author.year;

    let photoChild = authBlock.querySelector(".photo-block");
    let image = new Image();
    image.className = "img-aut";
    image.src = author.picture;
    image.addEventListener('load', function() {
        photoChild.appendChild(image);
    });
}

//стрелочка 

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
            if ($(window).scrollTop() != "0") {
                $(this).fadeIn("slow")
            }
            let scrollDiv=$(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() == "0"){
                    $(scrollDiv).fadeOut("slow")
                } else { 
                    $(scrollDiv).fadeIn("slow")
                }
            }); 
                $(this).click(function() {
                    $("html, body").animate({scrollTop:0},"slow")
                })
    }});

$(function() { 
    $("#toTop").scrollToTop(); 
}); 



