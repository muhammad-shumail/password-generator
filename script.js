$(document).ready(function() {

    // Password generator function
    function generatePassword() {
      var length = parseInt($('#password-length').val());
      var uppercase = $('#uppercase').is(':checked');
      var lowercase = $('#lowercase').is(':checked');
      var numbers = $('#numbers').is(':checked');
      var symbols = $('#symbols').is(':checked');
      var chars = '';
      var password = '';
      if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
      if (numbers) chars += '0123456789';
      if (symbols) chars += '!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/~`';
      for (var i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return password;
    }

    // Generate password button click event
    $('#generate-password').click(function() {
      var password = generatePassword();
      $('#password').val(password);
    });

    // Copy password button click event
    $('#copy-password').click(function() {
      var password = $('#password').val();
      var input = $('<input>').val(password).appendTo('body').select();
      document.execCommand('copy');
      input.remove();
      alert('Password copied to clipboard!');
    });
    // Custom JavaScript code
  var slider = document.getElementById("slider");
  var output = document.getElementById("password-length");
  output.innerHTML = slider.value;


});


      $(document).ready(function() {
        // Set initial password length value
        var passwordLength = $('#password-length').val();
        $('#password-length').on('input', function() {
          // Get new password length value
          passwordLength = $(this).val();
          // Update slider color based on password length
          var sliderValue = $(this).val();
          var sliderColor = '#dc3545';
          if (sliderValue >= 33 && sliderValue < 66) {
            sliderColor = '#ffc107';
          } else if (sliderValue >= 66) {
            sliderColor = '#28a745';
          }
          $(this).css('background', 'linear-gradient(to right, ' + sliderColor + ' 0%, ' + sliderColor + ' ' + sliderValue + '%, #ddd ' + sliderValue + '%, #ddd 100%)');
          // Generate new password
          generatePassword();
        });
        // Generate password on button click
        $('#generate-btn').click(function() {
generatePassword();
});
// Copy password to clipboard on button click
$('#copy-btn').click(function() {
$('#password').select();
document.execCommand("copy");
});
// Function to generate a new password
function generatePassword() {
var charset = '';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = '!@#$%^&*()_+{}[];:<>,.?/~`-='; // Build character set based on selected options
      if ($('#lowercase').prop('checked')) {
        charset += lowercase;
      }
      if ($('#uppercase').prop('checked')) {
        charset += uppercase;
      }
      if ($('#numeric').prop('checked')) {
        charset += numeric;
      }
      if ($('#special').prop('checked')) {
        charset += special;
      }

      // Generate password
      var password = '';
      for (var i = 0; i < passwordLength; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }

      // Update password input
      $('#password').val(password);

      // Update password strength color
      if (passwordLength >= 8 && passwordLength <= 12) {
        $('#password').removeClass('medium strong').addClass('weak');
      } else if (passwordLength >= 13 && passwordLength <= 20) {
        $('#password').removeClass('weak strong').addClass('medium');
      } else if (passwordLength >= 21 && passwordLength <= 128) {
        $('#password').removeClass('weak medium').addClass('strong');
      }
    }
      });



      const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

function generatePassword() {
  // password generation logic
  let password = '';
  const length = document.getElementById('password-length').value;

  const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]\:;?><,./-='
  }

  let allowedChars = '';
  if (uppercaseEl.checked) {
    allowedChars += characters.uppercase;
  }
  if (lowercaseEl.checked) {
    allowedChars += characters.lowercase;
  }
  if (numbersEl.checked) {
    allowedChars += characters.numbers;
  }
  if (symbolsEl.checked) {
    allowedChars += characters.symbols;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  document.getElementById('password').value = password;
}

function updatePasswordLength() {
  const length = document.getElementById('password-length').value;
  document.getElementById('password-length-value').textContent = length;
}

// event listeners
document.getElementById('generate-password').addEventListener('change', generatePassword);
document.getElementById('copy-password').addEventListener('click', () => {
  const passwordEl = document.getElementById('password');
  passwordEl.select();
  document.execCommand('copy');
});

uppercaseEl.addEventListener('change', generatePassword);
lowercaseEl.addEventListener('change', generatePassword);
numbersEl.addEventListener('change', generatePassword);
symbolsEl.addEventListener('change', generatePassword);

document.getElementById('password-length').addEventListener('input', () => {
  updatePasswordLength();
  generatePassword();
});

updatePasswordLength();
generatePassword();


