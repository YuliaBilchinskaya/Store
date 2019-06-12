//фильтр по странам
let countr = document.querySelectorAll(".main-block");
    document.querySelector("#countries").onchange = function() {
        let n = this.options[this.selectedIndex].textContent.slice(0, -1);
            [].forEach.call(countr, function(el) {
                el.style.display = el.textContent.match(n) ? "block":"none";
            });
        };

// работать с объектом а не со страницей

//фильтр по веку (не работает)
let innerCentury = [];
returnObj.forEach(function(item){
  innerCentury.push(item.century);
});

let cent = document.querySelectorAll(".authors-block");
document.querySelector("#century").onchange = function() {
    let n = this.options[this.selectedIndex].textContent.slice(0, -1);
        [].forEach.call(cent, function(el) {
            for(let c = 0; c <= innerCentury.length; c++) {
            if (el.textContent.match(n) ) { //?????????????????????????
                el.style.display = "block";
             } else {
                el.style.display = "none";
             }
            }
            });
    };
