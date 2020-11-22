const $heading1 = document.querySelector('#post-1');
const $blog1 = document.querySelector('#post-text-1');

const $heading2 = document.querySelector('#post-2');
const $blog2 = document.querySelector('#post-text-2');

const $heading3 = document.querySelector('#post-3');
const $blog3 = document.querySelector('#post-text-3');

const $heading4 = document.querySelector('#post-4');
const $blog4 = document.querySelector('#post-text-4');

const apiURL = 'https://jsonplaceholder.typicode.com/posts/';

let posts = [];

let index = 4;

fetch(apiURL)
    .then((response) => response.json())
    .then(apiPosts => {
        posts = apiPosts;
    })
    .then(() => {
        populatePost(posts[0], $heading1, $blog1);
        populatePost(posts[1], $heading2, $blog2);
        populatePost(posts[2], $heading3, $blog3);
        populatePost(posts[3], $heading4, $blog4);
    })

const populatePost = (post, $heading, $blog) => {
    $heading.innerHTML = "";
    let $h1 = document.createElement('h1');
    $h1.className = 'post-title';
    $h1.innerHTML = post.title;
    $heading.appendChild($h1);
    $blog.innerHTML = "";
    let $p = document.createElement('p');
    $p.className = 'post-body';
    $p.innerHTML = post.body;
    $blog.appendChild($p);
};

document
    .querySelector('#see-more-button')
    .addEventListener('click', () => {
        populatePost(posts[index], $heading1, $blog1);
        populatePost(posts[index + 1], $heading2, $blog2);
        populatePost(posts[index + 2], $heading3, $blog3);
        populatePost(posts[index + 3], $heading4, $blog4);
        index += 4;
        if(index > 95) {
            index = 0;
        };
    });
