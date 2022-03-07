var b1=document.getElementById("b1").value;
var b2=document.getElementById("b2").value;
var b3=document.getElementById("b3").value;
var b4=document.getElementById("b4").value;
var b5=document.getElementById("b5").value;
var b6=document.getElementById("b6").value;
var b7=document.getElementById("b7").value;
var b8=document.getElementById("b8").value;
var b9=document.getElementById("b9").value;

var jasoos="1"
function f1() 
{
	if(jasoos=="1")
    {
		b1="X";
		document.getElementById("b1").value="X";
		document.getElementById("b1").disabled=true;
	
		jasoos=0;
	}
	else 
	{
		b1="0";
		document.getElementById("b1").value="0";
		document.getElementById("b1").disabled=true;
		jasoos=1;
	}
	winner();
}

function f2() 
{
	if(jasoos=="1") 
	{
		b2="X";
		document.getElementById("b2").value="X";
		document.getElementById("b2").disabled=true;
		jasoos=0;
	}
	else 
	{
		b2="0";
		document.getElementById("b2").value="0";
		document.getElementById("b2").disabled=true;
		jasoos=1;
	}
	winner(); 
}

function f3() 
{
	if(jasoos=="1") 
	{
		b3="X";
		document.getElementById("b3").value="X";
		document.getElementById("b3").disabled=true;
		jasoos=0;
	}
	else 
	{
		b3="0";
		document.getElementById("b3").value="0";
		document.getElementById("b3").disabled=true;
		jasoos=1;
	}
	winner();
}

function f4() 
{
	if(jasoos=="1") 
	{
		b4="X";
		document.getElementById("b4").value ="X";
		document.getElementById("b4").disabled=true;
		jasoos=0;
	}
	else 
	{
		b4="0";
		document.getElementById("b4").value="0";
		document.getElementById("b4").disabled=true;
		jasoos=1;
	}
	winner();

}

function f5() 
{
	if(jasoos=="1") 
	{
		b5="X";
		document.getElementById("b5").value="X";
		document.getElementById("b5").disabled=true;
		jasoos=0;
	}
	else 
	{
		b5="0";
		document.getElementById("b5").value="0";
		document.getElementById("b5").disabled=true;
		jasoos=1;
	}
	winner();

}

function f6() 
{
	if(jasoos=="1") 
	{
		b6="X";
		document.getElementById("b6").value="X";
		document.getElementById("b6").disabled=true;
		jasoos=0;
	}
	else 
	{
		b6="0";
		document.getElementById("b6").value="0";
		document.getElementById("b6").disabled=true;
		jasoos=1;
	}
	winner();
}

function f7() 
{
	if(jasoos=="1") 
	{
		b7="X";
		document.getElementById("b7").value="X";
		document.getElementById("b7").disabled=true;
		jasoos=0;
	}
	else 
	{
		b7="0";
		document.getElementById("b7").value="0";
		document.getElementById("b7").disabled=true;
		jasoos=1;
	}
	winner();
}

function f8() 
{
	if(jasoos=="1") 
	{
		b8="X";
		document.getElementById("b8").value="X";
		document.getElementById("b8").disabled=true;
		jasoos=0;
	}
	else 
	{
		b8="0";
		document.getElementById("b8").value="0";
		document.getElementById("b8").disabled=true;
		jasoos=1;
	}
	winner();
}

function f9() 
{
	if(jasoos=="1") 
	{
		b9="X";
		document.getElementById("b9").value="X";
		document.getElementById("b9").disabled=true;
		jasoos=0;
	}
	else 
	{
		b9="0";
		document.getElementById("b9").value="0";
		document.getElementById("b9").disabled=true;
		jasoos=1;
	}
	winner();
}
///////////////////////RESET////////////////////////////////////
function reset() 
	{
		document.getElementById("b1").value='';
		document.getElementById("b2").value='';
		document.getElementById("b3").value='';
		document.getElementById("b4").value='';
		document.getElementById("b5").value='';
		document.getElementById("b6").value='';
		document.getElementById("b7").value='';
		document.getElementById("b8").value='';
		document.getElementById("b9").value='';
		location.reload(); //with this we can't need to refresh
	}
/////////////////////// x wins /////////////////////////////////////
function winner(){

	
if(b1=='X' && b2=='X' && b3=='X')
	 {
		document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
		alert("PLAYER X WON\nPress RESET button to play again");
	}
	else if(b1=='X' && b4=='X' && b7=='X')
	 {
		document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
        alert("PLAYER X WON\nPress RESET button to play again");
	 }
	else if(b7=='X' && b8=='X' && b9=='X')
	 {
		document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
		alert("PLAYER X WON\nPress RESET button to play again");
	 }
	else if(b3=='X' && b6=='X' && b9=='X') 
	{
		document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
		alert("PLAYER X WON\nPress RESET button to play again");
	}
	else if(b1=='X' && b5=='X' && b9=='X') 
	{
		document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
		alert("PLAYER X WON\nPress RESET button to play again");
	}
	else if(b3=='X' && b5=='X' && b7=='X')
	 {
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
		alert("PLAYER X WON\nPress RESET button to play again");
	}
	else if(b2=='X' && b5=='X' && b8=='X') 
	{
		document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
		alert("PLAYER X WON\nPress RESET button to play again");
	}
	else if(b4=='X' && b5=='X' && b6=='X')
	 {
		document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
		alert("PLAYER X WON\nPress RESET button to play again");
	}

///////////////////////////// 0 wins ////////////////////////////////////////////////////

	if(b1=='0' && b2=='0' && b3=='0')
	{
	    document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
	   alert("PLAYER 0 WON\nPress RESET button to play again");
   }
   else if(b1=='0' && b4=='0' && b7=='0')
	{
	    document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
	   alert("PLAYER 0 WON\nPress RESET button to play again");
	}
   else if(b7=='0' && b8=='0' && b9=='0')
	{
	    document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
	    alert("PLAYER 0 WON\nPress RESET button to play again");
	}
   else if(b3=='0' && b6=='0' && b9=='0') 
   {
	    document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
	    alert("PLAYER 0 WON\nPress RESET button to play again");
   }
   else if(b1=='0' && b5=='0' && b9=='0') 
   {
	    document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
	    alert("PLAYER 0 WON\nPress RESET button to play again"); 
   }
   else if(b3=='0' && b5=='0' && b7=='0')
	{
	    document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
	    alert("PLAYER 0 WON\nPress RESET button to play again"); 
   }
   else if(b2=='0' && b5=='0' && b8=='0') 
   {
	    document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
	    alert("PLAYER 0 WON\nPress RESET button to play again");
   }
   else if(b4=='0' && b5=='0' && b6=='0')
	{
	    document.getElementById("b1").disabled=true;
		document.getElementById("b2").disabled=true;
		document.getElementById("b3").disabled=true;
		document.getElementById("b4").disabled=true;
		document.getElementById("b5").disabled=true;
		document.getElementById("b6").disabled=true;
		document.getElementById("b7").disabled=true;
		document.getElementById("b8").disabled=true;
		document.getElementById("b9").disabled=true;
	    alert("PLAYER 0 WON\nPress RESET button to play again");
   }
}