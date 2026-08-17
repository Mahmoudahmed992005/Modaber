document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");

  if (!sidebar || !menuToggle) return;

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("is-open");
  });
  sidebar.addEventListener("click", (e) => {
    if (e.target === sidebar) sidebar.classList.remove("is-open");
  });
  document.addEventListener("click", (e) => {
    const isMobile = window.innerWidth <= 1024;
    const clickedOutside =
      !sidebar.contains(e.target) &&
      e.target !== menuToggle &&
      !menuToggle.contains(e.target);

    if (isMobile && sidebar.classList.contains("is-open") && clickedOutside) {
      sidebar.classList.remove("is-open");
    }
  });
});
