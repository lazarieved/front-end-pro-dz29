function makeRequest(url) {
    return fetch(url).then(res => res.json())
}

makeRequest('https://dog.ceo/api/breeds/list/all')
    .then(response => createList(response.message))

function createList(dogs){
    const fragment = document.createDocumentFragment();
    const li = document.createElement('li');

    for(dog in dogs){
        var clone = li.cloneNode();
        clone.innerText = dog;
        fragment.appendChild(clone);
        clickHandler(clone, dog)
    }
    const ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(fragment);
}

function clickHandler(li, name){
    li.onclick = () => makeRequest(`https://dog.ceo/api/breed/${name}/images/random`)
        .then(response => generateImage(response.message))
}

function generateImage(src){
    const imgExist = document.querySelector('#images img')
    if (!!imgExist){
        imgExist.src = src;
        return;
    }
    const img = document.createElement('img');
    img.src = src;

    const container = document.getElementById('images');
    container.appendChild(img);
}