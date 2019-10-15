		var array = [2, -1, 15, 35, -10, -2];
		var array2 = array.map((item) => {
				return item < 0
		});
		console.log(array2)

		//

		var buttonOne = document.getElementById('block-one');
		function a (){
			var first = document.getElementById('firstBlock').innerHTML = '1'
		};
		var buttonTwo = document.getElementById('block-two');
		function b (){
				var two = document.getElementById('secondBlock').innerHTML = '2'
		};
		var buttonThree = document.getElementById('block-three');
		function c (){
			var two = document.getElementById('thirdBlock').innerHTML = '3'
		};
		var buttonFour = document.getElementById('block-four');
		function d (){
			var two = document.getElementById('fourthBlock').innerHTML = '4'
		};

		buttonOne.onclick = a;
		buttonTwo.onclick = b;
		buttonThree.onclick = c;
		buttonFour.onclick = d;

		//

		var but1 = document.getElementById('block-odin');
		function aaa(){
			let fst = document.createElement('input');
			fst.className = "tbl-inp";
			fst.setAttribute('placeholder', 'enter text');
			td.append(fst);
		};
		var but2 = document.getElementById('block-dva');
		function bbb(){
			let scn = document.createElement('input');
			scn.className = "tbl-inp";
			scn.setAttribute('placeholder', 'enter text');
			tdnext.append(scn);
		};
		but1.onclick = aaa;
		but2.onclick = bbb;