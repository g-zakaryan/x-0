let point;
let comp;
let arrX = [];
let arr0 = [];
let objWin = {
	1: ['th1', 'th2', 'th3'],    // ['th1']
	2: ['th4', 'th5', 'th6'],
	3: ['th7', 'th8', 'th9'],
	4: ['th1', 'th4', 'th7'],
	5: ['th2', 'th5', 'th8'],
	6: ['th3', 'th6', 'th9'],
	7: ['th1', 'th5', 'th9'],
	8: ['th3', 'th5', 'th7'],
}

function onBtnPoint(){
	if (document.getElementById('selX').checked){
		point = 'X';
		comp = 'O';
	} else {
		point = 'O';
		comp = 'X';		
	}
	if (document.getElementById('play2').checked){
		document.getElementById('table1').onclick = onBtn2Player;
	} else {
		document.getElementById('table1').onclick = onBtnVScomp;
	}
}
function onBtn2Player(){
	if(event.target.innerText !== 'X' && event.target.innerText !== 'O' && document.getElementById('selX').checked || document.getElementById('sel0').checked){
		if (point === 'X'){
			event.target.innerText = 'X';
			point = 'O';
		} else {
			event.target.innerText = 'O';
			point = 'X';
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
function funComp(){
	let dubleElemIndexCount;
	let compArr = [];
	for (let key in objWin){
		let arr = objWin[key];
		dubleElemIndexCount = 1;
		for (let elem  of arrX){
			if (arr.includes(elem)){
				dubleElemIndexCount++;
			}
		}
		compArr.push(dubleElemIndexCount);
	}
	let maxIndex = compArr.indexOf(Math.max(... compArr));
	for(elem of objWin[maxIndex]){
		if(!arrX.includes(elem)){
			event.target.innerText = comp;
		}
	}
}
function onBtnVScomp(){
	if(event.target.innerText !== 'X' && event.target.innerText !== 'O'){
		event.target.innerText = point;
		if(event.target.innerText === 'X'){
			arrX.push(event.target.className);
		} else {
			arr0.push(event.target.className);
		}
		funComp()
	}

}

// function oncl(){
// 	if(event.target.id === 'vsComp'){
// 		console.log('vsComp')
// 	}
// 	if(event.target.id === 'play2'){
// 		console.log('2pla')
// 	}
// 	console.log(document.getElementById('play2').checked,document.getElementById('vsComp').checked)
	
// }