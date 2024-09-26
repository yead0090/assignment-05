const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");




// common function
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function getInnerTextById(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}






const donTabBtn = document.getElementById("donate-tab-btn");
const histTabBtn = document.getElementById("history-tab-btn");
const donTab = document.getElementById("donation-tab");
const histTab = document.getElementById("history-tab");









btn1.addEventListener("click", function () {
    const input1 = Number(getInputFieldValueById("input-1"));
    let result1 = Number(getInnerTextById("result-1"));
    const balance = Number(getInnerTextById("balance"));

    if (input1 <= 0) {
        alert("Invalid amount")
        return;
    }
    if (input1 > balance) {
        alert("You Do Not Have Enough Balance")
        return;
    }

    document.getElementById("result-1").innerText = result1 + input1;
    let newBalance = balance - input1;
    document.getElementById("balance").innerText = newBalance;
    my_modal_1.showModal()

    return;
})


btn2.addEventListener("click", function () {
    const input2 = Number(getInputFieldValueById("input-2"));
    let result2 =  Number(getInnerTextById("result-2"));
    const balance = Number(getInnerTextById("balance"));
    if (input2 <= 0) {
        alert("Invalid amount")
        return;
    }
    if (input2 > balance) {
        alert("You Do Not Have Enough Balance")
        return;
    }
    document.getElementById("result-2").innerText = result2 + input2;
    let newBalance = balance - input2;
    document.getElementById("balance").innerText = newBalance;
    my_modal_1.showModal()
    return;
})


btn3.addEventListener("click", function () {
    const input3 = Number(getInputFieldValueById("input-3"));
    let result3 =  Number(getInnerTextById("result-3"));
    const balance = Number(getInnerTextById("balance"));
    if (input3 <= 0) {
        alert("Invalid amount")
        return;
    }
    if (input3 > balance) {
        alert("You Do Not Have Enough Balance")
        return;
    }
    document.getElementById("result-3").innerText = result3 + input3;
    let newBalance = balance - input3;
    document.getElementById("balance").innerText = newBalance;
    my_modal_1.showModal()
    return;
})

histTabBtn.addEventListener("click", function () {
    const histTab = document.getElementById("history-tab");
    const donTab = document.getElementById("donation-tab");
    donTab.classList.add("hidden");
    histTab.classList.remove("hidden");
    donTabBtn.classList.remove("bg-[#B4F461]");
    histTabBtn.classList.add("bg-[#B4F461]");



})






donTabBtn.addEventListener("click", function () {
    const donTab = document.getElementById("donation-tab");
    const histTab = document.getElementById("history-tab");
    donTab.classList.remove("hidden")
    histTab.classList.add("hidden")
    donTabBtn.classList.add("bg-[#B4F461]");
    histTabBtn.classList.remove("bg-[#B4F461]")


})


// historydiv

btn1.addEventListener("click", function () {
    const input1 = Number(document.getElementById("input-1").value);
    const balance = Number(document.getElementById("balance").innerText)
    if (input1 <= 0) {
        return;
    }
    if (input1 > balance) {
        return;
    }
    const histTab = document.getElementById("history-tab");
    const histDiv = document.createElement("div")
    histDiv.innerHTML =
        `<p class="font-extrabold" >${input1}Taka is Donated for Flood at Noakhali, Bangladesh</p>
         <p>Date:${new Date().toString()}</p>`;

    histTab.insertBefore(histDiv, histTab.firstChild);
    histDiv.classList.add(
        "w-9/12",
        "mx-auto",
        "border-2",
        "rounded-md",
        "p-3",
        "mt-3",
    )
})


btn2.addEventListener("click", function () {
    const input2 = Number(document.getElementById("input-2").value);
    const balance = Number(document.getElementById("balance").innerText)
    if (input2 <= 0) {
        return;
    }
    if (input2 > balance) {
        return;
    }
    const histTab = document.getElementById("history-tab");
    const histDiv = document.createElement("div")
    histDiv.innerHTML =
        `<p class="font-extrabold" >${input2}Taka is Donated for Flood Relief in Feni,Bangladesh</p>
         <p>Date:${new Date().toString()}</p>`;

    histTab.insertBefore(histDiv, histTab.firstChild);
    histDiv.classList.add(
        "w-9/12",
        "mx-auto",
        "border-2",
        "rounded-md",
        "p-3",
        "mt-3",
    )
})


btn3.addEventListener("click", function () {
    const input3 = Number(document.getElementById("input-3").value);
    const balance = Number(document.getElementById("balance").innerText)
    if (input3 <= 0) {
        return;
    }
    if (input3 > balance) {
        return;
    }
    const histTab = document.getElementById("history-tab");
    const histDiv = document.createElement("div")
    histDiv.innerHTML =
        `<p class="font-extrabold" >${input3}Taka is Aid for Injured in the Quota Movement</p>
         <p>Date:${new Date().toString()}</p>`;

    histTab.insertBefore(histDiv, histTab.firstChild);
    histDiv.classList.add(
        "w-9/12",
        "mx-auto",
        "border-2",
        "rounded-md",
        "p-3",
        "mt-3",
    )
})