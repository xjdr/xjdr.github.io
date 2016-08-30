//xio
var xio = document.getElementById("xio");

xio.onmouseover = function () {
    xio.style.color = '#3C729D';
    xio.style.cursor = 'pointer';
};

xio.onmouseout = function () {
    xio.style.color = 'black'
};

xio.addEventListener('click', function () {
    window.location.href = 'https://github.com/xjdr/xio';
});


//chi
var chi = document.getElementById("chi");

chi.onmouseover = function () {
    chi.style.color = '#3C729D';
    chi.style.cursor = 'pointer';
};

chi.onmouseout = function () {
    chi.style.color = 'black'
};

chi.addEventListener('click', function () {
    window.location.href = 'https://github.com/xjdr/chicago';
});

