/**
 * Created by stu on 3/3/17.
 */




(function(){

    window.addEventListener("scroll",function(){
        var dataItems = document.querySelectorAll(".componentSection__header");
        var navItems = document.querySelectorAll(".sideBar__items a");
        for(var i = 0; i < navItems.length;i++){
            var navLinkHash =navItems[i].hash;
            if(navLinkHash != ""){
                for(var j = 0; j < dataItems.length; j++){
                    var dataItemId = dataItems[j].getAttribute("id");
                    var el = document.getElementById(dataItemId);
                    if(navItems[i].hash == "#" + dataItemId){
                        var screenPosition = dataItems[i].getBoundingClientRect();
                        if(screenPosition.top > 200 && screenPosition.top < 250 ){
                            navItems[i].style.color = "red";
                        }
                    }
                }
            }
        }
    });




}());