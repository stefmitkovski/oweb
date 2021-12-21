$("input[name=autogenerate]").on("click", function () {
  if ($(this).is(":checked")) {
    var addres = $(this)
      .parent()
      .parent()
      .find("input[name=link]")
      .val()
      .trim();
    if (addres != "") {
      $.getJSON(
        "http://www.whateverorigin.org/get?url=" +
          encodeURIComponent(addres) +
          "&callback=?",
        function (html) {
          var div = $("<div><div/>");
          div.html(html.contents);

          $("input[name=blog-title]").val((div.find("title").text()));
          $("textarea[name=blog-body]").val(div.find("p").first().text());
        }
      );
    }
  }
});
