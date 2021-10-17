window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};

gsap.from('.atasan', { duration: 1, y: -100, ease: 'power4.inOut', opacity: 0, delay: 1.2 });
gsap.from('.foto', { duration: 2, x: -500, ease: 'power4.inOut', opacity: 0, delay: 1.2 });
gsap.from('.kata', { duration: 2, x: 500, ease: 'power4.inOut', opacity: 0, delay: 1.2 });
gsap.from('.jumbotron', { duration: 1, x: -500, ease: 'power1.out', opacity: 0, delay: 1.5 });
gsap.from('.logo', { duration: 1, x: -500, ease: 'power4.inOut', opacity: 0, delay: 1.2 });
gsap.from('.desain', { duration: 1, x: 500, ease: 'power4.inOut', opacity: 0, delay: 1.2 });
gsap.from('.galery', { duration: 1, x: 1000, ease: 'power4.inOut', opacity: 0, delay: 1.2 });
gsap.from('.kiri', { duration: 1, x: 500, ease: 'power4.inOut', opacity: 0, delay: 1.2 });

gsap.from('.row', { duration: 1, x: -500, ease: 'power4.out', opacity: 0, delay: 1.5 });
