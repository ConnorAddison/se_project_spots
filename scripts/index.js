let initialCard0 = {
  name: "An Aerial View of a Lush Green Forest - Author Unlisted",
  link: "https://plus.unsplash.com/premium_photo-1688072514847-73bacc343aab?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

let initialCard1 = {
  name: "A Trail in the Woods With Lots of Trees - Tara-mae Miller",
  link: "https://images.unsplash.com/photo-1731947463347-a6b36e97fe9d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

let initialCard2 = {
  name: "A Tent is Lit Up at Night in the Woods - Master Unknown",
  link: "https://images.unsplash.com/photo-1725603080015-7d16a86c45d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

let initialCard3 = {
  name: "Sea of Manazuru - Ryo Yoshitake",
  link: "https://images.unsplash.com/photo-1512828539328-39f1b5a8bf54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

let initialCard4 = {
  name: "Oregon :) - Arturo Rodriguez",
  link: "https://images.unsplash.com/photo-1632297174075-88bf9f2ae509?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

let initialCard5 = {
  name: "Bridge Over Waterfalls - Ravi Pinisetti",
  link: "https://images.unsplash.com/photo-1487734092093-e5b02908580e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const initialCards = [
  "initialCard0",
  "initialCard1",
  "initialCard2",
  "initialCard3",
  "initialCard4",
  "initialCard5",
];

// edit profile

const profileEditButton = document.querySelector(".profile__edit-button");

const editProfileModal = document.querySelector("#edit-profile-modal");

function openModal() {
  editProfileModal.classList.add("modal_is-opened");
}

profileEditButton.addEventListener("click", openModal);

const editModalCloseButton = document.querySelector(".modal__close-button");

function closeModal() {
  editProfileModal.classList.remove("modal_is-opened");
}

editModalCloseButton.addEventListener("click", closeModal);

// new post

const newPostButton = document.querySelector(".profile__new-post-button");

const newPostModal = document.querySelector("#new-post-modal");

function openNewPostModal() {
  newPostModal.classList.add("modal_is-opened");
}

newPostButton.addEventListener("click", openNewPostModal);

// new post closing

const newPostModalCloseButton = newPostModal.querySelector(
  ".modal__close-button"
);

function closeNewPostModal() {
  newPostModal.classList.remove("modal_is-opened");
}

newPostModalCloseButton.addEventListener("click", closeNewPostModal);
