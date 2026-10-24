var CUSTOM_VALUE = 'Something else (custom service)';

function updateCustomVisibility() {
  var select = document.getElementById('fService');
  var wrap = document.getElementById('customServiceWrap');
  var input = document.getElementById('fCustomService');
  var isCustom = select.value === CUSTOM_VALUE;
  wrap.hidden = !isCustom;
  input.required = isCustom;
  if (!isCustom) { input.value = ''; }
}

document.getElementById('fService').addEventListener('change', updateCustomVisibility);

document.querySelectorAll('[data-service]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.getElementById('fService').value = btn.getAttribute('data-service');
    updateCustomVisibility();
    document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var selected = document.getElementById('fService').value;
  var custom = document.getElementById('fCustomService').value.trim();
  var service = (selected === CUSTOM_VALUE && custom) ? custom : selected;
  var subject = encodeURIComponent('New booking: ' + service);
  var body = encodeURIComponent(
    'Name: ' + document.getElementById('fName').value + '\n' +
    'Phone: ' + document.getElementById('fPhone').value + '\n' +
    'Service: ' + service + '\n' +
    'Address: ' + document.getElementById('fAddress').value + '\n' +
    'Preferred date: ' + document.getElementById('fDate').value + '\n' +
    'Job details: ' + document.getElementById('fDetails').value
  );
  window.location.href = 'mailto:dawudjunaidwork@gmail.com?subject=' + subject + '&body=' + body;
  document.getElementById('formNote').hidden = false;
});

document.getElementById('workerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var subject = encodeURIComponent('Worker application: ' + document.getElementById('wName').value);
  var body = encodeURIComponent(
    'Name: ' + document.getElementById('wName').value + '\n' +
    'Phone: ' + document.getElementById('wPhone').value + '\n' +
    'Services: ' + document.getElementById('wServices').value + '\n' +
    'Areas: ' + document.getElementById('wArea').value + '\n' +
    'Experience: ' + document.getElementById('wExp').value
  );
  window.location.href = 'mailto:dawudjunaidwork@gmail.com?subject=' + subject + '&body=' + body;
  document.getElementById('workerNote').hidden = false;
});
