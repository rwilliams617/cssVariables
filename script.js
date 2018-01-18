const inputs = document.querySelectorAll('.controls input');

function controlsUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

//   // console.log(suffix);
//   // console.log(this.name);
//   // console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', controlsUpdate));
inputs.forEach(input => input.addEventListener('mousemove', controlsUpdate));
