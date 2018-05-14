//--------------------------------------------------------
//TASK 1: Add an event listener to the <button class="rte-italics">
//
//        When user clicks, it should toggle the fontStyle property
//        value of the <p class="textbox"> to 'italic'
//
//--------------------------------------------------------

var rteItalicsDomEl = document.querySelector('.rte-italics')

function handleItalicsBtnClick(){
  alert('wired up!')
}

rteItalicsDomEl.addEventListener('click', handleItalicsBtnClick)


//--------------------------------------------------------
//TASK 2: Add an event listener to the <button class="rte-bold">
//
//        When user clicks, it should toggle the fontWeight property
//        value of the <p class="textbox"> to 700
//
//--------------------------------------------------------




//--------------------------------------------------------
//TASK 3: Add event listeners to the <button class="rte-fontsize"> elements
//
//        When user clicks, it should change the fontSize property of the
//        <p class="textbox"> to the value of the button that was clicked
//
//--------------------------------------------------------


//--------------------------------------------------------
//TASK 4: Add event listeners to the <button class="rte-fontcolor"> elements
//
//        When user clicks, it should take the value from the 'data-color'
//        attribute and set the 'color' property of the <p class="textbox">
//
//        To access data-* attributes:
//        https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
//--------------------------------------------------------
