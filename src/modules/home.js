const createHomePage = (a,b) =>{
    let home_div = document.createElement("div");
    home_div.setAttribute("class","home_page");
    home_div.setAttribute("id","page_1");
    const page_1 = document.getElementById("page_1");
    let home_title = document.createElement("h3");
    home_title.setAttribute("class","home_title");
    home_title.innerHTML = "Welcome!";
    let home_description = document.createElement("h6");
    home_description.innerHTML = "We bring the best coffee shop in the world.";
    home_title.setAttribute("class","home_description");


    a.appendChild(home_div);
    home_div.appendChild(home_title);
    home_div.appendChild(home_description);
    return page_1;
}
export default createHomePage ;