$("button").on("click", function(){
  if(($(this).text() == "Like")){
    $(this).text("Dislike");
    $(this).parent().find("span").text("1");
  }else if(($(this).text() == "Dislike")){
    $(this).text("Like");
    $(this).parent().find("span").text("0");
  }
})