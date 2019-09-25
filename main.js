const score = document.querySelector('.score'),
start = document.querySelector('.start'),
gameArea = document.querySelector('.gameArea'),
car = document.createElement('div');
car.classList.add('car');

start.addEventListener('click', startGame);  // прослушиватель событий
document.addEventListener('keydown', startRun);  // на один элемент можем навешать много обработчиков событий
document.addEventListener('keyup', stopRun);  // отпускаем кнопку

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};  // это объект, содержит свойства, хранит коллекцию различных значений

// для того чтоб останавливать игру, если это необходимо:
const setting = {
    start: false,
    score: 0,
    speed: 3    
};

function startGame(){
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car); // добавить в div с классом gamearea ребенка car, которого мы объявили в начале
    requestAnimationFrame(playGame); // в скобках ф-ция, которая должна быть анимирована
}

function playGame(){
    console.log('Play game!');
    if(setting.start){
        requestAnimationFrame(playGame); // рекурсия
    }    
}

function startRun(event){
    event.preventDefault();  // отменяет стандартное поведение браузера на события
    keys[event.key] = true;
}

function stopRun(event){
    event.preventDefault();
    keys[event.key] = false;
}

