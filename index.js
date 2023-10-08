function checkParameter(){
    var eml= document.forms["form1"]["eml"].value;
    var pswd= document.forms["form1"]["pswd"].value;
    

    if(uemail == null || uemail == "") {
        document.getElementById("error message").innerHTML = "ENTER VALID EMAILID";
        return false;
    }
    if(upass == null || upass == "") {
        document.getElementById("error message").innerHTML = "ENTER VALID PASSWORD";
        return false;
    }
    if(uemail != '' && upass == '') {
        alert("---LOGIN SUCCESSFULLY---");
        return true;
    }
}
