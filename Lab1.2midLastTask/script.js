function registration(){

    const fname=document.getElementById("fname").value;

    const lname=document.getElementById("lname").value;

    const sid=document.getElementById("sid").value;

    const email=document.getElementById("email").value;

    const credit=document.getElementById("credit").value;

    const department=document.getElementById("department").value;


    let hasFnameError=true;

    let hasLnameError=true;

    let hasIdError=true;

    let hasEmailError=true;

    let hasCreditError=true;

    let hasDepartmentError=true;



    if(fname==""){

        document.getElementById("fnameError").innerHTML="First name required";

        hasFnameError=true;

    }

    else{

        document.getElementById("fnameError").innerHTML="";

        hasFnameError=false;

    }



    if(lname==""){

        document.getElementById("lnameError").innerHTML="Last name required";

        hasLnameError=true;

    }

    else{

        document.getElementById("lnameError").innerHTML="";

        hasLnameError=false;

    }



    if(sid==""){

        document.getElementById("idError").innerHTML="Student ID required";

        hasIdError=true;

    }

    else if(!sid.includes("-")){

        document.getElementById("idError").innerHTML="ID must contain - ";

        hasIdError=true;

    }

    else{

        document.getElementById("idError").innerHTML="";

        hasIdError=false;

    }



    if(email==""){

        document.getElementById("emailError").innerHTML="Email required";

        hasEmailError=true;

    }

    else if(!email.includes("@student.aiub.edu")){

        document.getElementById("emailError").innerHTML="Invalid AIUB email";

        hasEmailError=true;

    }

    else{

        document.getElementById("emailError").innerHTML="";

        hasEmailError=false;

    }



    if(credit==""){

        document.getElementById("creditError").innerHTML="Credit required";

        hasCreditError=true;

    }

    else if(credit<0 || credit>=148){

        document.getElementById("creditError").innerHTML="Credit must be 0 to 147";

        hasCreditError=true;

    }

    else{

        document.getElementById("creditError").innerHTML="";

        hasCreditError=false;

    }



    if(department==""){

        document.getElementById("departmentError").innerHTML="Department required";

        hasDepartmentError=true;

    }

    else{

        document.getElementById("departmentError").innerHTML="";

        hasDepartmentError=false;

    }




    if(!hasFnameError && !hasLnameError && !hasIdError && !hasEmailError && !hasCreditError && !hasDepartmentError){

        let table=document.getElementById("studentList");

        table.innerHTML=table.innerHTML+

        "<tr>"+

        "<td>"+fname+"</td>"+

        "<td>"+lname+"</td>"+

        "<td>"+sid+"</td>"+

        "<td>"+email+"</td>"+

        "<td>"+credit+"</td>"+

        "<td>"+department+"</td>"+

        "</tr>";



        document.getElementById("fname").value="";

        document.getElementById("lname").value="";

        document.getElementById("sid").value="";

        document.getElementById("email").value="";

        document.getElementById("credit").value="";

        document.getElementById("department").value="";
    }

    return false;
}