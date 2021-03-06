const stars = () => {
  const listStars = document.querySelectorAll(".rating__star");

  const toggleStarActive = (oneStar) => {
    oneStar.classList.toggle("rating__star--active");
  };

  listStars.forEach((oneStar) => {
    oneStar.addEventListener("click", () => toggleStarActive(oneStar));
  });
};

stars();
