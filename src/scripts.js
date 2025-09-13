document.addEventListener('DOMContentLoaded', () => {

  const faq_questions = document.querySelectorAll('.faq_question');
  const searchInput = document.querySelector('search-form');


  faq_questions.forEach(question => {
    question.addEventListener('click', function toogleVisibilityAnswer(event) {
    
      if (event.target.matches('.faq_question')) {
        const id = event.target.id;
        const answerId = id.replace('faq_q', 'faq_a');
        const answer = document.querySelector(`#${answerId}`);
        const clickedQuestion = event.target;
        
        answer.classList.toggle('faq_answer_hidde');
        clickedQuestion.classList.toggle('faq_question_open');
      }
    });
  });


  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.shadowRoot.getElementById('search-bar').value.toLowerCase();
    const linkCards = document.querySelectorAll('link-card');

    linkCards.forEach(card => {
      const ref = card.getAttribute('data-reference');
      const linkCardsTitle = document.querySelectorAll(`link-card h2[data-reference="${ref}"]`);
      const linkCardsDesc = document.querySelectorAll(`link-card p[data-reference="${ref}"]`);
      let matches = false;

      if(linkCardsTitle[0].innerText.toLowerCase().includes(searchTerm)){
        matches = true;
      }
      if(linkCardsDesc[0].innerText.toLowerCase().includes(searchTerm)){
        matches = true;
      }
      if(matches) {
        card.classList.remove('none');
      } else {
        card.classList.add('none');
      }
    });
  });

});