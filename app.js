
$('main').on('click', 'img', (event)=>{
    const $question= $(event.target).closest('.question');
    const $answer= $question.find('.answer')
    const $hideAnswer= $question.find('.hide-answer')
    const $showAnswer= $question.find('.show-answer')

    $answer.slideToggle()
    $showAnswer.toggle()
    $hideAnswer.toggle()
})



    

  
