/*$(document).ready(function() {
   $("div.maclasse").click(function(){
      window.location=$(this).find("a").attr("href");
      return false;
   });
});
*/

function createTheme(){
	
	var champ = (document.getElementById("NouveauTheme").value);
	var url = document.location.href;
	
	//url doit contenir le dossier parent
	url = url.slice(0,url.lastIndexOf("/"));
	
	//url doit être l'adresse de forum.html
	url = url + '/forum.Html';
	
	
 //   window.location.href=document.location.slice(-1);
	document.location.replace(url,champ);
	//var delai = window.setInterval(Timer(champ), 3000);
	//Timer(champ);
//alert(url);
	//ajouter le nouveau theme  donc champ
   
//document.getElementById("demo").innerHTML = myBest;
	
}

function PromptMessage() {
	var saisie = prompt("Saisissez le nouveau thème :", "")
	if (saisie!=null) {
		ajouteChamp(saisie);
	}
}


function ajouteChamp(champ) {
	// alert(champ);
  /*<div class = "article">
			<img></img>
			<a href = "Cuisine.html" target = "blank">Cuisine</a>
	</div>*/
	var p = document.createElement("p");
	document.getElementById("Champ").appendChild(p);
	var div = document.createElement("div");
	div.className = "article";
	
	
	var img = document.createElement("img");
	div.appendChild(img);
	var aHref = document.createElement("a");
	var t = document.createTextNode(champ);

	aHref.appendChild(t);
	aHref.setAttribute("href", champ+".html");
	aHref.setAttribute("target", "blank");
	div.appendChild(aHref);
	// */
    document.getElementById("Champ").appendChild(div);
}

function CreerPost() {
	var saisie = prompt("Saisissez le nouveau thème :", "")
	if (saisie!=null) {
		ajoutePost(saisie);
	}
}

function ajoutePost(champ) {
	// alert(champ);
  /*<div class = "article">
			<p> Fais gaffe a tes hemorroides </p>
	</div>*/
	
	var p = document.createElement("p");
	document.getElementById("champ").appendChild(p);
    
	var div = document.createElement("div");
	div.className = "article";
		
	var txt = document.createElement("p");
	txt.innerHTML = champ;
	div.appendChild(txt);	
	
	var div2 = document.createElement("div");
	div2.className = "Commentaires";
	div2.id = div.childElementCount;
	div.appendChild(div2);
	
	var btn = document.createElement("input");
	btn.setAttribute("Type","Button");
	btn.setAttribute("onclick","creerCommentaire()");
	btn.setAttribute("Value","Ajouter un commentaire");
	btn.id = div.childElementCount - 1; 
	btn.className = "btn";
	div.appendChild(btn);
	
	document.getElementById("champ").appendChild(div);
	
	
}


function creerCommentaire(){
	var saisie = prompt("Saisissez le commentaire :", "")
	if (saisie!=null) {
		ajouterCommentaire(saisie);
	}
}


function ajouterCommentaire(champ) {
	// alert(champ);
  /*<div class = "article">
			<p> Fais gaffe a tes hemorroides </p>
	</div>*/
	// var p = document.createElement("p");
	// document.getElementById("Champ").appendChild(p);
	var p = document.createElement("p");
	
	p.innerHTML = champ;
	// */
    document.getElementById(event.target.id - 1 ).appendChild(p);
}