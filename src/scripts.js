const faq_questions = document.querySelectorAll('.faq_question');

faq_questions.forEach(question => {
  addEventListener('click', function toogleVisibilityAnswer(event) {
    
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