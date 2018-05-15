//--------------------------------------------------------
//TASK 1: Add an event listener to the <button class="rte-italics">
//
//        When user clicks, it should toggle the fontStyle property
//        value of the <p class="textbox"> to 'italic'
//
//--------------------------------------------------------

var rteItalicsDomEl = document.querySelector('.rte-italics')

function toggleItalicsBtnClick(){
  //(1) select element to modify
  var textBoxDomEl = document.querySelector('.textbox')

  //(2) capture current style of element that we are going to modify
  //    using window.getComputedStyle(...)
  var textBoxStyleValsObj = window.getComputedStyle(textBoxDomEl)

  // (3)  use if-statement to create toggle from 'italic' to 'normal'
  //     (asssigning the value for element's fontStyle property )
  if(textBoxStyleValsObj.fontStyle === 'italic'){

    textBoxDomEl.style.fontStyle = 'normal'

  } else {

    textBoxDomEl.style.fontStyle = 'italic'
  }

}

// rteItalicsDomEl.addEventListener('click', toggleItalicsBtnClick)


//--------------------------------------------------------
//TASK 2: Add an event listener to the <button class="rte-bold">
//
//        When user clicks, it should toggle the fontWeight property
//        value of the <p class="textbox"> to 700
//
//--------------------------------------------------------

var rteBoldBtnDomEl = document.querySelector('.rte-bold')

function toggleBoldBtnClick(){
  var textBoxDomEl = document.querySelector('.textbox')

  var elStylesObj = window.getComputedStyle(textBoxDomEl)

  console.log(elStylesObj.fontWeight)
  console.log(typeof elStylesObj.fontWeight)

  if(elStylesObj.fontWeight === '400'){
    textBoxDomEl.style.fontWeight = '700'
  } else {
    textBoxDomEl.style.fontWeight = '400'
  }

}
// rteBoldBtnDomEl.addEventListener('click', toggleBoldBtnClick)


function togglePropertyVals(cssPropName, defaultVal, toggleVal){

  return function togglerFunc(){
    console.log('hmmm')
    var textBoxDomEl = document.querySelector('.textbox')

    var elStylesObj = window.getComputedStyle(textBoxDomEl)

    console.log(elStylesObj[cssPropName])
    console.log(elStylesObj[cssPropName], defaultVal)

    if( elStylesObj[cssPropName] === defaultVal ){
      console.log( defaultVal)
      textBoxDomEl.style[cssPropName] = toggleVal
    } else {
      console.log( toggleVal)
      textBoxDomEl.style[cssPropName] = defaultVal
    }
  }

}

rteItalicsDomEl.addEventListener('click', togglePropertyVals('fontStyle', 'italic', 'normal') )
rteBoldBtnDomEl.addEventListener('click', togglePropertyVals('fontWeight', '400', '700') )





//--------------------------------------------------------
//TASK 3: Add event listeners to the <button class="rte-fontsize"> elements
//
//        When user clicks, it should change the fontSize property of the
//        <p class="textbox"> to the value of the button that was clicked
//
//--------------------------------------------------------

//(1) use .querySelectorAll to capture '.rte-fontsize' dom els
var fontSizeBtnElsNodeList = document.querySelectorAll('.rte-fontsize')

//(2) change node list to array
var fontSizeBtnElsArray = [...fontSizeBtnElsNodeList]

// (5) create handler function
function changeTextBoxFontSize(evtObj){
  var textBoxEl = document.querySelector('.textbox')

  // (6) access the button that RECEIVED the click
  var clickedBtnEl = evtObj.currentTarget
  textBoxEl.style.fontSize = clickedBtnEl.textContent
}

// (3) iterate over btn els with .forEach (pass .forEach a function)
fontSizeBtnElsArray.forEach(function putEventListenerOnBtn(btnEl, i){
  //NOTA: first argument of forEach represents the element in the iterated array

  //  (4) add event listener to each btnEl,
  //       pass event handler function
  btnEl.addEventListener('click', changeTextBoxFontSize )
})


//--------------------------------------------------------
//TASK 4: Add event listeners to the <button class="rte-fontcolor"> elements
//
//        When user clicks, it should take the value from the 'data-color'
//        attribute and set the 'color' property of the <p class="textbox">
//
//        To access data-* attributes:
//        https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
//--------------------------------------------------------

//(1) use .querySelectorAll to capture '.rte-fontcolor' dom els
var colorBtnElsNodeList = document.querySelectorAll('.rte-fontcolor')

//(2) change node list to array
var colorBtnElsArray = [...colorBtnElsNodeList]


// (5) create handler function
function changeTextBoxFontColor(evtObj){
  var textBoxEl = document.querySelector('.textbox')

  // (6) access the button that RECEIVED the click
  var clickedBtnEl = evtObj.currentTarget
  var btnElDataColor = clickedBtnEl.dataset.color
  textBoxEl.style.color = btnElDataColor
}


// (3) iterate over btn els with .forEach (pass .forEach a function)
  //NOTA: first argument of forEach represents the element in the iterated array
colorBtnElsArray.forEach(function putEventListenerOnBtn(btnEl){
  // console.log(btnEl)
  btnEl.addEventListener('click', changeTextBoxFontColor)
})

  //  (4) add event listener to each btnEl,
  //       pass event handler function
