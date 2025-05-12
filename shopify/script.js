// script.js
// Image Gallery Functionality
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    // Change the main image source to the clicked thumbnail's source
    mainImage.src = thumb.src;
    
    // Remove 'active' class from all thumbnails and add to the clicked one
    thumbnails.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// Size Chart Modal Functionality
const sizeChartBtn = document.getElementById('sizeChartBtn');
const sizeChartModal = document.getElementById('sizeChartModal');
const closeSizeChart = sizeChartModal.querySelector('.close');

sizeChartBtn.addEventListener('click', () => {
  sizeChartModal.style.display = 'block';
});

closeSizeChart.addEventListener('click', () => {
  sizeChartModal.style.display = 'none';
});

// Compare Colors Modal Functionality
const compareColorsBtn = document.getElementById('compareColorsBtn');
const compareColorsModal = document.getElementById('compareColorsModal');
const closeCompareColors = compareColorsModal.querySelector('.close');

compareColorsBtn.addEventListener('click', () => {
  compareColorsModal.style.display = 'block';
});

closeCompareColors.addEventListener('click', () => {
  compareColorsModal.style.display = 'none';
});

// Tab Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to the clicked button and corresponding content
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Close modals when clicking outside of them
window.addEventListener('click', (event) => {
  if (event.target === sizeChartModal) {
    sizeChartModal.style.display = 'none';
  }
  if (event.target === compareColorsModal) {
    compareColorsModal.style.display = 'none';
  }
});