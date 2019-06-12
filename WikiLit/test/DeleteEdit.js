/*localStorage.setItem("testObject", JSON.stringify(autorsObj));
let ls = JSON.parse(localStorage.getItem("testObject"));

let blockAr = [];
let blocks = document.querySelectorAll(".createBlock");
	blocks.forEach(block => block.addEventListener("click", e => {
		if (!e.target.classList.contains('del')) return;
		    e.target.parentNode.hidden = !e.target.parentNode.hidden;
					e.target.parentNode.style.display = "none";
					blockAr.push(e.target.parentNode.getAttribute("createBlock"));
					ls.push(blockAr);
					if( localStorage.getItem("testObject") !== null ) {
					localStorage.setItem("testObject", JSON.stringify(blockAr));
				}
	}));
*/

let elements = JSON.parse(localStorage.getItem('testObject'));
elements.forEach(function(el) {
	
});
   
/*
function addTasks() {
    var j;
    var myTasks = [];
    let bth = document.querySelectorAll(".del");

    //gets the stored tasks in the array
    myTasks = JSON.parse(localStorage.getItem("testObject")); 
console.log(myTasks)
  	if ((myTasks.length) >= 1) {
      for ( j = 0; j < (myTasks.length); j++) {
       // var ul = document.getElementById("myUL");
       // var li = document.createElement("li");
       // var t = document.createTextNode(myTasks[j]);
      //  li.appendChild(t);
      //  document.getElementById("myUL").appendChild(li);

     //   var span = document.createElement("SPAN");
      //  var txt = document.createTextNode("\u00D7");
     //   span.className = "close";
     //   span.appendChild(txt);
      //  li.appendChild(span);

        for (i = 0; i < bth.length; i++) {
          bth[j].onclick = function () {
           var index= myTasks.indexOf(j);
            console.log(index);
            var div = this.parentElement;
            //myTasks.splice(i,1);
            div.style.display = "none";
    localStorage.remove(index);
	localStorage.setItem('testObject', JSON.stringify(index));
  }
          }
        }
      }
    }
    addTasks();*/