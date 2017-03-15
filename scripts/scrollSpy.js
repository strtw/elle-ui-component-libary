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
        var classCount = 0;
        var navLinkHash;
        var dataItemId;
        var dataItems = document.querySelectorAll(".componentSection");
        var navLinks = document.querySelectorAll(".sideBar__items a");
        var navHeaders = document.querySelectorAll(".sideBar__itemHeader");
        for ( j = 0; j < dataItems.length; j++) {
            offsetHeight = dataItems[j].offsetHeight;
            if (dataItems[j].getBoundingClientRect().top <= 15 && dataItems[j].getBoundingClientRect().top <= offsetHeight) {
                for (i = 0; i < navLinks.length; i++) {
                    if(navHeaders[i].classList.contains('sideBar--scrollSpyActive')){
                        navHeaders[i].classList.remove('sideBar--scrollSpyActive');
                    }
                    navLinkHash = navLinks[i].hash;
                    if (navLinkHash != "") {
                        dataItemId = dataItems[j].getAttribute("id");
                        if (navLinks[i].hash == "#" + dataItemId && classCount < 1) {
                        navHeaders[i].classList.add('sideBar--scrollSpyActive');
                        }
                    }
                }
            }
        }
    });
})();
