var element = document.getElementById("cv-text").getElementsByTagName("a");
        
function show(){
    var div = document.getElementById("show");
    if(div.children.length > 0){
      while(div.firstChild){
        div.removeChild(div.firstChild);
      }
    }

    switch(this.innerHTML){

    case "Lord Of The Rings":
        var vid = document.createElement("iframe");
        vid.setAttribute("src", "https://www.youtube.com/embed/V75dMMIW2B4");
        div.appendChild(vid);
      break;

      case "The Godfather":
        var vid = document.createElement("iframe");
        vid.setAttribute("src", "https://www.youtube.com/embed/sY1S34973zA");
        div.appendChild(vid);
      break;    

      case "Rounders":
        var vid = document.createElement("iframe");
        vid.setAttribute("src", "https://www.youtube.com/embed/9r-K5dmt0Rc");
        div.appendChild(vid);
      break;

      case "Gorillaz":
        var vid = document.createElement("iframe");
        vid.setAttribute("src", "https://www.youtube.com/embed/HyHNuVaZJ-k");
        div.appendChild(vid);
      break;

      case "Linking Park":
        var vid = document.createElement("iframe");
        vid.setAttribute("src", "https://www.youtube.com/embed/kXYiU_JCYtU");
        div.appendChild(vid);
      break;

      case "SOAD":
        var vid = document.createElement("iframe");
        vid.setAttribute("src", "https://www.youtube.com/embed/iywaBOMvYLI");
        div.appendChild(vid);
      break;

      case "Ajvar":
        var img = document.createElement("img");
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ajvar1_bright.jpg");
        img.setAttribute("style","height:100px; width: 100px;");
        div.appendChild(img);
      break;

      case "Burek":
        var img = document.createElement("img");
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/54/Burek.png");
        img.setAttribute("style","height:100px; width: 100px;");
        div.appendChild(img);
      break;

      case "Sarma":
        var img = document.createElement("img");
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b5/Etli_yaprak_sarma_-_yogurt.jpg");
        img.setAttribute("style","height:100px; width: 100px;");
        div.appendChild(img);
      break;
    }
}

for(var i=0;i<element.length;i++){
  element[i].addEventListener('mouseover', show, false);
}
