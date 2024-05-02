document.addEventListener("DOMContentLoaded", function() {
  var currentPageUrl = window.location.href;

  var menuLinks = document.querySelectorAll(".menu-area nav ul#nav li a");
  menuLinks.forEach(function(link) {
      if (link.href === currentPageUrl) {
          link.classList.add("active");
      } else {
          link.classList.remove("active");
      }
  });
});


  function goToStep(step) {
    var currentStep = document.querySelector('.step-content.active');
    var nextStep = document.getElementById('step' + step);

    if (currentStep && nextStep) {
      currentStep.classList.remove('active');
      nextStep.classList.add('active');
      updateProgress(step);
    }
  }

  function updateProgress(step) {
    var progress = (step - 1) / 2 * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
    document.querySelector('.progress-bar').setAttribute('aria-valuenow', progress);
    
    var circles = document.querySelectorAll('.step-circle');
    var lines = document.querySelectorAll('.step-line');
    
    circles.forEach(function(circle, index) {
      if (index < step) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
    
    lines.forEach(function(line, index) {
      if (index < step - 1) {
        line.classList.add('active');
      } else {
        line.classList.remove('active');
      }
    });
  }
