$(function () {
    //Плагин Select2
    $("#idSelect").select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Выберите тип системы",
        maximumSelectionLength: 2,
        language: "ru"
    });

});

//Вывод значения input[type=range]
function rangeValue() {
    let range = document.getElementById('idRange');
    let rangeValue = document.getElementById('idRangeValue');
    rangeValue.innerHTML = range.value;
}

//Выбор файла в input[type=file]
let inputs = document.querySelectorAll('.order-form__file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length > 1)
            countFiles = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            countFiles = e.target.value.split('\\').pop();

        if (countFiles)
            label.querySelector('span').innerHTML = countFiles;
        else
            label.innerHTML = labelVal;
    });

});

//Анимация при скролле
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('anim');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('anim');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}