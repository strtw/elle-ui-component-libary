var compContainers = document.querySelectorAll('.componentSection__componentContainer');
var compHTML, compMarkupDisplay;
var pre, code; 
for(var i = 0; i < compContainers.length; i++){
	compHTML = compContainers[i].querySelector('.componentContainer__display');
	compMarkupDisplay = compContainers[i].querySelector('.componentContainer__markup');
	if(compMarkupDisplay === null) continue;
	pre = document.createElement('pre');
	code = document.createElement('code');
	code.innerText = compHTML.innerHTML.trim();
	pre.appendChild(code);
	compMarkupDisplay.appendChild(pre);
}