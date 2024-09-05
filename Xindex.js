function startCountdown() {
  var countdownElement = document.querySelector('.countdown');
  var redirectButton = document.getElementById('redirectButton');
  var seconds = 6;

  var countdownInterval = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      countdownElement.textContent = seconds;
    } else {
      clearInterval(countdownInterval);
      countdownElement.textContent = '';
      redirectButton.textContent = 'Я хочу перейти на сайт';
      redirectButton.disabled = false;
      redirectButton.addEventListener('click', function() {
        window.location.href = 'main.html';
      });
    }
  }, 1000);
}

window.onload = function() {
  startCountdown();
};