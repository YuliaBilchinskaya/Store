export default function addCart() {
    const cards = document.querySelectorAll('.goods .card'),
          cartWrapper = document.querySelector('.cart-wrapper'),
          cartEmpty = document.getElementById('cart-empty'),
          countGoods = document.querySelector('.counter');

    cards.forEach((card) => {
        const bth = card.querySelector('button');

        bth.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            cartEmpty.remove();
            showData();

            const removeBth = cardClone.querySelector('.btn');
            removeBth.textContent = 'Удалить из корзины';
            removeBth.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'),
              cardsPrise = cartWrapper.querySelectorAll('.card-price'),
              cardTotal = document.querySelector('.cart-total span');

        countGoods.textContent = cardsCart.length;
        
        let sum = 0;
        cardsPrise.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cardTotal.textContent = sum;

        if (cardsCart.length === 0) {
            cartWrapper.appendChild(cartEmpty);
        } else {
            cartEmpty.remove();
        }
    }
}