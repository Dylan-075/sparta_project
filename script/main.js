const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,

  breakpoints: {
    768: {
      slidesPerView: 2
    }, 
    1200: {
      slidesPerView: 3
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('API_URL_ЗДЕСЬ', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Заявка отправлена!');
      form.reset();
    } else {
      alert('Ошибка отправки');
    }
  } catch (error) {
    alert('Ошибка сети');
  }
});



// const links = document.querySelectorAll('a[href^="#"]');

// links.forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();

//     const targetId = this.getAttribute('href');
//     const target = document.querySelector(targetId);

//     const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
//     const startPosition = window.pageYOffset;
//     const distance = targetPosition - startPosition;

//     const duration = 3000; // ⬅ скорость (в миллисекундах)

//     let start = null;

//     function animation(currentTime) {
//       if (!start) start = currentTime;
//       const progress = currentTime - start;

//       const ease = progress / duration;
//       window.scrollTo(0, startPosition + distance * ease);

//       if (progress < duration) {
//         requestAnimationFrame(animation);
//       }
//     }

//     requestAnimationFrame(animation);
//   });
// });
