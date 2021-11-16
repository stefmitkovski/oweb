var elementsPost = document.getElementsByClassName("post");

function post(){
    var input = this.parentNode.getElementsByTagName("input")[0].value;
    if(input != ""){
        this.parentNode.getElementsByTagName("div")[0].innerHTML = "Stanger: " + input;
    }
}


for (var i = 0; i < elementsPost.length; i++) {
    elementsPost[i].addEventListener("click", post, false);
  }
