/**
 * Created by stu on 3/3/17.
 */

//get distance from top of screen to first data element
// if distance is 200px, color the corresponding nav item;

(function() {
    window.addEventListener("scroll", function scrollSpy() {
        var i;
        var j;
        var offsetHeight;
        var navLinkHash;
        var dataItemId;
        var dataItems = document.querySelectorAll(".componentSection");
        var navItems = document.querySelectorAll(".sideBar__items a");
        var navHeaders = document.querySelectorAll(".sideBar__items h3");

        for ( j = 0; j < dataItems.length; j++) {
            offsetHeight = dataItems[j].offsetHeight;
            if (dataItems[j].getBoundingClientRect().top <= 15 && dataItems[j].getBoundingClientRect().top <= offsetHeight) {
                for (i = 0; i < navItems.length; i++) {
                    if(navHeaders[i].style.borderLeft = "3px solid" +
                            " #EA1B64"){
                        navHeaders[i].style.borderLeft = "none";
                    }
                    navLinkHash = navItems[i].hash;
                    if (navLinkHash != "") {
                        dataItemId = dataItems[j].getAttribute("id");
                        if (navItems[i].hash == "#" + dataItemId) {
                            navHeaders[i].style.borderLeft = "3px solid" +
                                " #EA1B64";
                        }
                    }
                }
            }
        }
    });
})();