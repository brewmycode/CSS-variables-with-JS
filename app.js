const inputs = document.querySelectorAll(".controls input");

function handleChange() {
  const suffix = this.dataset.sizing || "";
  console.log(suffix);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => {
  input.addEventListener("change", handleChange);
  input.addEventListener("mousemove", handleChange);
});
