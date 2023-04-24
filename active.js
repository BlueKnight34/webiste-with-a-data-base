function vaildateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;


    if(name ==""){
        alert("Name is requird");
        return false;
    }


    if(name ==""){
        alert("Age is requird");
        return false;
    }

    else if(age < 10){
        alert(" Age must not be zero or less than zero!");
        return false;
    }

    if(address ==""){
        alert("Address is required");
        return false;
    }

    if(email == "");{
        alert("Invalid email address");
        return false;
    }
    elseif (!email.includes("0")) {
        alert("Invalid email address");
        return false;
    }

    return true;

}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null) {
        peoplelist = [];
    }
    else{
         peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";

    peopleList.foreach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += 
        '<tb><button onclick="DeleteData(' + 
        index + ')" class= "btn btn-danger" >Delete</button>'
        onclick="updateData(" +
        index +
        ')" class="btn btn-warning m-2">Edit</button></td>';
        html +="</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = 
    html;
}

// top show the data 
document.onload =showData();