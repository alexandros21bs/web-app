(function initContactSectionExport() {
  const form = document.querySelector('#contact-section-export .contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  const setStatus = (message, type) => {
    let status = form.querySelector('.form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'form-status';
      form.appendChild(status);
    }

    status.textContent = message;
    status.classList.remove('success');
    if (type === 'success') status.classList.add('success');
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.originalText = submitBtn.textContent || 'Αποστολή Μηνύματος';
      submitBtn.textContent = 'Αποστολή...';
    }

    window.setTimeout(() => {
      setStatus('Το μήνυμά σας στάλθηκε επιτυχώς. Ευχαριστούμε για την επικοινωνία.', 'success');
      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.dataset.originalText || 'Αποστολή Μηνύματος';
      }
    }, 700);
  });
})();
