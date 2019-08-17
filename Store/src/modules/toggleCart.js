export default function toggleCart() {
    const bthCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');
    const closeBth = document.querySelector('.cart-close');

    bthCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeBth.addEventListener('click', () => {
        modalCart.style.display = 'none';
        document.body.style.overflow = '';
    });
}