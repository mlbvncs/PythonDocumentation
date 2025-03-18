function nav_ul(){
    var nav_ul = document.getElementById("nav_ul")

    if(nav_ul.style.top === "0px"){
        nav_ul.style.top = "-304px"
    }else{
        nav_ul.style.top = "0px"
    }
}