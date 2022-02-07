let loop = 1;
let arrX = [];
let arr0 = [];
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
			arr0.push(event.target.className)
		}
	}
	if (arrX.length >= 3 || arr0.length >= 3){
		for(let key in objWin){
			let winX = 0;
			let win0 = 0;
			let arr = objWin[key];
			arrX.forEach(elem => {
				if(arr.includes(elem)){
					winX++;
				}
			});
			arr0.forEach(elem => {
				if(arr.includes(elem)){
					win0++;
				}
			});
			if (winX === 3){
				document.getElementById('h1').innerHTML = 'Win X';
				document.getElementById('table1').onclick = '';
				return;
			}
			if (win0 === 3){
				document.getElementById('h1').innerHTML = 'Win 0';
				document.getElementById('table1').onclick = '';
				return;
			}
		}
	}
	if (arrX.length === 5 || arr0.length === 5){
		document.getElementById('h1').innerHTML = 'Draw!';
		document.getElementById('table1').onclick = '';
	}
}
