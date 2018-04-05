

window.onload=function(){

	setTimeout(function(){
		document.getElementById("popup").style.display="none";
	},10000);
};

function fonclick(){
	document.getElementById("boutonjs").style.display="none";
	document.getElementById("container").style.display="inline-block";
	
}

function recherche(){
	let vari=document.getElementById("inputrech").value;
	let val=vari.replace(" ","+");
	document.location.href=`https://www.google.com/#q=${val}`; 
	}

