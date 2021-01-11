document.addEventListener('DOMContentLoaded', () => {
  let content = document.querySelector('.content');
  let textField = document.querySelector('.text-field');
  let cursor;

  // document.onclick = event => {
  //   if (event.target.tagName === 'DIV') {
  //     textField.classList.add('focused');
  //   } else {
  //     textField.classList.remove('focused');
  //   }
  // };

  function blink() {
    textField.classList.toggle('cursor');
  }

  textField.addEventListener('click', event => {
    // event.stopPropagation();
    textField.classList.add('focused');
    cursor = cursor || setInterval(blink, 500);
  });

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      if (event.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, -1);
      } else if (event.key.length === 1) {
        content.textContent += event.key;
      }
    }
  });

  document.addEventListener('click', event => {
    clearInterval(cursor);
    cursor = null;
    textField.classList.remove('focused', 'cursor');
  }, true);
});