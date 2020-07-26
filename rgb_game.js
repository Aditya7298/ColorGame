	var colors = [];
	var squares = document.querySelectorAll(".square");
	var pickedColor;
	var head = document.querySelector("#head");
	head.textContent = pickedColor;
	var message = document.querySelector("#message");
	var h1 = document.querySelector("#h1");
	var playAgain = document.querySelector("#play");
	var easy = document.querySelector("#easy");
	var hard = document.querySelector("#hard");
	var num = 6;
	hard.classList.add("selected");
	var buttons = document.querySelectorAll("button");

	playGame();

	easy.addEventListener("click",function(){

		// alert("selected");
		easy.classList.add("selected");
		hard.classList.remove("selected");
		
		for(var i = 3; i< 6;i++)
			squares[i].style.display = "none";

		num = 3;
		playGame();
	})

	hard.addEventListener("click",function(){

		hard.classList.add("selected");
		easy.classList.remove("selected");
		
		for(var i = 3; i< 6;i++)
			squares[i].style.display = "block";
		num = 6;

		playGame();
	})

	for(var i = 0; i<3;i++)
	{
		buttons[i].addEventListener("onmouseover",function(){

		     this.style.background = "steelBlue";
	    })

	    buttons[i].addEventListener("onmouseo",function(){

		     this.style.background = "steelBlue";
	    })
	}



	playAgain.addEventListener("click",function(){

		message.textContent = "";

		if(playAgain.textContent === "Play Again?")
			playAgain.textContent = "New Colors";

		// easy.classList.remove("selected");
		// hard.classList.remove("selected");

		playGame();
	})


	function select_colors(num)
	{
		for(var i =0;i<num;i++)
		{
			var temp1 = Math.floor(Math.random()*256), temp2 = Math.floor(Math.random()*256), temp3 = Math.floor(Math.random()*256);

			var string = "rgb(" + temp1 + ", " + temp2 + ", " + temp3 + ")";
			colors.push(string);
			// console.log(colors[i]);
		}

		var temp = Math.random()*(num);
		temp = Math.floor(temp);
		pickedColor = colors[temp];
		head.textContent = pickedColor;
	}

	// select_colors(6);

	function playGame(){

		h1.style.background = "steelBlue";

		while(colors.length != 0)
			colors.pop();

		select_colors(num);

		message.textContent = "";
		playAgain.textContent = "New Colors";

		for(var i =0;i<num;i++)
		{

			var temps = squares[i];
			squares[i].style.background = colors[i];

			squares[i].addEventListener("click",function(){

				var currentColor = this.style.background;

				if(currentColor === pickedColor)
				{
					message.textContent = "Correct";
					changeColor(currentColor);
					h1.style.background = pickedColor;
					playAgain.textContent = "Play Again?";

					playAgain.addEventListener("click",playGame);
				}

				else
				{
					message.textContent = "Try Again";
					this.style.background = "rgb(23,23,23)";
				}
			})
	    }
	}

	function changeColor(color){

		for(var i =0; i<num;i++)
			squares[i].style.background = color;
	}
