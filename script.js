const $form = $('form');
const $formName = $('#userName');
const $formEmail = $('#userEmail');
const $formMessage = $('#userMessage');
const $formSubmitMessage = $('.formSubmitMessage')


//initialize animate on scroll
AOS.init();

// submit contact form to formspree
const submitForm = () => {
  $.ajax({
    url: 'https://formspree.io/mvobdppp',
    method: 'POST',
    data: {
      name: $formName.val(),
      email: $formEmail.val(),
      message: $formMessage.val(),
    },
    dataType: 'json'
  }).then(() => {
    setTimeout(() => {
      $form[0].reset();
      $formSubmitMessage.fadeOut();
    }, 2000)
    $formSubmitMessage.show();
  })
}

$form.on('submit', (e) => {
  e.preventDefault();
  submitForm();
})