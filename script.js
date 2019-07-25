// GET THE MODAL
    var modal = document.getElementById("myModal");
// BUTTON THAT OPENS THE MODAL
    var submitButton = document.getElementById("myButton");
/* <SPAN> ELEMENT TO CLOSE THE MODAL */
    var span = document.getElementByClassName("close") [0];
// UPON USER CLICK OF THE BUTTON, THE MODAL OPENS
submitButton.onclick = function ( ) {
    modal.style.display = "none";
}
// user clicks on the span Element, close the modal
span.onclick = function( ) {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
