class Client{
    constructor(dni, name, lastname, balance){
        this._dni = dni;
        this._name = name;
        this._lastname = lastname;
        this._balance = balance;
    }

    getFullName(){
        return this._lastname + ", " + this._name 
    }
}

let clients = [];
let button = document.getElementById("button").addEventListener('click',show);


function newClient(){
    let dni = document.getElementById("dni").value;
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let balance = document.getElementById("balance").value;
    let client = new Client(dni, name, lastname, balance);

    return client;
}

function show(e) {
    e.preventDefault();

    let ul = document.getElementById("list");
    let li = document.createElement("li");
    ul.appendChild(li);
    let fullname = newClient().getFullName();
    let content = document.createTextNode(fullname); 
    li.appendChild(content);

    save(fullname);
}

function save(client){
    clients.push(client);
    localStorage.setItem('cliente', JSON.stringify(clients));
};