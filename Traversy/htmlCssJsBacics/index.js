const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const mssg = document.querySelector(".mssg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value === ""){
        mssg.classList.add("error");
        mssg.innerText = "Please fill in the parameters";
        // if (mssg.visibility == "visible"){
        //     mssg.visibility = "hidden";
        // } else{
        //     mssg.visibility = "visible";
        // }
        setTimeout(function () {
            mssg.remove();
        }, 3000);
    }
    else{
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        nameInput.value="";
        emailInput.value="";
        // alert(`${nameInput.value} : ${emailInput.value}`);
    }
}