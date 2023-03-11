'use strict';

{
  // Intersection Observer API

  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
        toTop.classList.remove('clicked');
      }
    });
  }

  const header = document.querySelector('header');
  const toTop = document.getElementById('to_top');

  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.2,
  });


  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    toTop.classList.add('clicked');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}