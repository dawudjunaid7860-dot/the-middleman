document.querySelectorAll('[data-service]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.getElementById('fService').value = btn.getAttribute('data-service');
    document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var subject = encodeURIComponent('New booking: ' + document.getElementById('fService').value);
  var body = encodeURIComponent(
    'Name: ' + document.getElementById('fName').value + '\n' +
    'Phone: ' + document.getElementById('fPhone').value + '\n' +
    'Service: ' + document.getElementById('fService').value + '\n' +
    'Address: ' + document.getElementById('fAddress').value + '\n' +
    'Preferred date: ' + document.getElementById('fDate').value + '\n' +
    'Job details: ' + document.getElementById('fDetails').value
  );
  window.location.href = 'mailto:dawudjunaidwork@gmail.com?subject=' + subject + '&body=' + body;
  document.getElementById('formNote').hidden = false;
});
