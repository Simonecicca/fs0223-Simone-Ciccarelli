let name = document.getElementById('text')
let save = document.getElementById('save')
let cancel = document.getElementById('cancel')

let named = document.getElementById('named')
named.innerHTML = localStorage.getItem('name')

save.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem('name', name.value)
    named.innerHTML = name.value
});

cancel.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('name')
});



let second = document.getElementById('counter');
sessionStorage.setItem('second', 0);

setInterval(function() {
    let timer = sessionStorage.getItem('second');
    timer++;
    sessionStorage.setItem('second', timer);
    second.innerHTML = sessionStorage.getItem('second')
}, 1000
);

