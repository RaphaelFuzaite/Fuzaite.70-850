var btnClick = document.getElementById('save'),
	btnBlur = document.getElementById('save'),
	ClickSaveData = function(ev) {
		ev.preventDefault();
		console.log("Clicked:", ev);
		btnClick.removeEventListener('click', ClickSaveData, false);
	},
	OtherClickSaveData = function(ev) {
		ev.preventDefault();
		console.log("Other Clicked:", ev);
	},
	BlurSaveData = function(ev) {
		ev.preventDefault();
		console.log("Blured:", ev);
	};

btnClick.addEventListener('click', ClickSaveData, false);
btnClick.addEventListener('click', OtherClickSaveData, false);
btnClick.addEventListener('blur', BlurSaveData, false);


/* Capturing model the event will be handled */
var divClick = document.getElementById('divAction'),
	ulHover = document.getElementById('ulAction'),
	liDoubleClick =  document.getElementById('liAction'),
	DoubleClickAction = function(ev) {
		ev.stopPropagation();
		console.log("Double Click:", ev);
	},
	ClickAction = function(ev) {
		console.log("Click:", ev);
	},
	HoverAction = function(ev) {
		console.log("Hover:", ev);
	};

divClick.addEventListener('click', ClickAction, true);
liDoubleClick.addEventListener('click', DoubleClickAction, false);
ulHover.addEventListener('click', HoverAction, false);