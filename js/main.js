const post = document.querySelector(".text");
const comment = document.querySelector(".comment-input");
const postButton = document.querySelector("#comment-post");
let commentData = "";

comment.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    commentData = event.target.value;
    addPost();
    event.target.value = "";
  }
});

postButton.addEventListener("click", () => {
  commentData = comment.value;
  if (commentData) {
    addPost();
  }
});

const addPost = () => {
  let div = document.createElement("div");
  let span = document.createElement("span");
  let backUpData = "";

  span.innerHTML = commentData;
  div.appendChild(span);
  post.appendChild(div);
  div.addEventListener("click", () => {
    div.remove();
    backUpData = post;
  });
};
