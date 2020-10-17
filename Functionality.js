function toggleBoxVisibility() {

    var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");

    if (document.getElementById("screen_mode_check").checked == true) {
        
    newlink.setAttribute("href", "dark_Style.css");

    } 
    else {
        
        newlink.setAttribute("href", "light_Style.css");
        
    }
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}