import { TreatmentsListItem } from "./TreatmentsListItem";

export function TreatmentsList() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Treatments</h2>
        <header>Loading...</header>
    `;

    fetch('http://localhost:3000/treatments')
        .then(response => response.json())
        .then(treatments => {
            const articles = treatments.map(treatment => TreatmentsListItem(treatment));
                

            section.querySelector('header').remove();
            section.append(...articles);
        });

    return section;
}
