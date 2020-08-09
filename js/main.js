(()=>{

	var animalClass="animal";
	var arr = document.querySelector('#all');
	var drag_ = document.querySelectorAll('.animal_dynamic');
	 
	 function initTree(){
	     var trees=document.getElementById("wrap").children;
	     for (var i=0;i<trees.length;i++){
	         trees[i].ondrop=function(){
	             drop(this);
	         }
	     }
	 }

	 function drop(obj){
	 
			 event.preventDefault();
             var animalObj=obj.querySelector(".animal_dynamic");
	         if(animalObj){
	             updateAnimalStyle(animalObj);
	             document.querySelector(`[name=${animalObj.id}]`).classList.remove("selectedImg");
				 let au=animalObj.querySelector("audio");
				 if(au){
					animalObj.removeChild(au);
				 }
	         }
		
	         var data=event.dataTransfer.getData("Text");
			 var anObj=document.querySelector(`#`+data); 
			 var nodecount=obj.childNodes.length;
			 if(nodecount>3){
				anObj.setAttribute("style",anObj.getAttribute("style")+"margin-left: 15%; top: -152%; height: 126px;");
			 }else
			 	anObj.setAttribute("style",anObj.getAttribute("style")+"margin-left: 15%; top: -110%; height: 126px;");
	         
	         anObj.setAttribute("value","true");
			 obj.appendChild(anObj);
			 
	 
	         if(anObj.querySelector("audio")){
	             return;
	         }

	         let audio = document.createElement("audio");
	         anObj.appendChild(audio);
	         audio.src = `assets/`+data+`.mp3`;
	         audio.play();
	         audio.loop = true;
	  }
	 
	 function updateAnimalStyle(obj){
		 _id=obj.id;
		 obj.setAttribute("style","background:"+obj.style.background+";")
		 obj.setAttribute("value","false");
		 let anPare=document.querySelector(`[name=${obj.id}]`);
		 anPare.classList.add("selectedImg");
		 anPare.appendChild(obj);
	 }
 


	 initTree();
  	 arr.ondragover = function(ev){
		 ev.preventDefault();
	 }

	 for(var i=0;i<drag_.length;i++){
		 drag_[i].ondragstart = function(ev){
				 let obj=ev.srcElement.parentElement;
			     ev.dataTransfer.setData("Text",ev.target.id);
			     obj.addEventListener("drag",function (e) {
			        e.preventDefault();
			         if(!document.getElementsByName(e.target.id)[0]){
			             return ;
			         }
			        updateAnimalStyle(e.target);
			        _id=e.target.id;
					let an=document.querySelector(`#`+_id);
			        let audioObj= an.getElementsByTagName("audio")[0];
			        if(audioObj){
			            an.removeChild(audioObj);
			        }
			 	 
			     },true);


			     if(obj.classList[0]!=animalClass){
			          return;
			     }

			     obj.addEventListener("dragend",function (e){
			         document.getElementsByName(_id)[0].classList.remove("selectedImg");
			     });

			     obj.setAttribute("name",ev.target.id);
		 }
	 }
	 
	 
})();

