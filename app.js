/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { deleteStudent, getWorkshops } from './fetch-utils.js';
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
        const studentsEl = document.createElement('ul');
        for (let student of workshop.students) {
            const studentEl = document.createElement('li');
            studentEl.textContent = `${student.name}: ${student.email}`;

            studentEl.addEventListener('click', async () => {
                await deleteStudent(student.id);
                fetchAndDisplayWorkshops();
            });

            studentsEl.append(studentEl);
        }

        workshopEl.append(studentsEl);
        workshopsContainer.append(workshopEl);
    }
}
