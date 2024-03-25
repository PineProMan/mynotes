
import './index.css'

const button = document.getElementById('submit');

function CreateNewEntry() {
    if (document.getElementById('inputTextContent').value === '') {
        window.alert('Please write something!');
    }
    else {
        const todayDate = new Date();
        const dd = todayDate.getDate();
        const mm = todayDate.getMonth() + 1;
        const yyyy = todayDate.getFullYear();

        let dateContent = `${dd}/${mm}/${yyyy}`;

        let titleContent = '';
        let textContent = document.getElementById('inputTextContent').value;

        document.getElementById('titleInput').value === '' ? document.getElementById('titleInput').value = "Untitled" : titleContent = document.getElementById('titleInput').value

        titleContent = document.getElementById('titleInput').value;

        const entryDisplay = document.getElementById('entryDisplay');

        let div = document.createElement('div');
        let title = document.createElement('h2');
        let date = document.createElement('p');
        let text = document.createElement('p');
        let delButton = document.createElement('button');



        div.appendChild(title);
        div.appendChild(date);
        div.appendChild(text);
        div.appendChild(delButton);

        div.classList.add('entryContainer');
        delButton.classList.add('delButton');

        title.textContent = titleContent;
        date.textContent = dateContent;
        text.textContent = textContent;
        delButton.textContent = "Delete";

        entryDisplay.prepend(div);


        console.log(textContent);
        console.log(titleContent);

        let numOfEntries = 0;
        numOfEntries = localStorage.getItem('numOfEntries');
        numOfEntries++;

        localStorage.setItem('numOfEntries', numOfEntries);

        const thisEntryNum = numOfEntries;

        div.id = thisEntryNum;


        localStorage.setItem('entryId' + numOfEntries, div.innerHTML);

        delButton.addEventListener('click', function () {
            localStorage.removeItem('entryId' + thisEntryNum);

            let toRemove = document.getElementById(thisEntryNum);
            document.getElementById('entryDisplay').removeChild(toRemove);

            numOfEntries--;
            localStorage.setItem('numOfEntries', numOfEntries); 

            localStorage.setItem('entries', document.getElementById('entryDisplay').innerHTML);
        });
    }
}



button.addEventListener('click', () => {
    CreateNewEntry();


    localStorage.setItem('entries', document.getElementById('entryDisplay').innerHTML);
})

export default CreateNewEntry