document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.error-page h1, .error-page p, .error-page a');
  
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`;
    });
  });
  