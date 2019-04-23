var iCnt = 0;//keeps track number of textboxes
$(document).ready(function() {
	// CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
	var container = $(document.createElement('div')).css({
		marginLeft: 'auto', marginRight: 'auto', width: '180px', marginTop: '10px',
	});
	// ADD INITIAL TEXTBOX.
	if (iCnt == 0){
	
	$(container).append('<label for="name">' + '<input type=text class="input" id=tb' + iCnt + ' ' +
	'placeholder="Enter text (max 15 characters)" size=30 maxlength = "15" />');
	iCnt++
	$(container).append('<label for="name">' + '<input type=text class="input" id=tb' + iCnt + ' ' +
	'placeholder="Enter text (max 15 characters)" size=30 maxlength = "15" />');
	iCnt++
	$(container).append('<label for="name">' + '<input type=text class="input" id=tb' + iCnt + ' ' +
	'placeholder="Enter text (max 15 characters)" size=30 maxlength = "15" />');
	//iCnt++
	var divSubmit = $(document.createElement('div'));
				$(divSubmit).append('<input type=button class="btn btn-primary"' + 
					'onclick="GetTextValue()"' + 
						'id=btSubmit value=Submit />');
	$('#main').after(container, divSubmit);
	}
		
	//document.body.style.pa
	$('#btAdd').click(function() {
		if (iCnt < 9) {
			//update count
			iCnt = iCnt + 1;
			// ADD TEXTBOX.
			$(container).append('<label for="name">' + '<input type=text class="input" id=tb' + iCnt + ' ' +
			'placeholder="Enter text (max 15 characters)" size=30 maxlength = "15" />');
			console.log(iCnt)
			// ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
			$('#main').after(container, divSubmit);
		}
		// AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
		// (10 IS THE LIMIT WE HAVE SET)
		else{
			$(container).append('<label class = "error" id= "maxL">Reached the limit</label>');
			$('#btAdd').attr('class', 'btn btn-primary'); 
			$('#btAdd').attr('disabled', 'disabled');
		}
	});

	// REMOVE ONE ELEMENT PER CLICK.
	$('#btRemove').click(function() {
		if (iCnt > 2) { 
			$('#tb' + iCnt).remove(); 
			iCnt = iCnt - 1;
			$('#btAdd').removeAttr('disabled'); 
			$('#maxL').remove();
			console.log(iCnt)
		}
	});

	// REMOVE ALL THE ELEMENTS IN THE CONTAINER.
	$('#btRemoveAll').click(function() {
		$(container)
			.empty()
			.remove(); 
		iCnt = 0;
		//reset initials
		$(container).append('<label for="name">' + '<input type=text class="input" id=tb' + iCnt + ' ' +
		'placeholder="Enter text (max 15 characters)" size=30 maxlength = "15" />');
		iCnt++
		$(container).append('<label for="name">' + '<input type=text class="input" id=tb' + iCnt + ' ' +
		'placeholder="Enter text (max 15 characters)" size=30 maxlength = "15" />');
		iCnt++
		$(container).append('<label for="name">' + '<input type=text class="input" id=tb' + iCnt + ' ' +
		'placeholder="Enter text (max 15 characters)" size=30 maxlength = "15" />');
		//iCnt++
		$('#main').after(container, divSubmit);
		$('#btAdd')
			.removeAttr('disabled') 
			.attr('class', 'btn btn-primary');
	});
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {
	for(var i=0; i<iCnt;i++){
		var temp = "tb" + i.toString();
		temp = document.getElementById(temp);
		var temp2 = document.getElementsByClassName("input");
		temp2.item(i).value = temp.value;
	}
	
	var textboxLength = document.getElementsByClassName("input");

	var inputList = []; // list of inputs 
	var entry = "";	
	$(divValue) 
		.empty() 
		.remove(); 
	submitEntries = "true"
	values = '';
	var counter = 0;
	$('.input').each(function() {
		divValue = $(document.createElement('div')).css({
			padding:'15px', width:'200px'
		});
		counter += 1;
		entry = this.value;
		if(entry.length <=0 || entry.length > 15){
			alert("Please fill in text box " + counter);
			
		} else{
			inputList.push(entry);
		} 
	});
	if(textboxLength.length == inputList.length){
		document.append(spinWheel());
	}
}

function spinWheel(){	
	var vals = document.getElementsByClassName("input");
	//disables the buttons after hitting submit
	document.getElementById("btAdd").disabled = true;
	document.getElementById("btRemove").disabled = true;
	document.getElementById("btRemoveAll").disabled = true;
	document.getElementById("btSubmit").disabled = true;
	var divSpinBtn = document.createElement('div');
	$(divSpinBtn).append('<input type=button class="btn btn-primary"' + 
					'onclick="spin()" id=btnSpin value=Spin  />');
	//array for colors
	var colors = ["blue", "orange", "white", "red"];

	var n = 0;//to keep track of current wedge division
	$('div#hiddenWheel').show();//display wheel
	console.log(vals.length)

	for(var i = 0; i< vals.length; i++){
		if(i!=0){colors[0] = "white";}
		n = i + 1;
		var wPlac = (i/vals.length) * 360;//formula to place division on appropiate angle
		var skewDiv = (360/vals.length) - 90;//formula to skew the sqaure that places circle to fill the full division entirely
		var rot = skewDiv + (skewDiv / 2);
		if (skewDiv<0){rot=rot*-1;}
		if (vals.length==4){
			rot= 45;
		}else if(vals.length==8){
			rot = 67.5;
		}else if(vals.length==10){
			rot = 60;
		}else if(vals.length % 3 != 0){
			rot = (((rot-1)*2)-(rot-1))+((rot-1)/2);
		}else{
			rot = rot;
		}
		var bott = "";
		var top = "";
		//switch case to control the differnt positioning of text for each number of wedges
		switch (vals.length) {
			case 3:
				bott = "30%";
				top = "40%";
				break;
			case 4:
				bott = "5%";
				top = "55%";							
				break;
			case 5:
				bott = "0%";
				top = "70%";
				break;
			case 6:
				bott = "-15%";
				top = "70%";							
				break;
			case 7:
				bott = "-25%";
				top = "50%";						
				break;
			case 8:
				bott = "-20%";
				top = "65%";						
				break;
			case 9:
				bott = "-20%";
				top = "60%";						
				break;
			case 10:
				bott = "-40%";
				top = "85%";
				break;
			default:
				break;
		}
		var wheel = '<li>'+
						'<div  style = "transform: rotate(' + wPlac + 'deg) skewY(' +skewDiv+'deg); background:' +colors[i%colors.length] +';" class="background">'+
							'<div class="content '+ n +'"style = "transform: skewY('+skewDiv * -1+'deg) rotate(-'+rot+'deg); bottom: '+bott+'; top: '+top+';">'+
								'<div class="icon" id="n' + n +'">'
									+ vals[i].value +
								'</div>'+
							'</div>'+
						'</div>'+
					'</li>'		
		$('.circle').append(wheel);
		var id = "n"+n;
		document.getElementsByClassName("icon")[i].style.position="relative";
		if(vals.length < 5){
			document.getElementsByClassName("icon")[i].style="font-size: 25px";
		}else{
			document.getElementsByClassName("icon")[i].style="font-size: 20px";
		}
	}
	$('#spinID').append(divSpinBtn);
}

function validationForm(){
	var nam1 = document.getElementById("divValue").value;
	
	submitOK = "true";
	alert(nam1);
}

var cache=0;
// pass the name here 
function spin(){
	$(".input").css("background-color", "white");
	//document.getElementById("btnSpin").disabled = true;
	var p=document.createElement("p");
	var vals = document.getElementsByClassName("input");
	
	var random=Math.floor(((Math.random()*200+1)+100)*78); //Generating a random rotation degree to use between 101*7 and 200*7
	document.getElementsByTagName("ul")[0].style.transform="rotate("+random+"deg)"; //Rotating
	//alert(random)
	//Printing results
	var result = "";
	var con = random%360;
	var con2 = 360/vals.length;
	for (var i = 0; i<vals.length;i++){
		var con3 = 0 + con2*(i);
		var con4 = con2*(i+1);
		if( con>=con3 && con<=con4){
		//	var random2 = Math.floor(Math.random() * ((con4+random)-(con3+random)+1)) + con3+random;
			var random2 = (((con4 + random) - (con3+random))/2)+(con3+random);
			document.getElementsByClassName("needle")[0].style.transform="rotate("+random2+"deg)";
			setTimeout( print, 2200 );
			result=vals.item(i).value;
			var resID = "#tb"+i;
			console.log(typeof(result))
			//setTimeout(function(){$(resID).css("background-color","yellow");},3200)
			
		}function print(){
			//alert(Joel)
		}
	}
	var card = {
		type: 'message/card',
		attachments: [{
			contentType: 'application/vnd.microsoft.card.hero',
			content: {
				title: 'Spin A Wheel',
				subtitle: 'Results',
				text: result.toString(),
				images: [{ url: 'https://decisionsvsu.azurewebsites.net/img/wheel.jpg' }],
				tap: {
					type: 'openUrl',
					value: 'https://decisionsvsu.azurewebsites.net/SpinAWheelTextBoxes.html'
				}
			}
		}]
    }
		//Sends card to be shared
		//console.log()
		//console.log(SkypeActions.share(card))
		setTimeout(function(){SkypeActions.share(card);},3200);
		//SkypeActions._send(1)
	//document.getElementById("btnSpin").disabled = true;
	/*p.appendChild(result);
	document.getElementById("resultLog").appendChild(p);*/
}