
function GetOldData(){
    document.getElementById('entryDisplay').innerHTML = localStorage.getItem('entries');
}

export default GetOldData