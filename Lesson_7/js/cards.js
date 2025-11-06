const cardTextContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ratione, quia aliquid dolor culpa error nam mollitia qui sed at veniam ipsum minus dignissimos optio laudantium, consequuntur soluta quam. Ipsum.';

function removeCard(element) {
    element.remove();
}

export const renderCards = (amount) => {
    const cardsContainer = document.querySelector('#cards-container');

    for (let i = 0; i <= amount; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        // card-content
        const cardHeader = document.createElement('h2');
        cardHeader.textContent = `Header ${i + 1}`;

        const cardText = document.createElement('p');
        cardText.textContent = cardTextContent;

        cardContent.append(cardHeader, cardText);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'x';
        closeBtn.onclick = (e) => removeCard(card);

        card.append(cardContent, closeBtn);
        cardsContainer.append(card);
    }
};