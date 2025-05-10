const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = button.querySelector('i');

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // Close all other faq answers
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherButton = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        const otherIcon = otherButton.querySelector('i');
        otherButton.setAttribute('aria-expanded', 'false');
        otherAnswer.style.maxHeight = null;
        otherAnswer.classList.remove('open');
        otherIcon.style.transform = 'rotate(0deg)';
      }
    });

    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.classList.add('open');
      icon.style.transform = 'rotate(180deg)';
    } else {
      button.setAttribute('aria-expanded', 'false');
      answer.style.maxHeight = null;
      answer.classList.remove('open');
      icon.style.transform = 'rotate(0deg)';
    }
  });
});