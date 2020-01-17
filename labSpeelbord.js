var input;
var word;
var words;
var wordSplit;
var inputUser;
var onthoudWord;
//Rij 1 V

var vakje1Rij1 = document.createElement("P");
vakje1Rij1.setAttribute("class", "lettervakjes");
vakje1Rij1.id = "letter1";

var vakje2Rij1 = document.createElement("P");
vakje2Rij1.setAttribute("class", "lettervakjes");
vakje2Rij1.id = "letter2";

var vakje3Rij1 = document.createElement("P");
vakje3Rij1.setAttribute("class", "lettervakjes");
vakje3Rij1.id = "letter3";

var vakje4Rij1 = document.createElement("P");
vakje4Rij1.setAttribute("class", "lettervakjes");
vakje4Rij1.id = "letter4";

var vakje5Rij1 = document.createElement("P");
vakje5Rij1.setAttribute("class", "lettervakjes");
vakje5Rij1.id = "letter5";

var rij1Div = document.createElement("DIV");
rij1Div.id= "letters";
document.body.appendChild(rij1Div);

rij1Div.appendChild(vakje1Rij1);
rij1Div.appendChild(vakje2Rij1);
rij1Div.appendChild(vakje3Rij1);
rij1Div.appendChild(vakje4Rij1);
rij1Div.appendChild(vakje5Rij1);

document.getElementById("letter1").innerHTML = "1";
document.getElementById("letter2").innerHTML = "2";
document.getElementById("letter3").innerHTML = "3";
document.getElementById("letter4").innerHTML = "4";
document.getElementById("letter5").innerHTML = "5";

//Rij 2 V

var vakje1Rij2 = document.createElement("P");
vakje1Rij2.setAttribute("class", "lettervakjes");
vakje1Rij2.id = "V1R2ID";

var vakje2Rij2 = document.createElement("P");
vakje2Rij2.setAttribute("class", "lettervakjes");
vakje2Rij2.id = "V2R2ID";

var vakje3Rij2 = document.createElement("P");
vakje3Rij2.setAttribute("class", "lettervakjes");
vakje3Rij2.id = "V3R2ID";

var vakje4Rij2 = document.createElement("P");
vakje4Rij2.setAttribute("class", "lettervakjes");
vakje4Rij2.id = "V4R2ID";

var vakje5Rij2 = document.createElement("P");
vakje5Rij2.setAttribute("class", "lettervakjes");
vakje5Rij2.id = "V5R2ID";

var rij2Div = document.createElement("DIV");
rij2Div.id= "DivR2";
document.body.appendChild(rij2Div);


rij2Div.appendChild(vakje1Rij2);
rij2Div.appendChild(vakje2Rij2);
rij2Div.appendChild(vakje3Rij2);
rij2Div.appendChild(vakje4Rij2);
rij2Div.appendChild(vakje5Rij2);


document.getElementById("V1R2ID").innerHTML = "1";
document.getElementById("V2R2ID").innerHTML = "2";
document.getElementById("V3R2ID").innerHTML = "3";
document.getElementById("V4R2ID").innerHTML = "4";
document.getElementById("V5R2ID").innerHTML = "5";

//Rij 3 V

var vakje1Rij3 = document.createElement("P");
vakje1Rij3.setAttribute("class", "lettervakjes");
vakje1Rij3.id = "V1R3ID";

var vakje2Rij3 = document.createElement("P");
vakje2Rij3.setAttribute("class", "lettervakjes");
vakje2Rij3.id = "V2R3ID";

var vakje3Rij3 = document.createElement("P");
vakje3Rij3.setAttribute("class", "lettervakjes");
vakje3Rij3.id = "V3R3ID";

var vakje4Rij3 = document.createElement("P");
vakje4Rij3.setAttribute("class", "lettervakjes");
vakje4Rij3.id = "V4R3ID";

var vakje5Rij3 = document.createElement("P");
vakje5Rij3.setAttribute("class", "lettervakjes");
vakje5Rij3.id = "V5R3ID";

var rij3Div = document.createElement("DIV");
rij3Div.id= "DivR3";
document.body.appendChild(rij3Div);


rij3Div.appendChild(vakje1Rij3);
rij3Div.appendChild(vakje2Rij3);
rij3Div.appendChild(vakje3Rij3);
rij3Div.appendChild(vakje4Rij3);
rij3Div.appendChild(vakje5Rij3);


document.getElementById("V1R3ID").innerHTML = "1";
document.getElementById("V2R3ID").innerHTML = "2";
document.getElementById("V3R3ID").innerHTML = "3";
document.getElementById("V4R3ID").innerHTML = "4";
document.getElementById("V5R3ID").innerHTML = "5";

//Rij 4 V

var vakje1Rij4 = document.createElement("P");
vakje1Rij4.setAttribute("class", "lettervakjes");
vakje1Rij4.id = "V1R4ID";

var vakje2Rij4 = document.createElement("P");
vakje2Rij4.setAttribute("class", "lettervakjes");
vakje2Rij4.id = "V2R4ID";

var vakje3Rij4 = document.createElement("P");
vakje3Rij4.setAttribute("class", "lettervakjes");
vakje3Rij4.id = "V3R4ID";

var vakje4Rij4 = document.createElement("P");
vakje4Rij4.setAttribute("class", "lettervakjes");
vakje4Rij4.id = "V4R4ID";

var vakje5Rij4 = document.createElement("P");
vakje5Rij4.setAttribute("class", "lettervakjes");
vakje5Rij4.id = "V5R4ID";

var rij4Div = document.createElement("DIV");
rij4Div.id= "DivR4";
document.body.appendChild(rij4Div);


rij4Div.appendChild(vakje1Rij4);
rij4Div.appendChild(vakje2Rij4);
rij4Div.appendChild(vakje3Rij4);
rij4Div.appendChild(vakje4Rij4);
rij4Div.appendChild(vakje5Rij4);


document.getElementById("V1R4ID").innerHTML = "1";
document.getElementById("V2R4ID").innerHTML = "2";
document.getElementById("V3R4ID").innerHTML = "3";
document.getElementById("V4R4ID").innerHTML = "4";
document.getElementById("V5R4ID").innerHTML = "5";

//Rij 5 V

var vakje1Rij5 = document.createElement("P");
vakje1Rij5.setAttribute("class", "lettervakjes");
vakje1Rij5.id = "V1R5ID";

var vakje2Rij5 = document.createElement("P");
vakje2Rij5.setAttribute("class", "lettervakjes");
vakje2Rij5.id = "V2R5ID";

var vakje3Rij5 = document.createElement("P");
vakje3Rij5.setAttribute("class", "lettervakjes");
vakje3Rij5.id = "V3R5ID";

var vakje4Rij5 = document.createElement("P");
vakje4Rij5.setAttribute("class", "lettervakjes");
vakje4Rij5.id = "V4R5ID";

var vakje5Rij5 = document.createElement("P");
vakje5Rij5.setAttribute("class", "lettervakjes");
vakje5Rij5.id = "V5R5ID";

var rij5Div = document.createElement("DIV");
rij5Div.id= "DivR5";
document.body.appendChild(rij5Div);


rij5Div.appendChild(vakje1Rij5);
rij5Div.appendChild(vakje2Rij5);
rij5Div.appendChild(vakje3Rij5);
rij5Div.appendChild(vakje4Rij5);
rij5Div.appendChild(vakje5Rij5);


document.getElementById("V1R5ID").innerHTML = "1";
document.getElementById("V2R5ID").innerHTML = "2";
document.getElementById("V3R5ID").innerHTML = "3";
document.getElementById("V4R5ID").innerHTML = "4";
document.getElementById("V5R5ID").innerHTML = "5";



var input1 = document.createElement("INPUT");
input1.id = "userinput";
input1.setAttribute("type", "text");
input1.setAttribute("name", "woordinput");
input1.setAttribute("autocomplete", "off");
input1.setAttribute("onkeypress", "return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)");
document.body.appendChild(input1);
document.getElementById("userinput").style.position = "absolute";
document.getElementById("userinput").style.top = "500px";
document.getElementById("userinput").style.right = "686px";
document.getElementById("userinput").style.backgroundColor = "white";


var button1 = document.createElement("BUTTON");
button1.id = "button";
button1.setAttribute("type", "submit");
button1.setAttribute("onClick", "EersteWoord()");
document.body.appendChild(button1);
document.getElementById("button").innerHTML = "Klik";
document.getElementById("button").style.position = "absolute";
document.getElementById("button").style.top = "530px";
document.getElementById("button").style.right = "750px";
document.getElementById("button").style.fontSize = "16px";

//Lingo txt

var gameTxt = document.createElement("P");
gameTxt.id = "LingoTxt";
document.body.appendChild(gameTxt);
document.getElementById("LingoTxt").innerHTML = "Lingo";

var woordGoedTxt = document.createElement("P");
woordGoedTxt.id= "goedWoordTxt";
document.body.appendChild(woordGoedTxt);
document.getElementById("goedWoordTxt").innerHTML = "Goed geraden!";
document.getElementById("goedWoordTxt").style.display ="none";
document.getElementById("goedWoordTxt").style.position ="absolute";
document.getElementById("goedWoordTxt").style.top ="200px";
document.getElementById("goedWoordTxt").style.right ="710px";
document.getElementById("goedWoordTxt").style.fontSize ="20px";
document.getElementById("goedWoordTxt").style.color ="green";
document.getElementById("goedWoordTxt").style.fontWeight ="bold";

var nieuwWoord = document.createElement("BUTTON");
nieuwWoord.id = "nieuwWoordID";
nieuwWoord.setAttribute("onClick", "GeefNieuwWoord()");
document.body.appendChild(nieuwWoord);
document.getElementById("nieuwWoordID").innerHTML = "Nieuw woord";
document.getElementById("nieuwWoordID").style.position = "absolute";
document.getElementById("nieuwWoordID").style.display = "none";

var score = 0;
var scoreTxt = document.createElement("P");
scoreTxt.id = "scoreID";
document.body.appendChild(scoreTxt);
document.getElementById("scoreID").innerHTML = "Score: " + score;
document.getElementById("scoreID").style.color = "#30CFD0";
document.getElementById("scoreID").style.fontWeight = "bold";
document.getElementById("scoreID").style.zIndex = "2";


var woordFoutTxt = document.createElement("P");
woordFoutTxt.id = "foutWoordID";
document.body.appendChild(woordFoutTxt);
document.getElementById("foutWoordID").style.position ="absolute";
document.getElementById("foutWoordID").style.display ="none";
document.getElementById("foutWoordID").style.top ="200px";
document.getElementById("foutWoordID").style.right ="531px";
document.getElementById("foutWoordID").style.color = "red";
document.getElementById("foutWoordID").style.fontSize ="20px";
document.getElementById("foutWoordID").style.fontWeight = "bold";



var stopButton = document.createElement("BUTTON");
stopButton.id = "stopButtonID";
stopButton.setAttribute("onClick", "StopGame()");
document.body.appendChild(stopButton);
document.getElementById("stopButtonID").innerHTML = "Stop";
document.getElementById("stopButtonID").style.position = "absolute";
document.getElementById("stopButtonID").style.display = "none";


var stopDiv = document.createElement("DIV");
stopDiv.id = "stopDivID";
document.body.appendChild(stopDiv);
document.getElementById("stopDivID").style.position ="absolute";
document.getElementById("stopDivID").style.display ="none";
document.getElementById("userinput").setAttribute("maxlength", "5");

var spelenButton = document.createElement("BUTTON");
spelenButton.id = "spelenButtonID";
spelenButton.setAttribute("onClick", "SpelenGame()");
document.body.appendChild(spelenButton);
document.getElementById("spelenButtonID").innerHTML = "Spelen";
document.getElementById("spelenButtonID").style.position = "absolute";
document.getElementById("spelenButtonID").style.display = "none";

function StopGame(){
	document.getElementById("stopDivID").style.display = "block";
	document.getElementById("nieuwWoordID").style.display = "block";
	document.getElementById("scoreID").style.left ="666px";
	document.getElementById("scoreID").style.top ="130px";
	document.getElementById("spelenButtonID").style.display = "block";
	document.getElementById("button").style.display = "block";


}

function SpelenGame(){
	document.getElementById("stopDivID").style.display = "none";
	document.getElementById("spelenButtonID").style.display = "none";
	GeefNieuwWoord();
	document.getElementById("stopButtonID").style.display = "none";
	document.getElementById("nieuwWoordID").style.display = "none";
	document.getElementById("button").setAttribute("onClick", "EersteWoord()");
	document.getElementById("goedWoordTxt").style.display ="none";
	document.getElementById("foutWoordID").style.display ="none";
	document.getElementById("scoreID").style.left ="1300px";
	document.getElementById("scoreID").style.top ="10px";
	document.getElementById("button").style.display = "block";
	score = 0;
	document.getElementById("scoreID").innerHTML = "Score: " + score;


}

function ClearSpeelbord(){
	document.getElementById("letter1").innerHTML = "1";
	document.getElementById("letter2").innerHTML = "2";
	document.getElementById("letter3").innerHTML = "3";
	document.getElementById("letter4").innerHTML = "4";
	document.getElementById("letter5").innerHTML = "5";

	document.getElementById("letter1").style.borderRadius = "0px";
	document.getElementById("letter2").style.borderRadius = "0px";
	document.getElementById("letter3").style.borderRadius = "0px";
	document.getElementById("letter4").style.borderRadius = "0px";
	document.getElementById("letter5").style.borderRadius = "0px";

	document.getElementById("letter1").style.backgroundColor = "white";
	document.getElementById("letter2").style.backgroundColor = "white";
	document.getElementById("letter3").style.backgroundColor = "white";
	document.getElementById("letter4").style.backgroundColor = "white";
	document.getElementById("letter5").style.backgroundColor = "white";

	document.getElementById("V1R2ID").innerHTML = "1";
	document.getElementById("V2R2ID").innerHTML = "2";
	document.getElementById("V3R2ID").innerHTML = "3";
	document.getElementById("V4R2ID").innerHTML = "4";
	document.getElementById("V5R2ID").innerHTML = "5";

	document.getElementById("V1R2ID").style.borderRadius = "0px";
	document.getElementById("V2R2ID").style.borderRadius = "0px";
	document.getElementById("V3R2ID").style.borderRadius = "0px";
	document.getElementById("V4R2ID").style.borderRadius = "0px";
	document.getElementById("V5R2ID").style.borderRadius = "0px";

	document.getElementById("V1R2ID").style.backgroundColor = "white";
	document.getElementById("V2R2ID").style.backgroundColor = "white";
	document.getElementById("V3R2ID").style.backgroundColor = "white";
	document.getElementById("V4R2ID").style.backgroundColor = "white";
	document.getElementById("V5R2ID").style.backgroundColor = "white";

	document.getElementById("V1R3ID").innerHTML = "1";
	document.getElementById("V2R3ID").innerHTML = "2";
	document.getElementById("V3R3ID").innerHTML = "3";
	document.getElementById("V4R3ID").innerHTML = "4";
	document.getElementById("V5R3ID").innerHTML = "5";

	document.getElementById("V1R3ID").style.borderRadius = "0px";
	document.getElementById("V2R3ID").style.borderRadius = "0px";
	document.getElementById("V3R3ID").style.borderRadius = "0px";
	document.getElementById("V4R3ID").style.borderRadius = "0px";
	document.getElementById("V5R3ID").style.borderRadius = "0px";

	document.getElementById("V1R3ID").style.backgroundColor = "white";
	document.getElementById("V2R3ID").style.backgroundColor = "white";
	document.getElementById("V3R3ID").style.backgroundColor = "white";
	document.getElementById("V4R3ID").style.backgroundColor = "white";
	document.getElementById("V5R3ID").style.backgroundColor = "white";

	document.getElementById("V1R4ID").innerHTML = "1";
	document.getElementById("V2R4ID").innerHTML = "2";
	document.getElementById("V3R4ID").innerHTML = "3";
	document.getElementById("V4R4ID").innerHTML = "4";
	document.getElementById("V5R4ID").innerHTML = "5";

	document.getElementById("V1R4ID").style.borderRadius = "0px";
	document.getElementById("V2R4ID").style.borderRadius = "0px";
	document.getElementById("V3R4ID").style.borderRadius = "0px";
	document.getElementById("V4R4ID").style.borderRadius = "0px";
	document.getElementById("V5R4ID").style.borderRadius = "0px";

	document.getElementById("V1R4ID").style.backgroundColor = "white";
	document.getElementById("V2R4ID").style.backgroundColor = "white";
	document.getElementById("V3R4ID").style.backgroundColor = "white";
	document.getElementById("V4R4ID").style.backgroundColor = "white";
	document.getElementById("V5R4ID").style.backgroundColor = "white";

	document.getElementById("V1R5ID").innerHTML = "1";
	document.getElementById("V2R5ID").innerHTML = "2";
	document.getElementById("V3R5ID").innerHTML = "3";
	document.getElementById("V4R5ID").innerHTML = "4";
	document.getElementById("V5R5ID").innerHTML = "5";

	document.getElementById("V1R5ID").style.borderRadius = "0px";
	document.getElementById("V2R5ID").style.borderRadius = "0px";
	document.getElementById("V3R5ID").style.borderRadius = "0px";
	document.getElementById("V4R5ID").style.borderRadius = "0px";
	document.getElementById("V5R5ID").style.borderRadius = "0px";

	document.getElementById("V1R5ID").style.backgroundColor = "white";
	document.getElementById("V2R5ID").style.backgroundColor = "white";
	document.getElementById("V3R5ID").style.backgroundColor = "white";
	document.getElementById("V4R5ID").style.backgroundColor = "white";
	document.getElementById("V5R5ID").style.backgroundColor = "white";
}

function GeefNieuwWoord(){
	ClearSpeelbord();
	randomWord();
	document.getElementById("goedWoordTxt").style.display ="none";
	document.getElementById("nieuwWoordID").style.display = "none";
	document.getElementById("stopButtonID").style.display = "none";
	document.getElementById("foutWoordID").style.display = "none";
	document.getElementById("button").setAttribute("onClick", "EersteWoord()");
	document.getElementById("button").style.display = "block";


}

var vak1 = "letter1";
var vak2 = "letter2";
var vak3 = "letter3";
var vak4 = "letter4";
var vak5 = "letter5";

//Eerste kans

function EersteWoord() {
    input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord1;
    

    if (inputUser.length<=4){
    	alert("Dit woord is niet lang genoeg");
    }
    else{
		document.getElementById("letter1").style.backgroundColor = "red";
	    document.getElementById("letter2").style.backgroundColor = "red";
	    document.getElementById("letter3").style.backgroundColor = "red";
	    document.getElementById("letter4").style.backgroundColor = "red";
	    document.getElementById("letter5").style.backgroundColor = "red";
	    
	    
		document.getElementById("letter1").innerHTML = inputUser[0];
		document.getElementById("letter2").innerHTML = inputUser[1];
	    document.getElementById("letter3").innerHTML = inputUser[2];
	    document.getElementById("letter4").innerHTML = inputUser[3];
	    document.getElementById("letter5").innerHTML = inputUser[4];
		
	    document.getElementById("userinput").value = "";


		if(JSON.stringify(inputUser)==JSON.stringify(wordSplit)){
			document.getElementById("button").setAttribute("onClick", "EersteWoord()");
			document.getElementById("goedWoordTxt").style.display ="block";
			document.getElementById("nieuwWoordID").style.display = "block";
			document.getElementById("stopButtonID").style.display = "block";
			document.getElementById("letter1").style.backgroundColor = "#01de01";
			document.getElementById("letter2").style.backgroundColor = "#01de01";
			document.getElementById("letter3").style.backgroundColor = "#01de01";
			document.getElementById("letter4").style.backgroundColor = "#01de01";
			document.getElementById("letter5").style.backgroundColor = "#01de01";
			score = score + 50;
			document.getElementById("scoreID").innerHTML = "Score: " + score;
			document.getElementById("button").style.display = "none";
		}else{
			if(inputUser[0]==wordSplit[0]){
					document.getElementById("letter1").style.backgroundColor = "#01de01";
					document.getElementById("letter1").style.borderRadius = "0px";
					wordSplit[0] = 0;
			}
			if(inputUser[1]==wordSplit[1]){
					document.getElementById("letter2").style.backgroundColor = "#01de01";
					document.getElementById("letter2").style.borderRadius = "0px";
					wordSplit[1] = 0;
			}
			if(inputUser[2]==wordSplit[2]){
					document.getElementById("letter3").style.backgroundColor = "#01de01";
					document.getElementById("letter3").style.borderRadius = "0px";
					wordSplit[2] = 0;
			}
			if(inputUser[3]==wordSplit[3]){
					document.getElementById("letter4").style.backgroundColor = "#01de01";
					document.getElementById("letter4").style.borderRadius = "0px";
					wordSplit[3] = 0;
			}
			if(inputUser[4]==wordSplit[4]){
					document.getElementById("letter5").style.backgroundColor = "#01de01";
					document.getElementById("letter5").style.borderRadius = "0px";
					wordSplit[4] = 0;
			}


			if(wordSplit.includes(inputUser[0])){
				document.getElementById("letter1").style.backgroundColor = "yellow";
				document.getElementById("letter1").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[0]);
				wordSplit[p] = 1;

			}
			if(wordSplit.includes(inputUser[1])){
				document.getElementById("letter2").style.backgroundColor = "yellow";
				document.getElementById("letter2").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[1]);
				wordSplit[p] = 1;


			}
			if(wordSplit.includes(inputUser[2])){
				document.getElementById("letter3").style.backgroundColor = "yellow";
				document.getElementById("letter3").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[2]);
				wordSplit[p] = 1;


			}
			if(wordSplit.includes(inputUser[3])){
				document.getElementById("letter4").style.backgroundColor = "yellow";
				document.getElementById("letter4").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[3]);
				wordSplit[p] = 1;


			}
			if(wordSplit.includes(inputUser[4])){
				document.getElementById("letter5").style.backgroundColor = "yellow";
				document.getElementById("letter5").style.borderRadius = "50px"; 
				var p = wordSplit.indexOf(inputUser[4]);
				wordSplit[p] = 1;


			}


			if(wordSplit[0]==0){
				document.getElementById("letter1").style.backgroundColor = "#01de01";
				document.getElementById("letter1").style.borderRadius = "0px";
			} 
			if(wordSplit[1]==0){
				document.getElementById("letter2").style.backgroundColor = "#01de01";
				document.getElementById("letter2").style.borderRadius = "0px";
			} 
			if(wordSplit[2]==0){
				document.getElementById("letter3").style.backgroundColor = "#01de01";
				document.getElementById("letter3").style.borderRadius = "0px";
			} 
			if(wordSplit[3]==0){
				document.getElementById("letter4").style.backgroundColor = "#01de01";
				document.getElementById("letter4").style.borderRadius = "0px";
			} 
			if(wordSplit[4]==0){
				document.getElementById("letter5").style.backgroundColor = "#01de01";
				document.getElementById("letter5").style.borderRadius = "0px";
			} 
			document.getElementById("button").setAttribute("onClick", "kans2()");
		}
	}
}

//tweede kans

function kans2(){
 	input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord2;
   
    if (inputUser.length <= 4){
    	alert("Dit woord is niet lang genoeg");
    }
    else{
		document.getElementById("V1R2ID").style.backgroundColor = "red";
	    document.getElementById("V2R2ID").style.backgroundColor = "red";
	    document.getElementById("V3R2ID").style.backgroundColor = "red";
	    document.getElementById("V4R2ID").style.backgroundColor = "red";
	    document.getElementById("V5R2ID").style.backgroundColor = "red";

		
		document.getElementById("V1R2ID").innerHTML = inputUser[0];
		document.getElementById("V2R2ID").innerHTML = inputUser[1];
		document.getElementById("V3R2ID").innerHTML = inputUser[2];
		document.getElementById("V4R2ID").innerHTML = inputUser[3];
		document.getElementById("V5R2ID").innerHTML = inputUser[4];
		
		document.getElementById("userinput").value = "";

		if(JSON.stringify(inputUser)==JSON.stringify(wordSplit)){
			document.getElementById("button").setAttribute("onClick", "EersteWoord()");
			document.getElementById("goedWoordTxt").style.display ="block";
			document.getElementById("nieuwWoordID").style.display = "block";
			document.getElementById("stopButtonID").style.display = "block";
			document.getElementById("V1R2ID").style.backgroundColor = "#01de01";
			document.getElementById("V2R2ID").style.backgroundColor = "#01de01";
			document.getElementById("V3R2ID").style.backgroundColor = "#01de01";
			document.getElementById("V4R2ID").style.backgroundColor = "#01de01";
			document.getElementById("V5R2ID").style.backgroundColor = "#01de01";
			score = score + 40;
			document.getElementById("scoreID").innerHTML = "Score: " + score;
		}else{
			if(inputUser[0]==wordSplit[0]){
					document.getElementById("V1R2ID").style.backgroundColor = "#01de01";
					document.getElementById("V1R2ID").style.borderRadius = "0px";
					wordSplit[0] = 0;
			}
			if(inputUser[1]==wordSplit[1]){
					document.getElementById("V2R2ID").style.backgroundColor = "#01de01";
					document.getElementById("V2R2ID").style.borderRadius = "0px";
					wordSplit[1] = 0;
			}
			if(inputUser[2]==wordSplit[2]){
					document.getElementById("V3R2ID").style.backgroundColor = "#01de01";
					document.getElementById("V3R2ID").style.borderRadius = "0px";
					wordSplit[2] = 0;
					
			}
			if(inputUser[3]==wordSplit[3]){
					document.getElementById("V4R2ID").style.backgroundColor = "#01de01";
					document.getElementById("V4R2ID").style.borderRadius = "0px";
					wordSplit[3] = 0;
					
			}
			if(inputUser[4]==wordSplit[4]){
					document.getElementById("V5R2ID").style.backgroundColor = "#01de01";
					document.getElementById("V5R2ID").style.borderRadius = "0px";
					wordSplit[4] = 0;	
			}



			if(wordSplit.includes(inputUser[0])){
				document.getElementById("V1R2ID").style.backgroundColor = "yellow";
				document.getElementById("V1R2ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[0]);
				wordSplit[p] = 1;
			}
			if(wordSplit.includes(inputUser[1])){
				document.getElementById("V2R2ID").style.backgroundColor = "yellow";
				document.getElementById("V2R2ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[1]);
				wordSplit[p] = 1;
			}
			if(wordSplit.includes(inputUser[2])){
				document.getElementById("V3R2ID").style.backgroundColor = "yellow";
				document.getElementById("V3R2ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[2]);
				wordSplit[p] = 1;
			}
			if(wordSplit.includes(inputUser[3])){
				document.getElementById("V4R2ID").style.backgroundColor = "yellow";
				document.getElementById("V4R2ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[3]);
				wordSplit[p] = 1;
			}
			if(wordSplit.includes(inputUser[4])){
				document.getElementById("V5R2ID").style.backgroundColor = "yellow";
				document.getElementById("V5R2ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[4]);
				wordSplit[p] = 1;
			}


			if(wordSplit[0]==0){
				document.getElementById("V1R2ID").style.backgroundColor = "#01de01";
				document.getElementById("V1R2ID").style.borderRadius = "0px";
			} 
			if(wordSplit[1]==0){
				document.getElementById("V2R2ID").style.backgroundColor = "#01de01";
				document.getElementById("V2R2ID").style.borderRadius = "0px";
			} 
			if(wordSplit[2]==0){
				document.getElementById("V3R2ID").style.backgroundColor = "#01de01";
				document.getElementById("V3R2ID").style.borderRadius = "0px";
			} 
			if(wordSplit[3]==0){
				document.getElementById("V4R2ID").style.backgroundColor = "#01de01";
				document.getElementById("V4R2ID").style.borderRadius = "0px";
			} 
			if(wordSplit[4]==0){
				document.getElementById("V5R2ID").style.backgroundColor = "#01de01";
				document.getElementById("V5R2ID").style.borderRadius = "0px";
			} 
	   
			document.getElementById("button").setAttribute("onClick", "kans3()");
		}
	}
}


//derde kans

function kans3(){
	input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord3;
   
    if (inputUser.length <=4){
    	alert("Dit woord is niet lang genoeg");
    }
    else{
	 	document.getElementById("V1R3ID").style.backgroundColor = "red";
	    document.getElementById("V2R3ID").style.backgroundColor = "red";
	    document.getElementById("V3R3ID").style.backgroundColor = "red";
	    document.getElementById("V4R3ID").style.backgroundColor = "red";
	    document.getElementById("V5R3ID").style.backgroundColor = "red";

   
	    document.getElementById("V1R3ID").innerHTML = inputUser[0];
	    document.getElementById("V2R3ID").innerHTML = inputUser[1];
	    document.getElementById("V3R3ID").innerHTML = inputUser[2];
	    document.getElementById("V4R3ID").innerHTML = inputUser[3];
	    document.getElementById("V5R3ID").innerHTML = inputUser[4];
    
		document.getElementById("userinput").value = "";

    	if(JSON.stringify(inputUser)==JSON.stringify(wordSplit)){
			document.getElementById("button").setAttribute("onClick", "EersteWoord()");
			document.getElementById("goedWoordTxt").style.display ="block";
			document.getElementById("nieuwWoordID").style.display = "block";
			document.getElementById("stopButtonID").style.display = "block";
			document.getElementById("V1R3ID").style.backgroundColor = "#01de01";
			document.getElementById("V2R3ID").style.backgroundColor = "#01de01";
			document.getElementById("V3R3ID").style.backgroundColor = "#01de01";
			document.getElementById("V4R3ID").style.backgroundColor = "#01de01";
			document.getElementById("V5R3ID").style.backgroundColor = "#01de01";
			score = score + 30;
			document.getElementById("scoreID").innerHTML = "Score: " + score;
		}else{
		    if(inputUser[0]==wordSplit[0]){
		   		document.getElementById("V1R3ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V1R3ID").style.borderRadius = "0px";
		   		wordSplit[0] = 0;
		    }
		    if(inputUser[1]==wordSplit[1]){
		   		document.getElementById("V2R3ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V2R3ID").style.borderRadius = "0px";
		   		wordSplit[1] = 0;
		    }
		    if(inputUser[2]==wordSplit[2]){
		   		document.getElementById("V3R3ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V3R3ID").style.borderRadius = "0px";
		   		wordSplit[2] = 0;
		   		
		    }
		    if(inputUser[3]==wordSplit[3]){
		   		document.getElementById("V4R3ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V4R3ID").style.borderRadius = "0px";
		   		wordSplit[3] = 0;
		   		
		    }
		    if(inputUser[4]==wordSplit[4]){
		   		document.getElementById("V5R3ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V5R3ID").style.borderRadius = "0px";
		   		wordSplit[4] = 0;
		   		
		    }



		    if(wordSplit.includes(inputUser[0])){
		    	document.getElementById("V1R3ID").style.backgroundColor = "yellow";
		    	document.getElementById("V1R3ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[0]);
				wordSplit[p] = 1;
		    }
		    if(wordSplit.includes(inputUser[1])){
		    	document.getElementById("V2R3ID").style.backgroundColor = "yellow";
		    	document.getElementById("V2R3ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[1]);
				wordSplit[p] = 1;
		    }
		    if(wordSplit.includes(inputUser[2])){
		    	document.getElementById("V3R3ID").style.backgroundColor = "yellow";
		    	document.getElementById("V3R3ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[2]);
				wordSplit[p] = 1;
		    }
		    if(wordSplit.includes(inputUser[3])){
		    	document.getElementById("V4R3ID").style.backgroundColor = "yellow";
		    	document.getElementById("V4R3ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[3]);
				wordSplit[p] = 1;
		    }
		    if(wordSplit.includes(inputUser[4])){
		    	document.getElementById("V5R3ID").style.backgroundColor = "yellow";
		    	document.getElementById("V5R3ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[4]);
				wordSplit[p] = 1;
		    }


		    if(wordSplit[0]==0){
		    	document.getElementById("V1R3ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V1R3ID").style.borderRadius = "0px";
		    } 
		    if(wordSplit[1]==0){
		    	document.getElementById("V2R3ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V2R3ID").style.borderRadius = "0px";
		    } 
		    if(wordSplit[2]==0){
		    	document.getElementById("V3R3ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V3R3ID").style.borderRadius = "0px";
		    } 
		    if(wordSplit[3]==0){
		    	document.getElementById("V4R3ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V4R3ID").style.borderRadius = "0px";
		    } 
		    if(wordSplit[4]==0){
		    	document.getElementById("V5R3ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V5R3ID").style.borderRadius = "0px";
		    } 


			document.getElementById("button").setAttribute("onClick", "kans4()");
		}
	}
}


//vierde kans

function kans4(){
	input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord4;
	
    if (inputUser.length <=4){
    	alert("Dit woord is niet lang genoeg");
    }
    else{ 
    	document.getElementById("V1R4ID").style.backgroundColor = "red";
   		document.getElementById("V2R4ID").style.backgroundColor = "red";
    	document.getElementById("V3R4ID").style.backgroundColor = "red";
    	document.getElementById("V4R4ID").style.backgroundColor = "red";
    	document.getElementById("V5R4ID").style.backgroundColor = "red";
		
		document.getElementById("V1R4ID").innerHTML = inputUser[0];
		document.getElementById("V2R4ID").innerHTML = inputUser[1];
		document.getElementById("V3R4ID").innerHTML = inputUser[2];
		document.getElementById("V4R4ID").innerHTML = inputUser[3];
		document.getElementById("V5R4ID").innerHTML = inputUser[4];
		
		document.getElementById("userinput").value = "";

		if(JSON.stringify(inputUser)==JSON.stringify(wordSplit)){
			document.getElementById("button").setAttribute("onClick", "EersteWoord()");
			document.getElementById("goedWoordTxt").style.display ="block";
			document.getElementById("nieuwWoordID").style.display = "block";
			document.getElementById("stopButtonID").style.display = "block";
			document.getElementById("V1R4ID").style.backgroundColor = "#01de01";
			document.getElementById("V2R4ID").style.backgroundColor = "#01de01";
			document.getElementById("V3R4ID").style.backgroundColor = "#01de01";
			document.getElementById("V4R4ID").style.backgroundColor = "#01de01";
			document.getElementById("V5R4ID").style.backgroundColor = "#01de01";
			score = score + 20;
			document.getElementById("scoreID").innerHTML = "Score: " + score;
		}else{
			if(inputUser[0]==wordSplit[0]){
					document.getElementById("V1R4ID").style.backgroundColor = "#01de01";
					document.getElementById("V1R4ID").style.borderRadius = "0px";
					wordSplit[0] = 0;
			}
			if(inputUser[1]==wordSplit[1]){
					document.getElementById("V2R4ID").style.backgroundColor = "#01de01";
					document.getElementById("V2R4ID").style.borderRadius = "0px";
					wordSplit[1] = 0;
			}
			if(inputUser[2]==wordSplit[2]){
					document.getElementById("V3R4ID").style.backgroundColor = "#01de01";
					document.getElementById("V3R4ID").style.borderRadius = "0px";
					wordSplit[2] = 0;
					
			}
			if(inputUser[3]==wordSplit[3]){
					document.getElementById("V4R4ID").style.backgroundColor = "#01de01";
					document.getElementById("V4R4ID").style.borderRadius = "0px";
					wordSplit[3] = 0;
					
			}
			if(inputUser[4]==wordSplit[4]){
					document.getElementById("V5R4ID").style.backgroundColor = "#01de01";
					document.getElementById("V5R4ID").style.borderRadius = "0px";
					wordSplit[4] = 0;
					
			}



			if(wordSplit.includes(inputUser[0])){
				document.getElementById("V1R4ID").style.backgroundColor = "yellow";
				document.getElementById("V1R4ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[0]);
				wordSplit[p] = 1;
			}
			if(wordSplit.includes(inputUser[1])){
				document.getElementById("V2R4ID").style.backgroundColor = "yellow";
				document.getElementById("V2R4ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[1]);
				wordSplit[p] = 1;
			}
			if(wordSplit.includes(inputUser[2])){
				document.getElementById("V3R4ID").style.backgroundColor = "yellow";
				document.getElementById("V3R4ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[2]);
				wordSplit[p] = 1;
			}
			if(wordSplit.includes(inputUser[3])){
				document.getElementById("V4R4ID").style.backgroundColor = "yellow";
				document.getElementById("V4R4ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[3]);
				wordSplit[p] = 1;
			}
			if(wordSplit.includes(inputUser[4])){
				document.getElementById("V5R4ID").style.backgroundColor = "yellow";
				document.getElementById("V5R4ID").style.borderRadius = "50px";
				var p = wordSplit.indexOf(inputUser[4]);
				wordSplit[p] = 1;
			}	


			if(wordSplit[0]==0){
				document.getElementById("V1R4ID").style.backgroundColor = "#01de01";
				document.getElementById("V1R4ID").style.borderRadius = "0px";
			} 
			if(wordSplit[1]==0){
				document.getElementById("V2R4ID").style.backgroundColor = "#01de01";
				document.getElementById("V2R4ID").style.borderRadius = "0px";
			} 
			if(wordSplit[2]==0){
				document.getElementById("V3R4ID").style.backgroundColor = "#01de01";
				document.getElementById("V3R4ID").style.borderRadius = "0px";
			} 
			if(wordSplit[3]==0){
				document.getElementById("V4R4ID").style.backgroundColor = "#01de01";
				document.getElementById("V4R4ID").style.borderRadius = "0px";
			} 
			if(wordSplit[4]==0){
				document.getElementById("V5R4ID").style.backgroundColor = "#01de01";
				document.getElementById("V5R4ID").style.borderRadius = "0px";
			} 


			document.getElementById("button").setAttribute("onClick", "kans5()");
		}
	}
}

//vijfde kans

function kans5(){
	input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord5;
   
    if (inputUser.length<=4){
    	alert("Dit woord is niet lang genoeg");
    }
    else{
	    document.getElementById("V1R5ID").style.backgroundColor = "red";
	    document.getElementById("V2R5ID").style.backgroundColor = "red";
	    document.getElementById("V3R5ID").style.backgroundColor = "red";
	    document.getElementById("V4R5ID").style.backgroundColor = "red";
	    document.getElementById("V5R5ID").style.backgroundColor = "red";
	  
	    document.getElementById("V1R5ID").innerHTML = inputUser[0];
	    document.getElementById("V2R5ID").innerHTML = inputUser[1];
	    document.getElementById("V3R5ID").innerHTML = inputUser[2];
	    document.getElementById("V4R5ID").innerHTML = inputUser[3];
	    document.getElementById("V5R5ID").innerHTML = inputUser[4];
	
	    document.getElementById("userinput").value = "";
	    if(JSON.stringify(inputUser)==JSON.stringify(wordSplit)){
			document.getElementById("button").setAttribute("onClick", "EersteWoord()");
			document.getElementById("goedWoordTxt").style.display ="block";
			document.getElementById("nieuwWoordID").style.display = "block";
			document.getElementById("stopButtonID").style.display = "block";
			document.getElementById("V1R5ID").style.backgroundColor = "#01de01";
			document.getElementById("V2R5ID").style.backgroundColor = "#01de01";
			document.getElementById("V3R5ID").style.backgroundColor = "#01de01";
			document.getElementById("V4R5ID").style.backgroundColor = "#01de01";
			document.getElementById("V5R5ID").style.backgroundColor = "#01de01";
			score = score + 10;
			document.getElementById("scoreID").innerHTML = "Score: " + score;
		}
		
		else{
	    	console.log("test");
		    if(inputUser[0]==wordSplit[0]){
		   		document.getElementById("V1R5ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V1R5ID").style.borderRadius = "0px";
		   		wordSplit[0] = 0;
		    }
		    if(inputUser[1]==wordSplit[1]){
		   		document.getElementById("V2R5ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V2R5ID").style.borderRadius = "0px";
		   		wordSplit[1] = 0;
		    }
		    if(inputUser[2]==wordSplit[2]){
		   		document.getElementById("V3R5ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V3R5ID").style.borderRadius = "0px";
		   		wordSplit[2] = 0;
		   		
		    }
		    if(inputUser[3]==wordSplit[3]){
		   		document.getElementById("V4R5ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V4R5ID").style.borderRadius = "0px";
		   		wordSplit[3] = 0;
		   		
		    }
		    if(inputUser[4]==wordSplit[4]){
		   		document.getElementById("V5R5ID").style.backgroundColor = "#01de01";
		   		document.getElementById("V5R5ID").style.borderRadius = "0px";
		   		wordSplit[4] = 0;
		   		
		    }



		    if(wordSplit.includes(inputUser[0])){
		    	document.getElementById("V1R5ID").style.backgroundColor = "yellow";
		    	document.getElementById("V1R5ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[0]);
				wordSplit[p] = 1;
		    }
		    if(wordSplit.includes(inputUser[1])){
		    	document.getElementById("V2R5ID").style.backgroundColor = "yellow";
		    	document.getElementById("V2R5ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[1]);
				wordSplit[p] = 1;
		    }
		    if(wordSplit.includes(inputUser[2])){
		    	document.getElementById("V3R5ID").style.backgroundColor = "yellow";
		    	document.getElementById("V3R5ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[2]);
				wordSplit[p] = 1; 
		    }
		    if(wordSplit.includes(inputUser[3])){
		    	document.getElementById("V4R5ID").style.backgroundColor = "yellow";
		    	document.getElementById("V4R5ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[3]);
				wordSplit[p] = 1;
		    }
		    if(wordSplit.includes(inputUser[4])){
		    	document.getElementById("V5R5ID").style.backgroundColor = "yellow";
		    	document.getElementById("V5R5ID").style.borderRadius = "50px";
		    	var p = wordSplit.indexOf(inputUser[4]);
				wordSplit[p] = 1;
		    }


		    if(wordSplit[0]==0){
		    	document.getElementById("V1R5ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V1R5ID").style.borderRadius = "0px";
		    } 
		    if(wordSplit[1]==0){
		    	document.getElementById("V2R5ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V2R5ID").style.borderRadius = "0px";
		    } 
		    if(wordSplit[2]==0){
		    	document.getElementById("V3R5ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V3R5ID").style.borderRadius = "0px";
		    } 
		    if(wordSplit[3]==0){
		    	document.getElementById("V4R5ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V4R5ID").style.borderRadius = "0px";
		    } 
		    if(wordSplit[4]==0){
		    	document.getElementById("V5R5ID").style.backgroundColor = "#01de01";
		    	document.getElementById("V5R5ID").style.borderRadius = "0px";
		    } 

		    if(JSON.stringify(inputUser)!=JSON.stringify(wordSplit)){
				document.getElementById("foutWoordID").style.display ="block";
				document.getElementById("nieuwWoordID").style.display = "block";
				document.getElementById("foutWoordID").innerHTML = "Je hebt het woord niet geraden. Het woord was: "+ word+".";

			}
			document.getElementById("button").setAttribute("onClick", "");
		}
	}
}	   


function randomWord(){
	word = words[Math.floor(Math.random() * words.length)];
	wordSplit = word.split('');
	document.getElementById("letter1").innerHTML = wordSplit[0];
	onthoudWord1 = word.split('');
	onthoudWord2 = word.split('');
	onthoudWord3 = word.split('');
	onthoudWord4 = word.split('');
	onthoudWord5 = word.split('');
	console.log(wordSplit);
	
}
randomWord();


//timer https://www.youtube.com/watch?v=MLtAMg9_Svw

//	var counter = 0;
//	var maxTimer = 5;
//	var tijdOp = 1;
//
//	var timerTxt = document.createElement("P");
//	document.body.appendChild(timerTxt);
//	timerTxt.id = "TimerVak";
//	document.getElementById("TimerVak").style.fontSize = "50px";
//	document.getElementById("TimerVak").style.position = "absolute";
//	document.getElementById("TimerVak").style.left = "12px";
//	timerTxt.innerHTML = "0";
//	document.getElementById("TimerVak").style.color = "#330867";
//	document.getElementById("TimerVak").style.fontWeight = "bold";




//	function makeTimer(){

//		document.getElementById("TimerVak").innerHTML = maxTimer - counter;

//	    var intervalTimer = setInterval(timerMin, 1000);
//		function timerMin(){
//			counter++;
//			document.getElementById("TimerVak").innerHTML = maxTimer - counter;
//			if(counter == maxTimer){
//				clearInterval(intervalTimer);
//				tijdOp = 0;
//					
//			}
//			
//		}
//		
//	}
//	makeTimer();






