let posts = [];

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');


newPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();

    addPost(postFromUser);

    renderPosts();
});

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text
    };
}

function addPost({title, text}) {
    posts.push({
        title: title,
        text: text
    });
}

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post=> {
        postsHTML += `
        <div class='post'>
            <p class='post__title'> ${post.title}</p>
            <p class='post__text'> ${post.text}</p>
        </div>
    `;

    }); 
    
    postsNode.innerHTML = postsHTML;
}