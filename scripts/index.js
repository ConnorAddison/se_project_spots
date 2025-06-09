const initialCards = [
  {
    name: "An Aerial View of a Lush Green Forest - Author Unlisted",
    link: "https://plus.unsplash.com/premium_photo-1688072514847-73bacc343aab?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "A Trail in the Woods With Lots of Trees - Tara-mae Miller",
    link: "https://images.unsplash.com/photo-1731947463347-a6b36e97fe9d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "A Tent is Lit Up at Night in the Woods - Master Unknown",
    link: "https://images.unsplash.com/photo-1725603080015-7d16a86c45d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sea of Manazuru - Ryo Yoshitake",
    link: "https://images.unsplash.com/photo-1512828539328-39f1b5a8bf54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Oregon :) - Arturo Rodriguez",
    link: "https://images.unsplash.com/photo-1632297174075-88bf9f2ae509?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bridge Over Waterfalls - Ravi Pinisetti",
    link: "https://images.unsplash.com/photo-1487734092093-e5b02908580e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// open and close modal functions

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

const profileEditButton = document.querySelector(".profile__edit-button");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

const newPostButton = document.querySelector(".profile__new-post-button");
const newPostModal = document.querySelector("#new-post-modal");

// function openEditProfileModal() {
//   editProfileNameInput.value = profileNameElement.textContent;
//   editProfileDescriptionInput.value = profileDescriptionElement.textContent;
//   editProfileModal.classList.add("modal_is-opened");
// }

profileEditButton.addEventListener("click", function () {
  openModal(editProfileModal);
});

const editModalCloseButton = document.querySelector(".modal__close-button");

// function closeEditProfileModal() {
//   editProfileModal.classList.remove("modal_is-opened");
// }

editModalCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// function openNewPostModal() {
//   newPostModal.classList.add("modal_is-opened");
// }

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

const newPostModalCloseButton = newPostModal.querySelector(
  ".modal__close-button"
);

// function closeNewPostModal() {
//   newPostModal.classList.remove("modal_is-opened");
// }

newPostModalCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

const addCardFormElement = newPostModal.querySelector(".modal__form");
const linkInput = newPostModal.querySelector("#image-link");
const descriptionInput = newPostModal.querySelector("#caption");

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(linkInput.value);
  console.log(descriptionInput.value);
  closeModal(newPostModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (card, index) {
  console.log(card.name);
});
