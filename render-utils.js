export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');

    h3.textContent = workshop.name;

    div.append(h3);
    return div;
}
