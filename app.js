/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getWorkshops } from './fetch-utils.js';
import { renderWorkshop } from './render-utils.js';

/* Get DOM Elements */
const workshopsContainer = document.querySelector('.extracurricular-groups-list');

/* State */

/* Events */
window.addEventListener('load', async () => {
    await fetchAndDisplayWorkshops();
});

/* Display Functions */

async function fetchAndDisplayWorkshops() {
    workshopsContainer.textContent = '';

    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const workshopEl = renderWorkshop(workshop);
        workshopsContainer.append(workshopEl);
    }
}
