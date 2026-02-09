// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Form handling (demo)
const form = document.getElementById('leadForm');
const successBox = document.getElementById('successBox');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation
  const fd = new FormData(form);
  const phone = (fd.get('phone') || '').toString().trim();

  if (!/^\d{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  successBox.classList.remove('hidden');
  form.querySelector('button[type="submit"]').textContent = 'Submitted ✓';
  form.querySelector('button[type="submit"]').disabled = true;
  form.querySelector('button[type="submit"]').classList.add('opacity-70', 'cursor-not-allowed');

  // Optional: scroll to success
  successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Log payload (demo)
  console.log('Lead:', Object.fromEntries(fd));
});
