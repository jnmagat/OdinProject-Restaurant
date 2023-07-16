
const createMenuPage = (a,b) =>{
    let menu_div = document.createElement("div");
    menu_div.setAttribute("id","page_2");
    let page_2 = document.getElementById("page_2");
    let menu_title = document.createElement("h3");
    menu_title.innerHTML = "Menu Page";
    menu_title.setAttribute("class","menu_title");

    let menu_container = document.createElement("div");
    menu_container.setAttribute("class","menu_container");
    let menu_list = document.createElement("ul");
    menu_list.setAttribute("id","menu_list");

    menu_list.insertAdjacentHTML("beforeend", `
    <li>
        <h3>Espresso</h3>
        <p>2 Karats</p>
        <p>Feel the caffeine.</p>
    </li>
    <li>
        <h3>Mocha Latte</h3>
        <p>1 Karats</p>
        <p>Drink some sugar.</p>
    </li>
    <li>
        <h3>Regular Coffee</h3>
        <p>0.5 Karats</p>
        <p>Casual customer.</p>
    </li>
    <li>
        <h3>CHOCOffee</h3>
        <p>0.1 Karats</p>
        <p>Nothing Special.</p>
    </li>
`);

    a.appendChild(menu_div);
    menu_div.appendChild(menu_title);
    // append products
    menu_div.appendChild(menu_container);
    menu_container.appendChild(menu_list);
    
    return page_2;
}

export default createMenuPage;