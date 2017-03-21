/**
 * Created by stu on 2/26/17.
 */

//todo Write concise and clear instructions about how to use your element,include information about any known bugs or incompatibilities.

//todo When we are ready to add your innovative element to the collective UIframework, change your element’s color scheme to match the collective UI framework color scheme. We will announce the collective UI’s color scheme in a few days.
//fixme trying to close editor with icon doesn't work after adding text 2editor
//fixme space bar in editor adds escaped characters to the search bar


window.onload = function() {
    var longSearchEditor = document.getElementById("searchBar--longSearchEditor");
    var searchInput = document.getElementById("searchBar__searchInput");
    var editorField = document.getElementById("searchBar__searchEditor");
    var checkBoxLabel = document.getElementById("searchBar__searchEditorControlLabel");
    var expandIcon = document.getElementById("searchBar__expand");
    var searchBoxWidth = searchInput.clientWidth;

    var exposeSearch = {
        placeInEditor: function () {
            editorField.innerText = searchInput.value;
        },
        editorToSearch: function () {
            searchInput.value = editorField.innerText;
        },
        expandIconCheck: function () {
            if (exposeSearch.getInputPixelWidth(searchInput) >= searchBoxWidth) {
                expandIcon.style.visibility = "visible";
            } else {
                expandIcon.style.visibility = "hidden";
            }
        },
        getInputPixelWidth: function (elem) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext("2d");
            var style = window.getComputedStyle(elem, null);
            var fontSize = style.getPropertyValue('font-size');
            var fontFamily = style.getPropertyValue('font-family');
            var fontWeight = style.getPropertyValue('font-weight');
            ctx.font = fontWeight + " " + fontSize + " " + fontFamily;
            var width = ctx.measureText(searchInput.value).width;
            return width;
        }
    };


    function hideEditorWhenInputVisible(){
        if(editorField.style.display === "block"){
            if (exposeSearch.getInputPixelWidth(searchInput) < searchBoxWidth) {
                editorField.style.display = "none";
            }
        }

    }

    editorField.addEventListener("keyup",function(){
        exposeSearch.expandIconCheck();
        exposeSearch.editorToSearch();
        hideEditorWhenInputVisible()
    });

    searchInput.addEventListener("keyup",function(){
        exposeSearch.expandIconCheck();
        exposeSearch.placeInEditor();
        hideEditorWhenInputVisible()
    });

    checkBoxLabel.addEventListener("mousedown",function(event){
        event.preventDefault();
       if(editorField.style.display === "" || editorField.style.display === "none"){
           editorField.style.display = "block";
           editorField.focus();
       }else if(editorField.style.display === "block"){
           editorField.style.display = "none";
       }

    });

  editorField.addEventListener("blur",function(){
        editorField.style.display = "none";
        exposeSearch.expandIconCheck();
        searchInput.focus();
    });
};