document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('savedBooks');
  const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
  
  
  container.innerHTML = '';
  
  if (savedBooks.length === 0) {
    container.innerHTML = '<div class="empty-message">Нет сохранённых книг</div>';
    return;
  }
  
 
  const bookImages = {
    '1': 'harry-potter-1-harry-potter-and-the-sorcerer-s-stone-j-k-rowling.jpg',
    '2': 'images.jpg',
    '3': '8.jpg',
    '4': '7.jpg',
    '5': '6.jpg',
    '6': '5.jpg',
    '7': '4.jpg',
    '8': '3.jpg',
    '9': '2.jpg',
    '10': '1.jpg'
  };
  
 
  savedBooks.forEach(bookId => {
    if (bookImages[bookId]) {
      const bookElement = document.createElement('div');
      bookElement.className = 'book';
      bookElement.innerHTML = `
        <img src="${bookImages[bookId]}" alt="Обложка книги">
        <button class="fav-btn active" data-id="${bookId}">❤️</button>
      `;
      container.appendChild(bookElement);
    }
  });
});