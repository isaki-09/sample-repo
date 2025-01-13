function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function handleVideoPopup(imageSelector) {
  const images = document.querySelectorAll(imageSelector);
  
  images.forEach(image => {
    const videoPopupId = image.getAttribute('data-video-popup');
    const videoPopup = document.getElementById(videoPopupId);

    image.addEventListener('mouseenter', (e) => {
      videoPopup.style.display = 'block';
      updateVideoPosition(e, videoPopup);
    });

    image.addEventListener('mousemove', (e) => updateVideoPosition(e, videoPopup));

    image.addEventListener('mouseleave', () => {
      videoPopup.style.display = 'none';
    });
  });
}

// Function to update the position of the video popup
function updateVideoPosition(e, videoPopup) {
  const offsetX = 5;
  const offsetY = 5;

  let top = e.clientY + offsetY;
  let left = e.clientX + offsetX;

  videoPopup.style.top = `${top}px`;
  videoPopup.style.left = `${left}px`;
}

// Call the function with the appropriate selector
handleVideoPopup('.hover-image');
