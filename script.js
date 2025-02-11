const scriptURL = 'https://script.google.com/macros/s/AKfycbwnOFd9iLRcfq30rceL0SmGZjuUI7KOLJOzGzV8yUgRlG0Ank43JXU9LBM_Q45sh376Bw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector("#msg");

form.addEventListener('submit', e => {
  e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Thank you for subscribing!";
            setTimeout(function(){
                msg.innerHTML = "";
            },5000)
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    })