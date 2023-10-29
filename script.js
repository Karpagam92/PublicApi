const USER_API = "https://jsonplaceholder.typicode.com/users";

let data = [];

const searchInput = document.getElementById("searchUser");
searchInput.addEventListener("keyup", (e) => {
  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  clearContactContainer();
  renderUsersContactList(filteredData);
});

function createContact(contact = {}) {
  const col = document.createElement("div");
  col.className = "col-lg-3 col-md-6 col-sm-12 col-xs-12";
  col.innerHTML = `<div class="card">
                        <div class="card-body" style="background-color: aqua;"">
                            <div class="row mb-3">
                                <div class="col-10">
                                    <h5 class="card-title sliced-text" id="name" style="width: 100%;">Name : ${contact.name}</h5>
                                    <p class="card-subtitle mb-2 text-body-secondary contact_email" id="email">Email : ${contact.email}</p>
                                    <p class="contact_address sliced-text" id="address" style="width: 100%;"><span class="me-1"></span>Street : ${contact.address.street}</p>
                                    <p class="contact_address sliced-text" id="address" style="width: 100%;"><span class="me-1"></span>City : ${contact.address.city}</p>
                                </div>
                            </div>
                        </div>`;
  return col;
}

function clearContactContainer() {
  const container = document.getElementById("contacts-list-container");
  container.innerHTML = "";
}

function renderUsersContactList(data = []) {
  const contactNodes = [];
  const container = document.getElementById("contacts-list-container");
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      contactNodes.push(createContact(data[i]));
    }
  }
  container.append(...contactNodes);
}

async function getAllUsers() {
  const response = await fetch(USER_API);
  data = await response.json();
  renderUsersContactList(data);
}

getAllUsers();
