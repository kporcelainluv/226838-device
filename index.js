// modal open-close

const open_modal = document.getElementById("modal-contaxt-us-button");
const feedback_modal = document.querySelector(".modal-feedback");
const modal_close = document.querySelector(".modal-close")

open_modal.addEventListener('click', () => feedback_modal.classList.toggle("hidden"))
modal_close.addEventListener('click', () => feedback_modal.classList.toggle("hidden"))

// modal image
modal_window_map = document.querySelector(".modal-map")
contacts_image = document.querySelector(".image-in-modal")
modal_map_close = document.querySelector(".modal-map-close")

contacts_image.addEventListener("click", () => modal_window_map.classList.toggle("hidden"))
modal_map_close.addEventListener("click", () => modal_window_map.classList.toggle("hidden"))


// slider controllers

const sliderSwitches = document.querySelectorAll(".slides-btn")
const slides = document.querySelectorAll(".featured-slides .slide")

const updateClasses = (list, slideIndexToDisplay) => {
    list.forEach((slide, slideIndex) => {
        // if (slideIndex === slideIndexToDisplay) {
        //     slide.classList.add("current");
        // } else {
        //     slide.classList.remove("current");

        // }
        if (slideIndex === slideIndexToDisplay) {
            slide.classList.add("current");
            slide.classList.remove("hidden")
            list.forEach((slide, slideIndex) => {
                if (slideIndex != slideIndexToDisplay) {
                    slide.classList.add("hidden");
                }
            });

        } else {

            slide.classList.remove("current");

        }
    })
}
const updateSwitcher = (list, switchIndexToDisplay) => {
    list.forEach((switcher, switchIndex) => {
        if (switchIndex === switchIndexToDisplay) {
            switcher.classList.add("switch-current");
        } else {
            switcher.classList.remove("switch-current");

        }
    });
}

sliderSwitches.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateClasses(slides, index);
        updateSwitcher(sliderSwitches, index)
    });
})