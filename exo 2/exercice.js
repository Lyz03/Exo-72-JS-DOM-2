let div = document.getElementsByClassName('name-tag');

for (let i = 0; i < div.length; i++) {

    let text = document.createElement('span').innerText = 'Bonjour, je suis';
    div[i].prepend(text);
}










