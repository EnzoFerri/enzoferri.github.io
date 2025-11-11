if (window.addEventListener) window.addEventListener('load', setVerticalMenu, false);
else if (window.attachEvent) window.attachEvent('onload', setVerticalMenu );

function setVerticalMenu() {
	if(document.getElementsByTagName && document.getElementById){
		document.getElementById("menu_verticale").className="jsenable";
		var hs=document.getElementById("ul_menu_verticale").getElementsByTagName("ul");
		for(var i=0;i<hs.length;i++){
			hs[i].className="hide";
		}
		hs=document.getElementById("ul_menu_verticale").getElementsByTagName("div");
		for(var i=0;i<hs.length;i++){
			if (hs[i].className!="filetto") {
        hs[i].firstChild.className="chiuso";
        var span=document.createElement("span");
        var node=document.createTextNode("menu espandibile chiuso");
        span.className="non_visibile";
        span.setAttribute('aria-live','polite');
        span.appendChild(node);
        hs[i].appendChild(span);
      }
    }
		BuildList();

    hs=document.getElementById("menu_verticale").getElementsByTagName("li");
   	for(var i=0;i<hs.length;i++){
			if (hs[i].className=="on") {
				if (hs[i].firstChild.className=="pannello" || hs[i].firstChild.className=="menu") {
					var firstUl=hs[i].getElementsByTagName("ul");
					showAncestors(firstUl[0]);
			//		switchOffAll();
				}
				else showAncestors(hs[i]);
			}
	   }
	}
}

function BuildList(){
	var hs=document.getElementById("menu_verticale").getElementsByTagName("div");
	for(var i=0;i<hs.length;i++) {
	  if (hs[i].className!="filetto") {
			hs[i].onclick=function(){
				if (this.parentNode.getElementsByTagName("ul")[0].className=="hide") {
					switchOffAll();
					showAncestors(this.parentNode.getElementsByTagName("ul")[0]);
					this.firstChild.className="aperto";
					this.lastChild.innerHTML="menu espandibile aperto";
				}
				else {
					// switchOffAll();
					this.parentNode.getElementsByTagName("ul")[0].className="hide";
					this.firstChild.className="chiuso";
					this.lastChild.innerHTML="menu espandibile chiuso";
				}
	    }
	  }
	}
	hs=document.getElementById("menu_verticale").getElementsByTagName("a");
	for(var i=0;i<hs.length;i++) {
   	 hs[i].onclick=function(){
			switchOffAll();
			showAncestors(this);
	    }
	}
}

function switchOffAll() {
	hs=document.getElementById("menu_verticale").getElementsByTagName("li");
	for(var i=0;i<hs.length;i++){
      hs[i].className="off";
	}
}
function showAncestors(node) {
	if (node.tagName.toLowerCase()=="ul") node.className="show";
	if (node.tagName.toLowerCase()=="li") {
		node.className="on";
		if (node.firstChild.className=="menu" || node.firstChild.className=="pannello") {
			 node.firstChild.firstChild.className="aperto";
       node.firstChild.lastChild.innerHTML="menu espandibile aperto";
    }
  }
	if (node.getAttribute("id")!="ul_menu_verticale") showAncestors(node.parentNode);
}
