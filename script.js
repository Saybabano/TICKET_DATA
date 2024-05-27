
let formTag = document.querySelector("form");
let tableTag = document.querySelector("table");
let tbodyTag = document.querySelector("tbody");

function Add(details) {
    details.preventDefault();
    
    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;
    let date = document.querySelector("#date").value;
    let gender = document.querySelector("#gender").value;
    let select = document.querySelector("#option").value;

    tbodyTag.innerHTML +=
        `<tr>
            <td>${from}</td>
            <td>${to}</td>
            <td>${date}</td>
            <td>${gender}</td>
            <td>${select}</td>
            <td><button class="removeBtn">Remove</button></td>
        </tr>`;
}

formTag.addEventListener("submit", Add);

function Remove(details) {
    if (details.target.classList.contains("removeBtn")) {
        details.target.parentElement.parentElement.remove();
    }
}

tableTag.addEventListener("click", Remove);
