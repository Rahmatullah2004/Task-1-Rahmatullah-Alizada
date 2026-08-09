document.addEventListener("DOMContentLoaded", () => {
  // MOBILE MENU TOGGLE
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    hamburger.classList.toggle("is-active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // PORTFOLIO FILTER
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const filter = btn.dataset.filter;

      portfolioCards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });

  // FAQ ACCORDION
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Close all items first (single-open accordion behaviour)
      accordionItems.forEach((i) => i.classList.remove("is-open"));

      // Re-open the clicked one if it wasn't already open
      if (!isOpen) {
        item.classList.add("is-open");
      }
    });
  });

  //  CONTACT FORM (front-end only demo)
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formSuccess.classList.add("is-visible");
      contactForm.reset();

      setTimeout(() => {
        formSuccess.classList.remove("is-visible");
      }, 4000);
    });
  }

  // HEADER SHADOW ON SCROLL
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.style.boxShadow =
      window.scrollY > 10 ? "0 2px 12px rgba(20,30,60,0.08)" : "none";
  });
});
