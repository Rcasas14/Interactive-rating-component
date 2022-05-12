const selectedNumber = document.querySelector('.selectedNum');
const button = document.querySelector('.button');
const front = document.querySelector('.front');
const overlay = document.querySelector('.overlay');

$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    let newValue = this.innerText;
    selectedNumber.textContent = newValue;

});

button.addEventListener('click', () => {
    if(front.classList.contains('d-none')){
        front.classList.remove('d-none');
        overlay.classList.add('d-none');

    } else {
        front.classList.add('d-none');
        overlay.classList.remove('d-none');
    }
})