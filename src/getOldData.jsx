
function GetOldData() {
    document.getElementById('entryDisplay').innerHTML = localStorage.getItem('entries');

    const deleteButtons = document.querySelectorAll('.delButton');
    deleteButtons.forEach(button => button.remove());
}

export default GetOldData