document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.fav-btn');
  
  
  if (!localStorage.getItem('savedBooks')) {
    localStorage.setItem('savedBooks', JSON.stringify([]));
  }
  
  
  let savedBooks = JSON.parse(localStorage.getItem('savedBooks'));
  
  
  buttons.forEach(btn => {
    const bookId = btn.closest('.book').dataset.id;
    if (savedBooks.includes(bookId)) {
      btn.classList.add('active');
      btn.textContent = '❤️';
    }
  });
  
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const bookId = btn.closest('.book').dataset.id.toString();
      let savedBooks = JSON.parse(localStorage.getItem('savedBooks')).map(id => id.toString());
      
      const index = savedBooks.indexOf(bookId);
      if (index === -1) {
       
        savedBooks.push(bookId);
        btn.classList.add('active');
        btn.textContent = '❤️';
      } else {
        
        savedBooks.splice(index, 1);
        btn.classList.remove('active');
        btn.textContent = '🤍';
      }
      
      
      localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
    });
  });
});