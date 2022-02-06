let loop = 1;
let arrX = [];
let aaxO = [];
function onBtnClick(){
	if(event.target.innerText !== 'X' && event.target.innerText !== 'O'){
		if (loop ===  1){
			event.target.innerText = 'X';
			loop = 0;
		} else {
			event.target.innerText = 'O';
			loop = 1
		}
		if(event.target.innerText === 'X'){
			console.log('ss');
		}
	}
	
	//console.log(event);
	console.log(event.target.className)
}
let objWin = {
	1: ['th1', 'th2', 'th3'],
	2: ['th4', 'th5', 'th6'],
	3: ['th7', 'th8', 'th9'],
	4: ['th1', 'th4', 'th7'],
	5: ['th2', 'th5', 'th8'],
	6: ['th3', 'th6', 'th9'],
	7: ['th1', 'th5', 'th9'],
	8: ['th3', 'th5', 'th7'],
}
