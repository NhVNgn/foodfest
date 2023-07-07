let countries = document.querySelectorAll('#countries li');

countries.forEach(country => {
  country.addEventListener('click', () => {
    anime({
      targets: '#food-truck',
      left: '25%',
      easing: 'easeInOutSine',
      duration: 1000
    });

  });
});