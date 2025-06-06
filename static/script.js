document.querySelector('.sidebar input').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  document.querySelectorAll('.sidebar ul li').forEach(li => {
    if (li.textContent.toLowerCase().includes(searchValue)) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
});
