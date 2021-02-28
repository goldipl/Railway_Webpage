// Source path: 
// https://www.youtube.com/watch?v=PuOGBacTYAY
// @author Dev Ed

const texts = ['profesjonalistami',
    'firmą z tradycjami',
    'polską firmą'
];
let counter = 0;
let id = 0;
let actText = "";
let symbol = "";

(function type() {
    if (counter === texts.length) {
        counter = 0;
    }
    actText = texts[counter];
    symbol = actText.slice(0, ++id);

    document.querySelector(".texting").textContent = symbol;
    if (symbol.length === actText.length) {
        counter++;
        id = 0;
    }
    setTimeout(type, 200);
})();