const reveals = document.querySelectorAll(".reveal");

function markRevealVisible(el) {
  el.classList.add("reveal-visible");
}

function revealIfInView(el) {
  const rect = el.getBoundingClientRect();
  const viewH = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < viewH * 0.92 && rect.bottom > 0) {
    markRevealVisible(el);
    return true;
  }
  return false;
}

const observer = new IntersectionObserver(
  (entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        markRevealVisible(entry.target);
        currentObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
);

reveals.forEach((item) => {
  if (!revealIfInView(item)) {
    observer.observe(item);
  }
});

let activeModalId = null;
let lastFocus = null;

function openCaseModal(id) {
  const modal = document.getElementById(`case-modal-${id}`);
  if (!modal) return;
  lastFocus = document.activeElement;
  activeModalId = id;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("case-modal-open");
  const closeBtn = modal.querySelector(".case-modal__close");
  if (closeBtn) closeBtn.focus();
}

function closeCaseModal() {
  if (!activeModalId) return;
  const modal = document.getElementById(`case-modal-${activeModalId}`);
  if (modal) {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("case-modal-open");
  activeModalId = null;
  if (lastFocus && typeof lastFocus.focus === "function") {
    lastFocus.focus();
  }
}

document.querySelectorAll("[data-open-case]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-open-case");
    if (id) openCaseModal(id);
  });
});

document.addEventListener("click", (e) => {
  const t = e.target;
  if (t && t.matches && t.matches("[data-close-case]")) {
    closeCaseModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCaseModal();
});
