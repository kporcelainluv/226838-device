// modal open-close

const open_modal = document.getElementById("modal-contaxt-us-button");
const feedback_modal = document.querySelector(".modal-feedback");
const modal_close = document.querySelector(".modal-close");
const form = document.querySelector(".feedback-form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("input-text");
const popup = document.querySelector(".modal-feedback-content");


if (open_modal) {
    open_modal.addEventListener("click", (event) => {
        event.preventDefault();
        feedback_modal.classList.toggle("hidden");
    })
    modal_close.addEventListener("click", () => {
        feedback_modal.classList.toggle("hidden");
        popup.classList.remove("modal-error");
    })
}

form.addEventListener("submit", function(evt) {
    if (!name.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    }
});


// modal image
modal_window_map = document.querySelector(".modal-map");
contacts_image = document.querySelector(".image-in-modal");
modal_map_close = document.querySelector(".modal-map-close");

if (contacts_image) {
    contacts_image.addEventListener("click", (event) => {
        event.preventDefault();
        modal_window_map.classList.toggle("hidden");
    })
    modal_map_close.addEventListener("click", () => modal_window_map.classList.toggle("hidden"))
}




// slider controllers

const sliderSwitches = document.querySelectorAll(".slides-btn")
const slides = document.querySelectorAll(".featured-slides .slide")

const updateClasses = (list, slideIndexToDisplay) => {
    list.forEach((slide, slideIndex) => {
        if (slideIndex === slideIndexToDisplay) {
            slide.classList.add("current");
        } else {
            slide.classList.remove("current");
        };
    })
}

sliderSwitches.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateClasses(slides, index);
        updateClasses(sliderSwitches, index)
    });
});

// advances slider
const advances = document.querySelectorAll(".device-button-advances")
const advancesSlides = document.querySelectorAll(".services-description-slide")

const updateSlider = (list, slideIndexToDisplay) => {
    list.forEach((slide, slideIndex) => {
        if (slideIndex === slideIndexToDisplay) {
            slide.classList.add("advances-current");
        } else {
            slide.classList.remove("advances-current");
        };
    })
}

advances.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateSlider(advances, index);
        updateSlider(advancesSlides, index)
    });
});