let content = document.querySelector("#content");

// set default page to home if 1 value
let load_page=1;

// imports modules
import  createHomePage  from "./modules/home";
import  createMenuPage  from "./modules/menu";
import createContactPage from "./modules/contact";

const createHeader = () => {
    let header = document.createElement("header");
    let restaurant_title = document.createElement("h3");
    restaurant_title.setAttribute("class","header_title");
    restaurant_title.innerHTML = "JNM's Cafe";

    content.appendChild(header);
    header.appendChild(restaurant_title);
}

const createNav = () => {
    // create elements
    let header = document.createElement("header");
    let restaurant_title = document.createElement("h3");
    restaurant_title.innerHTML = "JNM's Cafe"
    
    let nav = document.createElement("nav");
    let ordered_list = document.createElement("ol");

    let list_nav_home = document.createElement("li");
    let list_btn_home = document.createElement("button");
    list_btn_home.setAttribute("id","nav_btn_home");
    list_btn_home.innerHTML= "Home";

    let list_nav_menu = document.createElement("li");
    let list_btn_menu = document.createElement("button");
    list_btn_menu.setAttribute("id","nav_btn_menu");
    list_btn_menu.innerHTML= "Menu";

    let list_nav_contact = document.createElement("li");
    let list_btn_contact = document.createElement("button");
    list_btn_contact.setAttribute("id","nav_btn_contact");
    list_btn_contact.innerHTML= "Contact";


    // append elements
    content.appendChild(nav);
    nav.appendChild(ordered_list);
    ordered_list.appendChild(list_nav_home);
    list_nav_home.appendChild(list_btn_home);
    ordered_list.appendChild(list_nav_menu);
    list_nav_menu.appendChild(list_btn_menu);
    ordered_list.appendChild(list_nav_contact);
    list_nav_contact.appendChild(list_btn_contact);
}

const locate_page = (load_page) =>{
    if(load_page==1){
        // reload page 1 classess
        page_1.classList.remove("hide");
        page_1.classList.add("show");

        // hide other pages class
        page_2.classList.remove("show");
        page_2.classList.add("hide");
        page_3.classList.remove("show");
        page_3.classList.add("hide");
    }
    else if(load_page==2){
        // reload page 1 classess
        page_2.classList.remove("hide");
        page_2.classList.add("show");

        // hide other pages class
        page_1.classList.remove("show");
        page_1.classList.add("hide");
        page_3.classList.remove("show");
        page_3.classList.add("hide");
    } 
    else if(load_page==3){
        // reload page 1 classess
        page_3.classList.remove("hide");
        page_3.classList.add("show");

        // hide other pages class
        page_1.classList.remove("show");
        page_1.classList.add("hide");
        page_2.classList.remove("show");
        page_2.classList.add("hide");
    }
}


window.document.onload = createHeader();
window.document.onload = createNav();


const home_btn = document.getElementById("nav_btn_home");
let menu_btn = document.getElementById("nav_btn_menu");
let contact_btn = document.getElementById("nav_btn_contact");

// load initially pages
createHomePage(content);
createMenuPage(content);
createContactPage(content);

// initial page load
locate_page(load_page);

home_btn.addEventListener('click',()=>{
    load_page = 1;
    locate_page(load_page);
});

menu_btn.addEventListener('click',()=>{
    load_page = 2;
    locate_page(load_page);
});

contact_btn.addEventListener('click',()=>{
    load_page = 3;
    locate_page(load_page);
});



