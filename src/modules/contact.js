const createContactPage = (a,b) =>{
    let contact_div = document.createElement("div");
    contact_div.setAttribute("id","page_3");
    let page_2 = document.getElementById("page_3");
    let contact_title = document.createElement("h3");
    contact_title.innerHTML = "Contact Page";
    contact_title.setAttribute("class","contact_title");

    let contact_container = document.createElement("div");
    contact_container.setAttribute("class","contact_container");
    let contact_list = document.createElement("ul");
    contact_list.setAttribute("id","contact_list");


    contact_list.insertAdjacentHTML("beforeend", `
    <li>
        <h3>Jonathan Magat</h3>
        <p>0975757575</p>
    </li>
    <li>
        <h3>John Cena</h3>
        <p>000000000</p>
    </li>
`);

    a.appendChild(contact_div);
    contact_div.appendChild(contact_title);
    contact_div.appendChild(contact_container);
    contact_container.appendChild(contact_list);
    return page_3;
}


export default createContactPage;