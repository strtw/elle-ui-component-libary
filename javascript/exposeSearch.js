/**
 * Created by stu on 2/26/17.
 */


window.onload = function(){

    var searchInput = document.getElementById("searchBar__searchInput");
    var editorField = document.getElementById("searchBar__searchEditor");
    var checkBox = document.getElementById("searchBar__searchEditorControl");
    var expandIcon =  document.getElementById("searchBar__expand");

    var exposeSearch = {
        placeInEditor: function(){
            editorField.innerHTML = searchInput.value;
        },
        editorToSearch:function(){
            searchInput.value = editorField.innerHTML;
        },
        expandIconCheck:function(){
            var size = searchInput.getAttribute("size");
            var searchString = searchInput.value.length;
            if(searchString > size){
                expandIcon.style.opacity = 1;
            }else{
                expandIcon.style.opacity = 0;

            }
    }
    }

    searchInput.addEventListener("keyup",function checkBoxTest(){
        //if(checkBox.checked /*&& searchInput.value.length > 0*/){
            exposeSearch.placeInEditor();
       // }
    });

    editorField.addEventListener("keyup",exposeSearch.editorToSearch);

    searchInput.addEventListener("keyup",function(){
        exposeSearch.expandIconCheck();
        exposeSearch.placeInEditor();

    });

}