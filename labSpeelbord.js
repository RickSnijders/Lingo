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

//Team Text V

var team1Txt = document.createElement("P");
team1Txt.id = "TTxt1";
document.getElementById("Ttxt1").innerHTML = "Team 1";

var team2Txt = document.createElement("P");
team2Txt.id = "TTxt2";
document.getElementById("Ttxt2").innerHTML = "Team 2";


document.getElementById("userinput").setAttribute("maxlength", "5");

function EersteWoord() {
    input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord1;
    document.getElementById("letter2").innerHTML = inputUser[1];
    document.getElementById("letter3").innerHTML = inputUser[2];
    document.getElementById("letter4").innerHTML = inputUser[3];
    document.getElementById("letter5").innerHTML = inputUser[4];
    document.getElementById("userinput").value = "";
    
    if(inputUser[0]==wordSplit[0]){
   		document.getElementById("letter1").style.backgroundColor = "green";
   		document.getElementById("letter1").style.borderRadius = "0px";
   		wordSplit[0] = 0;
    }
    if(inputUser[1]==wordSplit[1]){
   		document.getElementById("letter2").style.backgroundColor = "green";
   		document.getElementById("letter2").style.borderRadius = "0px";
   		wordSplit[1] = 0;
    }
    if(inputUser[2]==wordSplit[2]){
   		document.getElementById("letter3").style.backgroundColor = "green";
   		document.getElementById("letter3").style.borderRadius = "0px";
   		wordSplit[2] = 0;
    }
    if(inputUser[3]==wordSplit[3]){
   		document.getElementById("letter4").style.backgroundColor = "green";
   		document.getElementById("letter4").style.borderRadius = "0px";
   		wordSplit[3] = 0;
    }
    if(inputUser[4]==wordSplit[4]){
   		document.getElementById("letter5").style.backgroundColor = "green";
   		document.getElementById("letter5").style.borderRadius = "0px";
   		wordSplit[4] = 0;
    }

  
    if(wordSplit.includes(inputUser[0])){
    	document.getElementById("letter1").style.backgroundColor = "yellow";
 		document.getElementById("letter1").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[1])){
    	document.getElementById("letter2").style.backgroundColor = "yellow";
    	document.getElementById("letter2").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[2])){
    	document.getElementById("letter3").style.backgroundColor = "yellow";
    	document.getElementById("letter3").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[3])){
    	document.getElementById("letter4").style.backgroundColor = "yellow";
    	document.getElementById("letter4").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[4])){
    	document.getElementById("letter5").style.backgroundColor = "yellow";
    	document.getElementById("letter5").style.borderRadius = "50px"; 
    }


    if(wordSplit[0]==0){
    	document.getElementById("letter1").style.backgroundColor = "green";
    	document.getElementById("letter1").style.borderRadius = "0px";
    } 
    if(wordSplit[1]==0){
    	document.getElementById("letter2").style.backgroundColor = "green";
    	document.getElementById("letter2").style.borderRadius = "0px";
    } 
    if(wordSplit[2]==0){
    	document.getElementById("letter3").style.backgroundColor = "green";
    	document.getElementById("letter3").style.borderRadius = "0px";
    } 
    if(wordSplit[3]==0){
    	document.getElementById("letter4").style.backgroundColor = "green";
    	document.getElementById("letter4").style.borderRadius = "0px";
    } 
    if(wordSplit[4]==0){
    	document.getElementById("letter5").style.backgroundColor = "green";
    	document.getElementById("letter5").style.borderRadius = "0px";
    } 


	document.getElementById("button").setAttribute("onClick", "kans2()");
    
}

function kans2(){
 	input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord2;
    document.getElementById("V1R2ID").innerHTML = inputUser[0];
    document.getElementById("V2R2ID").innerHTML = inputUser[1];
    document.getElementById("V3R2ID").innerHTML = inputUser[2];
    document.getElementById("V4R2ID").innerHTML = inputUser[3];
    document.getElementById("V5R2ID").innerHTML = inputUser[4];
    document.getElementById("userinput").value = "";
    

    if(inputUser[0]==wordSplit[0]){
   		document.getElementById("V1R2ID").style.backgroundColor = "green";
   		document.getElementById("V1R2ID").style.borderRadius = "0px";
   		wordSplit[0] = 0;
    }
    if(inputUser[1]==wordSplit[1]){
   		document.getElementById("V2R2ID").style.backgroundColor = "green";
   		document.getElementById("V2R2ID").style.borderRadius = "0px";
   		wordSplit[1] = 0;
    }
    if(inputUser[2]==wordSplit[2]){
   		document.getElementById("V3R2ID").style.backgroundColor = "green";
   		document.getElementById("V3R2ID").style.borderRadius = "0px";
   		wordSplit[2] = 0;
   		
    }
    if(inputUser[3]==wordSplit[3]){
   		document.getElementById("V4R2ID").style.backgroundColor = "green";
   		document.getElementById("V4R2ID").style.borderRadius = "0px";
   		wordSplit[3] = 0;
   		
    }
    if(inputUser[4]==wordSplit[4]){
   		document.getElementById("V5R2ID").style.backgroundColor = "green";
   		document.getElementById("V5R2ID").style.borderRadius = "0px";
   		wordSplit[4] = 0;	
    }



    if(wordSplit.includes(inputUser[0])){
    	document.getElementById("V1R2ID").style.backgroundColor = "yellow";
    	document.getElementById("V1R2ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[1])){
    	document.getElementById("V2R2ID").style.backgroundColor = "yellow";
    	document.getElementById("V2R2ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[2])){
    	document.getElementById("V3R2ID").style.backgroundColor = "yellow";
    	document.getElementById("V3R2ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[3])){
    	document.getElementById("V4R2ID").style.backgroundColor = "yellow";
    	document.getElementById("V4R2ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[4])){
    	document.getElementById("V5R2ID").style.backgroundColor = "yellow";
    	document.getElementById("V5R2ID").style.borderRadius = "50px";
    }


    if(wordSplit[0]==0){
    	document.getElementById("V1R2ID").style.backgroundColor = "green";
    	document.getElementById("V1R2ID").style.borderRadius = "0px";
    } 
    if(wordSplit[1]==0){
    	document.getElementById("V2R2ID").style.backgroundColor = "green";
    	document.getElementById("V2R2ID").style.borderRadius = "0px";
    } 
    if(wordSplit[2]==0){
    	document.getElementById("V3R2ID").style.backgroundColor = "green";
    	document.getElementById("V3R2ID").style.borderRadius = "0px";
    } 
    if(wordSplit[3]==0){
    	document.getElementById("V4R2ID").style.backgroundColor = "green";
    	document.getElementById("V4R2ID").style.borderRadius = "0px";
    } 
    if(wordSplit[4]==0){
    	document.getElementById("V5R2ID").style.backgroundColor = "green";
    	document.getElementById("V5R2ID").style.borderRadius = "0px";
    } 


	   
	document.getElementById("button").setAttribute("onClick", "kans3()");
}

function kans3(){
	input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord3;
    document.getElementById("V1R3ID").innerHTML = inputUser[0];
    document.getElementById("V2R3ID").innerHTML = inputUser[1];
    document.getElementById("V3R3ID").innerHTML = inputUser[2];
    document.getElementById("V4R3ID").innerHTML = inputUser[3];
    document.getElementById("V5R3ID").innerHTML = inputUser[4];
    document.getElementById("userinput").value = "";
    

    if(inputUser[0]==wordSplit[0]){
   		document.getElementById("V1R3ID").style.backgroundColor = "green";
   		document.getElementById("V1R3ID").style.borderRadius = "0px";
   		wordSplit[0] = 0;
    }
    if(inputUser[1]==wordSplit[1]){
   		document.getElementById("V2R3ID").style.backgroundColor = "green";
   		document.getElementById("V2R3ID").style.borderRadius = "0px";
   		wordSplit[1] = 0;
    }
    if(inputUser[2]==wordSplit[2]){
   		document.getElementById("V3R3ID").style.backgroundColor = "green";
   		document.getElementById("V3R3ID").style.borderRadius = "0px";
   		wordSplit[2] = 0;
   		
    }
    if(inputUser[3]==wordSplit[3]){
   		document.getElementById("V4R3ID").style.backgroundColor = "green";
   		document.getElementById("V4R3ID").style.borderRadius = "0px";
   		wordSplit[3] = 0;
   		
    }
    if(inputUser[4]==wordSplit[4]){
   		document.getElementById("V5R3ID").style.backgroundColor = "green";
   		document.getElementById("V5R3ID").style.borderRadius = "0px";
   		wordSplit[4] = 0;
   		
    }



    if(wordSplit.includes(inputUser[0])){
    	document.getElementById("V1R3ID").style.backgroundColor = "yellow";
    	document.getElementById("V1R3ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[1])){
    	document.getElementById("V2R3ID").style.backgroundColor = "yellow";
    	document.getElementById("V2R3ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[2])){
    	document.getElementById("V3R3ID").style.backgroundColor = "yellow";
    	document.getElementById("V3R3ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[3])){
    	document.getElementById("V4R3ID").style.backgroundColor = "yellow";
    	document.getElementById("V4R3ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[4])){
    	document.getElementById("V5R3ID").style.backgroundColor = "yellow";
    	document.getElementById("V5R3ID").style.borderRadius = "50px";
    }


    if(wordSplit[0]==0){
    	document.getElementById("V1R3ID").style.backgroundColor = "green";
    	document.getElementById("V1R3ID").style.borderRadius = "0px";
    } 
    if(wordSplit[1]==0){
    	document.getElementById("V2R3ID").style.backgroundColor = "green";
    	document.getElementById("V2R3ID").style.borderRadius = "0px";
    } 
    if(wordSplit[2]==0){
    	document.getElementById("V3R3ID").style.backgroundColor = "green";
    	document.getElementById("V3R3ID").style.borderRadius = "0px";
    } 
    if(wordSplit[3]==0){
    	document.getElementById("V4R3ID").style.backgroundColor = "green";
    	document.getElementById("V4R3ID").style.borderRadius = "0px";
    } 
    if(wordSplit[4]==0){
    	document.getElementById("V5R3ID").style.backgroundColor = "green";
    	document.getElementById("V5R3ID").style.borderRadius = "0px";
    } 


	document.getElementById("button").setAttribute("onClick", "kans4()");
}

function kans4(){
	input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord4;
    document.getElementById("V1R4ID").innerHTML = inputUser[0];
    document.getElementById("V2R4ID").innerHTML = inputUser[1];
    document.getElementById("V3R4ID").innerHTML = inputUser[2];
    document.getElementById("V4R4ID").innerHTML = inputUser[3];
    document.getElementById("V5R4ID").innerHTML = inputUser[4];
    document.getElementById("userinput").value = "";
    

    if(inputUser[0]==wordSplit[0]){
   		document.getElementById("V1R4ID").style.backgroundColor = "green";
   		document.getElementById("V1R4ID").style.borderRadius = "0px";
   		wordSplit[0] = 0;
    }
    if(inputUser[1]==wordSplit[1]){
   		document.getElementById("V2R4ID").style.backgroundColor = "green";
   		document.getElementById("V2R4ID").style.borderRadius = "0px";
   		wordSplit[1] = 0;
    }
    if(inputUser[2]==wordSplit[2]){
   		document.getElementById("V3R4ID").style.backgroundColor = "green";
   		document.getElementById("V3R4ID").style.borderRadius = "0px";
   		wordSplit[2] = 0;
   		
    }
    if(inputUser[3]==wordSplit[3]){
   		document.getElementById("V4R4ID").style.backgroundColor = "green";
   		document.getElementById("V4R4ID").style.borderRadius = "0px";
   		wordSplit[3] = 0;
   		
    }
    if(inputUser[4]==wordSplit[4]){
   		document.getElementById("V5R4ID").style.backgroundColor = "green";
   		document.getElementById("V5R4ID").style.borderRadius = "0px";
   		wordSplit[4] = 0;
   		
    }



    if(wordSplit.includes(inputUser[0])){
    	document.getElementById("V1R4ID").style.backgroundColor = "yellow";
    	document.getElementById("V1R4ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[1])){
    	document.getElementById("V2R4ID").style.backgroundColor = "yellow";
    	document.getElementById("V2R4ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[2])){
    	document.getElementById("V3R4ID").style.backgroundColor = "yellow";
    	document.getElementById("V3R4ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[3])){
    	document.getElementById("V4R4ID").style.backgroundColor = "yellow";
    	document.getElementById("V4R4ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[4])){
    	document.getElementById("V5R4ID").style.backgroundColor = "yellow";
    	document.getElementById("V5R4ID").style.borderRadius = "50px";
    }	


    if(wordSplit[0]==0){
    	document.getElementById("V1R4ID").style.backgroundColor = "green";
    	document.getElementById("V1R4ID").style.borderRadius = "0px";
    } 
    if(wordSplit[1]==0){
    	document.getElementById("V2R4ID").style.backgroundColor = "green";
    	document.getElementById("V2R4ID").style.borderRadius = "0px";
    } 
    if(wordSplit[2]==0){
    	document.getElementById("V3R4ID").style.backgroundColor = "green";
    	document.getElementById("V3R4ID").style.borderRadius = "0px";
    } 
    if(wordSplit[3]==0){
    	document.getElementById("V4R4ID").style.backgroundColor = "green";
    	document.getElementById("V4R4ID").style.borderRadius = "0px";
    } 
    if(wordSplit[4]==0){
    	document.getElementById("V5R4ID").style.backgroundColor = "green";
    	document.getElementById("V5R4ID").style.borderRadius = "0px";
    } 


	document.getElementById("button").setAttribute("onClick", "kans5()");

}

function kans5(){
	input = document.getElementById('userinput').value;
    input = input.toString().toLowerCase();
    inputUser = input.split('');
    wordSplit = onthoudWord5;
    document.getElementById("V1R5ID").innerHTML = inputUser[0];
    document.getElementById("V2R5ID").innerHTML = inputUser[1];
    document.getElementById("V3R5ID").innerHTML = inputUser[2];
    document.getElementById("V4R5ID").innerHTML = inputUser[3];
    document.getElementById("V5R5ID").innerHTML = inputUser[4];
    document.getElementById("userinput").value = "";
    

    if(inputUser[0]==wordSplit[0]){
   		document.getElementById("V1R5ID").style.backgroundColor = "green";
   		document.getElementById("V1R5ID").style.borderRadius = "0px";
   		wordSplit[0] = 0;
    }
    if(inputUser[1]==wordSplit[1]){
   		document.getElementById("V2R5ID").style.backgroundColor = "green";
   		document.getElementById("V2R5ID").style.borderRadius = "0px";
   		wordSplit[1] = 0;
    }
    if(inputUser[2]==wordSplit[2]){
   		document.getElementById("V3R5ID").style.backgroundColor = "green";
   		document.getElementById("V3R5ID").style.borderRadius = "0px";
   		wordSplit[2] = 0;
   		
    }
    if(inputUser[3]==wordSplit[3]){
   		document.getElementById("V4R5ID").style.backgroundColor = "green";
   		document.getElementById("V4R5ID").style.borderRadius = "0px";
   		wordSplit[3] = 0;
   		
    }
    if(inputUser[4]==wordSplit[4]){
   		document.getElementById("V5R5ID").style.backgroundColor = "green";
   		document.getElementById("V5R5ID").style.borderRadius = "0px";
   		wordSplit[4] = 0;
   		
    }



    if(wordSplit.includes(inputUser[0])){
    	document.getElementById("V1R5ID").style.backgroundColor = "yellow";
    	document.getElementById("V1R5ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[1])){
    	document.getElementById("V2R5ID").style.backgroundColor = "yellow";
    	document.getElementById("V2R5ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[2])){
    	document.getElementById("V3R5ID").style.backgroundColor = "yellow";
    	document.getElementById("V3R5ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[3])){
    	document.getElementById("V4R5ID").style.backgroundColor = "yellow";
    	document.getElementById("V4R5ID").style.borderRadius = "50px";
    }
    if(wordSplit.includes(inputUser[4])){
    	document.getElementById("V5R5ID").style.backgroundColor = "yellow";
    	document.getElementById("V5R5ID").style.borderRadius = "50px";
    }


    if(wordSplit[0]==0){
    	document.getElementById("V1R5ID").style.backgroundColor = "green";
    	document.getElementById("V1R5ID").style.borderRadius = "0px";
    } 
    if(wordSplit[1]==0){
    	document.getElementById("V2R5ID").style.backgroundColor = "green";
    	document.getElementById("V2R5ID").style.borderRadius = "0px";
    } 
    if(wordSplit[2]==0){
    	document.getElementById("V3R5ID").style.backgroundColor = "green";
    	document.getElementById("V3R5ID").style.borderRadius = "0px";
    } 
    if(wordSplit[3]==0){
    	document.getElementById("V4R5ID").style.backgroundColor = "green";
    	document.getElementById("V4R5ID").style.borderRadius = "0px";
    } 
    if(wordSplit[4]==0){
    	document.getElementById("V5R5ID").style.backgroundColor = "green";
    	document.getElementById("V5R5ID").style.borderRadius = "0px";
    } 


	document.getElementById("button").setAttribute("onClick", "");
    
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

	
}
randomWord();



console.log(wordSplit);

