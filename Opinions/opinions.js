var ides = document.getElementById("ides");

ides.onmouseover = function () {
    ides.style.color = '#3C729D';
    ides.style.cursor = 'pointer';
};

ides.onmouseout = function () {
    ides.style.color = 'black'
};

ides.addEventListener('click', function () {
    window.location.href = 'IDEs.html';
});

var forgot2code = document.getElementById("forgot2code");

forgot2code.onmouseover = function () {
    forgot2code.style.color = '#3C729D';
    forgot2code.style.cursor = 'pointer';
}; 

forgot2code.onmouseout = function () {
    forgot2code.style.color = 'black'
};

forgot2code.addEventListener('click', function () {
    window.location.href = 'forgot2code.html';
});