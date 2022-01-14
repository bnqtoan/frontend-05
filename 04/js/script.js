var button = document.getElementById('action');

button.addEventListener('click', function(){
    //alert("hello js");
    var doanVan =  document.getElementById('example');
    doanVan.innerHTML = "Hello JS";
    doanVan.classList.add("text-red-500");
    doanVan.classList.add("ani");
});