var surverbtn = document.getElementsByClassName("submit-survey")[0];
surverbtn.addEventListener("click", validateSurvey,false);

function validateSurvey() {

    var survey = surverbtn.parentNode;
    var flag = 1;
    var errors = Array();

    var name = survey.getElementsByTagName("input")[0].value;
    var email = survey.getElementsByTagName("input")[1].value;
    var webRating = survey.getElementsByTagName("input")[2].checked;
    var questionsRating = survey.getElementsByTagName("input")[3].value;


    if (name == ""){
      errors.push("You forgot to enter your name ! \n");
    }
    if(email == ""){
      errors.push("You forgot to enter your email ! \n");
    }

    for(var i = 2;i<=6;i++){
      if( survey.getElementsByTagName("input")[i].checked == true){
        flag = 0;
      }
    }

    if(flag == 1){
        errors.push("You forgot to rate the design of the site ! \n");
    }

    flag = 1;

    for(var i = 7;i<=11;i++){
      if( survey.getElementsByTagName("input")[i].checked == true){
        flag = 0;
      }
    }

    if(flag == 1){
      errors.push("You forgot to rate the questions on this survey ! \n");
    }

    if(errors.length > 0){
      alert(errors);
    }else{
        alert("Thanks for the feedback :)");
    }

  }