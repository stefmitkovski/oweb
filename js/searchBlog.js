$("#search-blog").on("keyup", function () {
  var word = $(this).val().toLowerCase();
  $(".blogging").filter(function () {
    $(this).toggle($(this).find("h3").text().toLowerCase().indexOf(word) > -1);
  });
});
