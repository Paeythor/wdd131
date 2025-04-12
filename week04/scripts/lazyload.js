document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazy-img');
  
    const loadLazyImage = (image) => {
      const src = image.getAttribute('data-src');
      if (src) {
        image.src = src;
        image.classList.remove('lazy-img'); 
      }
    };
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadLazyImage(entry.target);
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 }); 
  
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  
    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
      const lastModified = new Date(document.lastModified);
      const formattedDate = lastModified.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      });
      lastModifiedElement.textContent = formattedDate;
    }
  });
  