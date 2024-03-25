import './index.css'

function NewEntry() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    const displayDate = `${dd}/${mm}/${yyyy}`
    document.getElementById('date').textContent = displayDate;
}

export default NewEntry