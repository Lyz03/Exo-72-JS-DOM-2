let div = document.getElementsByClassName('name-tag');

for (let i = 0; i < div.length; i++) {
    let text = document.createElement('p').innerText = 'HELLO WORLD !';
    div[i].prepend(text);
}









