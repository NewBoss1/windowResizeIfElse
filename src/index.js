function backgroundRisize() {
  const windowSize = window.innerWidth;
  if (windowSize <= 500) {
    document.body.style.backgroundColor = "green";
  } else if (windowSize >= 500 && windowSize <= 900) {
    document.body.style.backgroundColor = "orange";
  } else {
    document.body.style.backgroundColor = "aqua";
  }
}
window.addEventListener("resize", backgroundRisize);
