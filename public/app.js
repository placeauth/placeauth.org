(function () {
  "use strict";
  var config = window.PLACEAUTH_CONFIG || {};
  var links = document.querySelectorAll("[data-config-href]");
  links.forEach(function (el) {
    var key = el.getAttribute("data-config-href");
    if (config[key]) el.href = config[key];
  });
  document.querySelectorAll("[data-config-text]").forEach(function (el) {
    var key = el.getAttribute("data-config-text");
    if (config[key]) el.textContent = config[key];
  });
  document.querySelectorAll("[data-config-email]").forEach(function (el) {
    var key = el.getAttribute("data-config-email");
    if (config.emails && config.emails[key]) {
      el.textContent = config.emails[key];
      el.href = "mailto:" + config.emails[key];
    }
  });
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      });
    });
  }
  var header = document.querySelector(".site-header");
  if (header) {
    var syncHeader = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".family-card,.decision,.flow-node,.places-grid article,.status-grid div").forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }
})();
