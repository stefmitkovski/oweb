$("#search-gallery").on("keyup", function () {
    var word = $(this).val().toLowerCase();
    $(".gallery-img").filter(function () {
      $(this).toggle($(this).find("h4").text().toLowerCase().indexOf(word) > -1);
    });
  });
  