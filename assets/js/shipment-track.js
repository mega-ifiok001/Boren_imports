// Modal functionality for Track your Shipment
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('track-modal');
  const backdrop = document.getElementById('track-modal-backdrop');
  const openBtn = document.getElementById('track-shipment-btn');
  const closeBtn = document.getElementById('close-modal');
  const form = document.getElementById('track-form');
  const input = document.getElementById('tracking-number');

  function openModal() {
    modal.classList.add('active');
    backdrop.classList.add('active');
    setTimeout(() => input.focus(), 200);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }
  function closeModal() {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openModal();
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && modal.classList.contains('active')) closeModal();
  });

  // Optional: handle track form submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const trackingNum = input.value.trim();
    if(trackingNum) {
      // Replace the alert with your tracking logic or redirect
      alert("Tracking number: " + trackingNum);
      closeModal();
    }
  });
});