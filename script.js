const apiEndpoint = "https://jsonplaceholder.typicode.com/users"
const display = document.querySelector("#display-data")
const input = document.querySelector("#input")
const updateBtn = document.getElementById("update")
const formUpdate = document.getElementById("form")
const backdrop = document.getElementById("backdrop")
const updateCancelBtn = document.getElementById("update-cancel")
const updateYesBtn = document.getElementById("update-yes")

console.log(form);
const getData = async () => {
    const res = await fetch(apiEndpoint)
    const data = await res.json()
    return data
}

const displayUsers = async () => {

    let query = input.value

    const payload = await getData();

    let dataDisplay = payload.filter((event) => {
        if (query === "") {
            return event
        }else if (event.name.toLowerCase().includes(query.toLowerCase())) {
            return  event
        }
    }).map((object) => {
        const { name, email, phone } = object;
        return `
                <div class="container">
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                </div>
        `
    }).join("");

    display.innerHTML = dataDisplay;
}
displayUsers();

input.addEventListener("input",() => {
    displayUsers()
});



const updateUsersHandler = () => {
    backdrop.classList.add("block-backdrop")
    formUpdate.classList.add("open-form")
    
}

const cancelUpdateHandler = () => {
    backdrop.classList.remove("block-backdrop")
    formUpdate.classList.remove("open-form")
}
const UpdateHandler = () => {
    window.location.reload();
}

updateBtn.addEventListener("click" , updateUsersHandler)
updateCancelBtn.addEventListener("click" , cancelUpdateHandler)
updateYesBtn.addEventListener("click" , UpdateHandler)

