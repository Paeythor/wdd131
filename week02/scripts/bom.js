// -----------------------------
// 📘 Book of Mormon Favorite Chapters
// -----------------------------

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
  } else {
    alert("Please enter a chapter name.");
  }

  input.focus();
});

// -----------------------------
// 🍔 Responsive Hamburger Menu
// -----------------------------

const hamButton = document.querySelector('.menu button');
const navigation = document.querySelector('.menu nav');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.textContent = navigation.classList.contains('open') ? '❎' : '≡';
});