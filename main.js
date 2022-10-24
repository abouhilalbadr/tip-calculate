import './style.css'
// Declaration
window.SPLITTER = { bill: 0, tip: 0, people: 0 }
// Get Bill
const billEl = document.getElementById('bill')
billEl.addEventListener('input', function() {
  window.SPLITTER.bill = (this.value) ? parseFloat(this.value) : 0
  removeActiveClass('error-input')
  runCalcTip()
})
// Set Tip
const btnsEl = document.querySelectorAll('.btn-percent')
const customTipEl = document.getElementById('customTip')
btnsEl.forEach(el => {
  el.addEventListener('click', function() {
    window.SPLITTER.tip = parseInt(this.dataset.percent);
    removeActiveClass()
    this.className += ' active'
    runCalcTip()
  })
});
customTipEl.addEventListener('input', function() {
  removeActiveClass()
  window.SPLITTER.tip = (this.value) ? parseFloat(this.value) : 0
  runCalcTip()
})
// Set people
const peopleEl = document.getElementById('people')
peopleEl.addEventListener('input', function() {
  removeActiveClass('error-input')
  window.SPLITTER.people = (this.value) ? parseFloat(this.value) : 0
  runCalcTip()
})
// Reset
const resetEl = document.getElementById('reset')
resetEl.addEventListener('click', () => resetAll())
const resetAll = () => {
  window.SPLITTER = { bill: 0, tip: 0, people: 0 }
  peopleEl.value = ''
  billEl.value = ''
  customTipEl.value = ''
  tipAmount.innerText = '$0.00'
  total.innerText = '$0.00'
  btnsEl.forEach(() => removeActiveClass());
}
// Helper functions
// Remove active Class
const removeActiveClass = (active = 'active') => {
  const activeEl = document.querySelectorAll(`.${active}`);
  if (activeEl.length > 0)
    activeEl[0].className = activeEl[0].className.replace(` ${active}`, "");
}
// set error message
const setErrorMsg = (el = null) => {
  const msgEl = document.querySelectorAll('.error-text')
  if (msgEl.length > 0)
    msgEl[0].className = msgEl[0].className.replace('error-text', '');
  if (el) 
    el.className += ' error-text'
}
// Calculate Tip
const calcTip = () => {
  const tipAmount = document.getElementById('tipAmount');
  const total = document.getElementById('total');

  const tip = (window.SPLITTER.bill * window.SPLITTER.tip) / 100
  const tipPerson = tip / window.SPLITTER.people
  const totalPerson = (window.SPLITTER.bill + tip) / window.SPLITTER.people

  tipAmount.innerText = `$${parseFloat(tipPerson).toFixed(2)}`
  total.innerText = `$${parseFloat(totalPerson).toFixed(2)}`
}
// Run CalcTip
const runCalcTip = () => {
  if (window.SPLITTER.bill <= 0) {
    billEl.className = 'num-input error-input'
    setErrorMsg(billEl.parentElement.previousElementSibling.lastElementChild)
  }
  else if (window.SPLITTER.people <= 0) {
    peopleEl.className = 'num-input error-input'
    setErrorMsg(peopleEl.parentElement.previousElementSibling.lastElementChild)
  }
  else {
    calcTip()
    setErrorMsg()
  }
}
