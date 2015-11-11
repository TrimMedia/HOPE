window.addEventListener("load", function(){
	var graphLinks = document.querySelector("#graph-links").querySelectorAll(".link-list__item");
	var graphs = document.querySelector("#graphs").querySelectorAll("figure");

	for (var i = 0; i < graphLinks.length; i++) {
		graphLinks[i].addEventListener("click",function(){
			for (var i = 0; i < graphs.length; i++) {
				if(graphs[i].id == this.id){
					graphs[i].classList.remove("u-hidden");
				}else{
					graphs[i].classList.add("u-hidden");
				}
			};
		});
	}
});