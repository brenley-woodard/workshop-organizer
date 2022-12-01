import { getWorkshops } from '../fetch-utils.js';

const selectEl = document.querySelector('select');
const form = document.querySelector('form');

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const workshopOption = document.createElement('option');

        workshopOption.textContent = workshop.name;
        workshopOption.value = workshop.id;

        selectEl.append(workshopOption);
    }
});
