function showMessage() {
  alert("Thanks for clicking the button!");
}


  const stars = document.querySelectorAll(".star-rating i");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      updateStars(index);
    });
  });

  function updateStars(index) {
    stars.forEach((star, i) => {
      if (i <= index) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }

  
  
