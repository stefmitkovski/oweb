var btnBlog = document.getElementsByClassName("blog-create")[0];
btnBlog.addEventListener("click", createBlog, false);

function createBlog() {
  blogForm = btnBlog.parentNode;

  var errors = Array();
  var title = blogForm.getElementsByTagName("input")[0].value;
  var body = blogForm.getElementsByTagName("textarea")[0].value;
  var link = blogForm.getElementsByTagName("input")[1].value;

  if (title == "") {
    errors.push("You forgot to enter the title of the article \n");
  }

  if (body == "") {
    errors.push("You forgot to enter the body text of the article \n");
  }

  if (link == "") {
    errors.push("You forgot to enter the link to the article \n");
  }

  if (errors.length > 0) {
    alert(errors);
  } else {
    var blogs = document.getElementById("blog");

    var newBlog = document.createElement("article");
    newBlog.setAttribute("class", "blogging");

    var titleBlog = document.createElement("h3");
    var titleText = document.createTextNode(title);
    titleBlog.appendChild(titleText);
    newBlog.appendChild(titleBlog);
    newBlog.appendChild(document.createElement("br"));

    var bodyBlog = document.createElement("p");
    var bodyText = document.createTextNode(body);
    bodyBlog.appendChild(bodyText);
    newBlog.appendChild(bodyBlog);

    var linkBlog = document.createElement("a");
    linkBlog.setAttribute("class", "fancy-button");
    linkBlog.setAttribute("href", link);
    linkBlog.innerHTML = "Learn more";
    newBlog.appendChild(linkBlog);

    blogs.insertBefore(newBlog, blogForm);
  }
}
