/**
 * Created by stu on 3/3/17.
 */

//get distance from top of screen to first data element
// if distance is 200px, color the corresponding nav item;


/*(function(){

    window.addEventListener("scroll",function(){
        console.log("scrolling");
        var dataItems = document.querySelectorAll(".componentSection__header");
        var navItems = document.querySelectorAll(".sideBar__items a");
        for(var i = 0; i < navItems.length;i++){
            var navLinkHash = navItems[i].hash;
            if(navLinkHash != ""){
                for(var j = 0; j < dataItems.length; j++){
                    var dataItemId = dataItems[j].getAttribute("id");
                    if(navItems[i].hash == "#" + dataItemId){

                        var screenPosition = dataItems[j].getBoundingClientRect();
                        console.log(screenPosition.top);
                        if(screenPosition.top > 200 && screenPosition.top < 250 ){
                            navItems[i].style.color = "red";
                        }
                    }
                }
            }
        }
    });
}());*/


(function() {
    window.addEventListener("scroll", function() {
        console.log("scrolling");
        var dataItems = document.querySelectorAll(".componentSection__header");
        var navItems = document.querySelectorAll(".sideBar__items a");
        var navHeaders = document.querySelectorAll(".sideBar__items a h3")
        for (var k = 0; k < dataItems.length; k++) {
            console.log(dataItems[k]);
            console.log(dataItems[k].getBoundingClientRect().top);
            if (dataItems[k].getBoundingClientRect().top >= 15 && dataItems[k].getBoundingClientRect().top <= 150) {
                for (var i = 0; i < navItems.length; i++) {
                    if(navHeaders[i].style.borderLeft = "3px solid" +
                            " #EA1B64"){
                        navHeaders[i].style.borderLeft = "none";
                    }
                    var navLinkHash = navItems[i].hash;
                    if (navLinkHash != "") {
                        var dataItemId = dataItems[k].getAttribute("id");
                        if (navItems[i].hash == "#" + dataItemId) {
                            navHeaders[i].style.borderLeft = "3px solid" +
                                " #EA1B64";
                        }
                    }
                }
                console.log("top");
            }
        }
    });
})();