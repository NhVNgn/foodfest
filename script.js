let countries = document.querySelectorAll('#countries li');

countries.forEach(country => {
  country.addEventListener('click', () => {
    window.location.href = 'columbia.html'; // This navigates to the animation page when a country is clicked
  });
});