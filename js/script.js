let point;
let comp;
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

function onBtnPoint(){
	if(!document.getElementById('play2').disabled ){
		if (document.getElementById('play2').checked){
			document.getElementById('table1').onclick = onBtn2Player;
		}
		if (document.getElementById('vsComp').checked){
			document.getElementById('table1').onclick = onBtnVScomp;
		}
	}
	if (!document.getElementById('selX').checked || !document.getElementById('sel0').checked){3
		if (document.getElementById('selX').checked){
			point = 'X';
			comp = 'O';
		}
		if (document.getElementById('sel0').checked){
			point = 'O';
			comp = 'X';
		}
		if (document.getElementById('selX').checked || document.getElementById('sel0').checked){
			document.getElementById('play2').disabled = false;
			document.getElementById('vsComp').disabled = false;
			document.getElementById('formSelPlayer').onclick = onBtnPoint;
		}
	}
	
 }
function onBtn2Player(){
	console.log(event)
	disabledSelector();
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
		dubleElemIndexCount = 0;
		if (document.getElementById('selX').checked){
			for (let elem  of arrX){
				if (arr.includes(elem)){
					dubleElemIndexCount++;
				}
			}
		} else {
			for (let elem  of arr0){
				if (arr.includes(elem)){
					dubleElemIndexCount++;
				}
			}
		}
		compArr.push(dubleElemIndexCount);
	}
	let maxIndex = compArr.indexOf(Math.max(... compArr));
	// console.log(compArr, maxIndex + 1)
	// console.log(objWin[maxIndex + 1], event.target.className, arrX)
	for(elem of objWin[maxIndex + 1]){
		if(!arrX.includes(elem)){
			document.getElementsByClassName(elem)[0].innerText = comp;
			return;
		}
	}
}
function onBtnVScomp(){
	disabledSelector()
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
function disabledSelector(){
	document.getElementById('selX').disabled = true;
	document.getElementById('sel0').disabled = true;
	document.getElementById('play2').disabled = true;
	document.getElementById('vsComp').disabled = true;
}
function resetGame(){
	document.getElementById('formSelX0').reset()
	document.getElementById('formSelPlayer').reset()
	
	document.getElementById('selX').disabled = false;
	document.getElementById('sel0').disabled = false;
	arrX = [];
	arr0 = [];
	for(key in objWin){
		for(let elem of objWin[key]){
			document.getElementsByClassName(elem)[0].innerText = '';
		}
	}
}
// function oncl(){
// 	console.log(event)
// }
