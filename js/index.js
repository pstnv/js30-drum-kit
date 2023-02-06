function playSound (e) { // из события keydown определяем код нажатой клавиши (свойство keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // значение keyCode есть атрибут аудио, по нему находим определенное аудио
    if (!audio) return; // если аудио не найдено, прерываем выполнение функции
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // значение keyCode есть атрибут div.key, по нему находим опр. div.key

    key.classList.add('playing'); // добавляем класс playing (подсвечиваем кнопку)
    audio.currentTime = 0; // обнуляем время аудио, чтобы стартовало с самого начала при каждом нажатии
    audio.play(); // запускаем аудио
};

function removeTransition (e) { // по окончании "анимации" (transition) снимаем класс playing
    if (e.propertyName !== 'transform') return; // если такого свойства нет, останавливаем выполнение функции
    this.classList.remove('playing'); // снимаем класс playing (подсветку кнопки)
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // при событии - закончился transition вызываем функцию removeTransition
window.addEventListener('keydown', playSound); // при событии keydown вызываем функцию playSound