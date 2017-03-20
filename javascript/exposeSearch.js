/**
 * Created by stu on 2/26/17.
 */

//todo Hide the expanded editor when the user clicks outside the element or --add little close icon on the upper right of the expanded editor.

//todo Write concise and clear instructions about how to use your element,include information about any known bugs or incompatibilities.

//todo When we are ready to add your innovative element to the collective UIframework, change your element’s color scheme to match the collective UI framework color scheme. We will announce the collective UI’s color scheme in a few days.


window.onload = function() {
    var longSearchEditor = document.getElementById("searchBar--longSearchEditor");
    var searchInput = document.getElementById("searchBar__searchInput");
    var editorField = document.getElementById("searchBar__searchEditor");
    var checkBoxLabel = document.getElementById("searchBar__searchEditorControlLabel");
    var checkBox = document.getElementById("searchBar__searchEditorControl");
    var expandIcon = document.getElementById("searchBar__expand");

    var exposeSearch = {
        placeInEditor: function () {
            editorField.innerHTML = searchInput.value;
        },
        editorToSearch: function () {
            searchInput.value = editorField.innerHTML;
        },
        expandIconCheck: function () {
            var searchBoxWidth = searchInput.clientWidth;
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




    editorField.addEventListener("keyup",function(){
        exposeSearch.expandIconCheck();
        exposeSearch.editorToSearch();
    });

    searchInput.addEventListener("keyup",function(){
        exposeSearch.expandIconCheck();
        exposeSearch.placeInEditor();
    });

    longSearchEditor.addEventListener("change",function(e){
        if (e.target.checked === false) {
            editorField.style.display = "none";
            searchInput.focus();
            console.log(false);
        }else{
            e.target.checked = true;
            editorField.style.display = "block";
            editorField.focus();
            console.log(true);
        }
    });

    editorField.addEventListener("blur",function(){
        editorField.style.display = "none";
        checkBox.checked = false;
    })
};