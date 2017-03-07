var text = document.getElementById("text");

text.innerHTML = "text";

text.onmouseover = function() {
    text.style.size = 32;
};

text.onmouseout = function() {
    text.style.size = 16;
};