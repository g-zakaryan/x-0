let loop = 1;
let arrX = [];
let arrO = [];
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
			arrX.push(event.target.className)
		}
		if(event.target.innerText === 'O'){
			arrO.push(event.target.className)
		}
	}
	if (arrX.length >= 3 || arrO.length >= 3){
		for(let key in objWin){
			let winX = 0;
			let winO = 0;
			let arr = objWin[key];
			arrX.forEach(elem => {
				if(arr.includes(elem)){
					winX ++;
				}
			});
			arrO.forEach(elem => {
				if(arr.includes(elem)){
					winO ++;
				}
			});
			console.log(winX, winO);
			if (winX === 3){
				alert ('Win X');
			}else if (winO === 3){
				alert ('Win O');
			}
		}
	}
	if (arrX.length === 5 || arrO.length === 5){
		alert('Draw');
	}
}
