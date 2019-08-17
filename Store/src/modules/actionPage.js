import filter from './filter';

export default function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
          discountCheckbox = document.getElementById('discount-checkbox'),
          min = document.getElementById('min'),
          max = document.getElementById('max'),
          search = document.querySelector('.search-wrapper_input'),
          searchBth = document.querySelector('.search-btn');

    discountCheckbox.addEventListener('click', filter);
    max.addEventListener('change', filter);
    min.addEventListener('change', filter);

    

    //поиск
    searchBth.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) { //test (true/false)
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });
}