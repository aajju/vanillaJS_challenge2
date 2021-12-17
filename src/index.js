// let intFrameWidth = window.innerWidth;
const body = document.querySelector("body");

function handleWindowResize() {
  const intFrameWidth = window.innerWidth;

  const wide = "wide";
  const mid = "mid";
  const narrow = "narrow";

  if (intFrameWidth > 800) {
    if (body.classList.contains(mid)) {
      body.classList.remove(mid);
    } else if (body.classList.contains(narrow)) {
      body.classList.remove(narrow);
    }
    body.classList.add(wide);
  } else if (intFrameWidth > 600) {
    if (body.classList.contains(wide)) {
      body.classList.remove(wide);
    } else if (body.classList.contains(narrow)) {
      body.classList.remove(narrow);
    }
    body.classList.add(mid);
  } else {
    if (body.classList.contains(mid)) {
      body.classList.remove(mid);
    } else if (body.classList.contains(wide)) {
      body.classList.remove(wide);
    }
    body.classList.add(narrow);
  }

  console.log(intFrameWidth);
}

window.addEventListener("resize", handleWindowResize);
