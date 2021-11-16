var elements = document.getElementsByClassName("like");

var postLike = function () {
  if (this.parentNode.getElementsByTagName("button")[0].innerHTML == "Like") {
    like = parseInt(this.parentNode.getElementsByTagName("span")[0].innerHTML) + 1;
    this.parentNode.getElementsByTagName("span")[0].innerHTML = like;
    this.parentNode.getElementsByTagName("button")[0].innerHTML = "Dislike";
  }else{
    dislike = parseInt(this.parentNode.getElementsByTagName("span")[0].innerHTML) - 1;
    this.parentNode.getElementsByTagName("span")[0].innerHTML = dislike;
    this.parentNode.getElementsByTagName("button")[0].innerHTML = "Like";
  }
};

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", postLike, false);
}
