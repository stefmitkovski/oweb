$(".post").on("click", function () {
  var input = $(this).parent().find("input").val().trim();
  if (input != "") {
    $(this)
      .parent()
      .find("div")
      .append("<p>Stranger: " + input + "</p>");
  }
});
