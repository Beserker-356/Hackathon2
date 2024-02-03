let text = document.querySelector("#text");
let post = document.querySelector("#post");
let cardCont = document.querySelector("#card-container");

post.addEventListener("click", () => {
  if (text.value != "") {
    cardGenerator(text.value);
  }
  text.value = "";
});

function cardGenerator(text) {
  let card = document.createElement("div");
  card.innerHTML = `<div class="card">
              <div class="feed">
                <div class="profile"></div>
                <div class="post">
                  <div class="post-top">
                    <div class="post-id">
                      Joanne Graham <span>@joannegraham123</span>
                    </div>
                    <div class="tools">
                        <div class="edit"></div>
                        <div class="delete"></div>
                    </div>
                  </div>
                  <div class="post-bottom">
                    <div class="post-content" contentEditable = "false">
                      ${text}
                    </div>
                    <div class="post-likes">
                        <div class="post-com"></div>
                        <div class="unlike"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="com">
                <div class="com-top">
                  <div class="profile"></div>
                  <textarea
                    class="com-text"
                    placeholder="Type your thoughts here....."
                  ></textarea>
                </div>
                <div class="com-bottom">
                  <div class="com-char">0/100</div>
                  <div class="cancel-comment">Cancel</div>
                  <div class="button">Comment</div>
                </div>
              </div>
            </div>`;
  cardCont.appendChild(card);

  let like = cardCont.querySelector(".post-likes").lastElementChild;
  like.addEventListener("click", function () {
    if (like.classList.contains("unlike")) {
      like.classList.remove("unlike");
      like.classList.add("like");
    } else {
      like.classList.remove("like");
      like.classList.add("unlike");
    }
  });

  let edit = cardCont.querySelector(".edit");
  let com_text = cardCont.querySelector(".com-text");
  edit.addEventListener("click", function () {
    console.log("sljdcvh")
    if (com_text.contentEditable == "false") {
        com_text.contentEditable = "true";
    } else {
        com_text.contentEditable = "false";
    }
  });

  let comment = cardCont.querySelector(".post-likes").firstElementChild;
  let com = cardCont.querySelector(".com");
  comment.addEventListener("click", function () {
    console.log(com);
    if (com.style.display == "none") {
      com.style.display = "flex";
    } else {
      com.style.display = "none";
    }
  });
}
