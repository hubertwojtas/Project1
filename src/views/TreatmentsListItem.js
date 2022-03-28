import { AddToCartButton } from "../common/AddToCartButton";


export function TreatmentsListItem(treatment) {
    const article = document.createElement('article');
    article.style.margin = '2em 1em';
    article.style.backgroundColor = '#d0dfb5';
    article.style.padding = '2em 1em';

    article.innerHTML = `
        <h4>${treatment.name}</h4>
        <p>⏰ ${treatment.time} minutes</p>
        <p>
            <strong>${treatment.price.toFixed(2)} PLN</strong>
        </p>
    `;
    article.append(AddToCartButton(treatment));
    return article;
}