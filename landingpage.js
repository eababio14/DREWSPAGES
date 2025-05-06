document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const navLinks = document.querySelectorAll('.tabs a');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();

    navLinks.forEach(link => {
      const match = link.textContent.toLowerCase().includes(query);
      link.style.display = match ? 'inline-block' : 'none';
    });
  });
});

