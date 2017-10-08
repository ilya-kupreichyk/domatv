/*date*/

var date = document.getElementById('date');

var now = new Date();
date.innerHTML = now.toLocaleDateString();


/*carousel*/

var width = 630,
    count = 2,
    list = document.getElementById('gallery'),
    listElems = list.querySelectorAll('article'),
    position = 0;

document.getElementById('left').onclick = function () {
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
};

document.getElementById('right').onclick = function () {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';

};

/*form*/

var but = document.getElementById('send'),
    f = document.forms[0],
    text = f.elements['text'],
    email = f.elements['email'],
    isEmpty = false;

but.addEventListener('click', butt);

function butt() {
    var params = text.value + '&' + email.value;
    if (text.value == '' || email.value == '') {
        alert('Заполни все поля')
    }
    else {
        isEmpty = true;

    }
    if (isEmpty) {
        ajaxPost(params);
    }
}

function ajaxPost(params) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            show('flex');
        }
    };
    xhr.open('POST', 'app.php');
    xhr.send(params); // (1)


}

/*popup*/

document.getElementById('popup').addEventListener('click', closed);

function closed() {
    var state = 'none';
    document.getElementById('popup').style.display = state;
    document.getElementById('centre').style.display = state;
}

function show(state) {
    document.getElementById('popup').style.display = state;
    document.getElementById('centre').style.display = state;
}




