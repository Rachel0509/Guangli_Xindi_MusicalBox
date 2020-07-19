    function drag(ev) {
        ev.dataTransfer.setData("Text",ev.target.id);
        ev.srcElement.parentElement.classList.add('selectedImg');
    }
    function allowDrop(ev) {
        ev.preventDefault();
    }
    function drop(ev) {
        ev.preventDefault();

        console.log(ev);

        var data=ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
        var nums=event.currentTarget.children.length;

        let audio = document.createElement("audio");

        if(nums>12){
            event.target.querySelector(`#`+data).appendChild(audio);
            audio.src = `assets/`+data+`.mp3`;
            audio.play();
            audio.loop = true;
        }
    }