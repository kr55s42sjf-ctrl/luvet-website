
document.querySelector("#explore")
  .addEventListener("click", function () {
    document.querySelector("#collection")
      .scrollIntoView({ behavior: "smooth" });
  });
