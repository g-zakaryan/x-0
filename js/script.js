let loop = 1;
function onBtnClick(){
	if (loop ===  1){
		event.target.innerText = 'X';
		loop = 0;
	} else {
		event.target.innerText = 'O';
		loop = 1
	}
	console.log(loop);
	//console.log(event.target.classList)
}