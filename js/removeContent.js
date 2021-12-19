$("button").on("click", function () {
  if ($(this).text() == "X") {
    $(this).parent().remove();
  }
});
