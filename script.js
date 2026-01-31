
const calcBtn = document.getElementById("calc");
const resultBox = document.getElementById("result");
const bgSelect = document.getElementById("background");
const bgPreview = document.getElementById("bgPreview");

bgSelect.addEventListener("change", () => {
  const img = bgSelect.options[bgSelect.selectedIndex].dataset.img;
  bgPreview.src = img;
});

calcBtn.addEventListener("click", () => {
  const G = parseFloat(document.getElementById("guide").value);
  const size = document.getElementById("world").value;
  const jungle = document.querySelector('input[name="jungle"]:checked').value;

  let shimmerX = 0;
  if (jungle === "left") {
    shimmerX = size === "small" ? 3800 - ((3800 - 3276) * G)
      : size === "medium" ? 6000 - ((6000 - 4992) * G)
      : 8000 - ((8000 - 6552) * G);
  } else {
    shimmerX = size === "small" ? 3276 + ((3800 - 3276) * G)
      : size === "medium" ? 4992 + ((6000 - 4992) * G)
      : 6552 + ((8000 - 6552) * G);
  }

  const [min, max] = bgSelect.value.split("-").map(Number);
  const depth = ((min + max) / 2).toFixed(2);

  resultBox.innerHTML = `
    <p><b>X-Coordinate:</b> ${shimmerX.toFixed(2)}</p>
    <p><b>Depth:</b> ${depth} (0 = surface, 1 = underworld)</p>
  `;
});
   