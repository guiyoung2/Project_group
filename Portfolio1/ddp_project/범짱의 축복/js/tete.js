let clickbtn = document.querySelector('.clicka');
let targetbox = document.querySelector('.joybox');

console.log(clickbtn);
console.log(targetbox);

clickbtn.addEventListener("click", function() {
	if (targetbox.style.display == 'none' || targetbox.style.display == '') {
		targetbox.style.display = "block";
	} else {
		targetbox.style.display = "none";
	};
});


