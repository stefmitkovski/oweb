var btnUpload = document.getElementsByClassName("upload-gallery")[0];
btnUpload.addEventListener("click", upload, false);

function upload() {
  uploadForm = btnUpload.parentNode;

  var errors = Array();
  var title = uploadForm.getElementsByTagName("input")[0].value;
  var image = "images/" + uploadForm.getElementsByTagName("input")[1].files[0].name;
  var ext = image.split('.').pop();

  if (image == "") {
    errors.push("You forgot to enter the link to the article \n");
  }

  if (ext != "jpg" && ext != "jpeg" && ext != "png" && image != ""){
      errors.push("You uploaded a file type that is not supported ! \n");
  }

  if (title == "") {
    errors.push("You forgot to enter the title of the article \n");
  }

  if (errors.length > 0) {
    alert(errors);
  }else{
    var gallery = document.getElementById("gallery");
    var galleryImage = document.createElement("div");
    galleryImage.setAttribute("class","gallery-img");

    var header = document.createElement("h4");
    header.innerHTML = title;

    galleryImage.appendChild(header);
    
    var img = document.createElement("img");
    img.setAttribute("src",image);
    img.setAttribute("alt","Image from gallery");
    
    galleryImage.appendChild(img);
    galleryImage.appendChild(document.createElement("br"));
    
    var p = document.createElement("p");
    p.innerHTML = "Likes: ";
    var span = document.createElement("span");
    span.innerHTML = 0;
    p.setAttribute("style","display: inline-block;");
    p.appendChild(span);

    galleryImage.appendChild(p);
    galleryImage.appendChild(document.createElement("br"));

    likebtn = document.createElement("button");
    likebtn.setAttribute("class","like");
    likebtn.innerHTML = "Like";
    likebtn.addEventListener("click", postLike, false);

    galleryImage.appendChild(likebtn);

    text = document.createElement("input");
    text.setAttribute("type","text");

    galleryImage.appendChild(text);

    postbtn = document.createElement("button");
    postbtn.setAttribute("class","post");
    postbtn.innerHTML = "Post";
    postbtn.addEventListener("click", post, false);

    galleryImage.appendChild(postbtn);

    galleryImage.appendChild(document.createElement("div"));

    gallery.insertBefore(galleryImage,uploadForm);
    }
}
