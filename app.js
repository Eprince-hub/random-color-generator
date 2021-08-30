let colorBox = document.querySelector('.colorBox');
let mainBody = document.querySelector('#text_section');
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let button = document.querySelector('#button');

para1.innerHTML = 'The Hex Value: #000000 ';
para2.innerHTML = 'The RGB Value: rgb(00, 00, 00)';
para1.className = 'hex-section';
para2.className = 'rgb-section';
mainBody.appendChild(para1);
mainBody.appendChild(para2);

//Functions that is generating the color!
function callColors() {
	function randomNumber() {
		const dings = ['A', 'B', 'C', 'D', 'E', 'F'];
		let finalResult = '#';

		for (let i = 0; i < 3; i++) {
			let number = Math.floor(Math.random() * 10);
			let alphabet = Math.floor(Math.random() * dings.length);
			let result = dings[alphabet];
			result += number;
			finalResult += result;
		}
		return finalResult;
	}
	//randomNumber();
	let rgbColor = randomNumber();
	let newValue = rgbColor.substring(1);

	function convertToRGB(hexValue) {
		let regex = /.{1,2}/g;
		let newHexValue = hexValue.match(regex);
		let rgbArrayValue = [
			parseInt(newHexValue[0], 16),
			parseInt(newHexValue[1], 16),
			parseInt(newHexValue[2], 16),
		];
		return rgbArrayValue;
	}

	//convertToRGB(newValue);
	let rgbValue = convertToRGB(newValue);

	para1.innerHTML = 'The Hex Value: ' + rgbColor;
	para2.innerHTML = `The RGB Value: rgb(${rgbValue})`;

	mainBody.appendChild(para1);
	mainBody.appendChild(para2);

	colorBox.style.backgroundColor = `${rgbColor}`;
	mainBody.style.backgroundColor = `rgb(${rgbValue})`;
}

button.addEventListener('click', callColors);
