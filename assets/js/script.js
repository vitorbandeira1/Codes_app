document.addEventListener('DOMContentLoaded', function() {
  let iframe = document.querySelector('iframe')
  let button = document.querySelector('button')

  button.addEventListener('click', function() {
    if(iframe.requestFullscreen) {
      iframe.requestFullscreen()
    }
    else if(iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen()
    }
    else if(iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen()
    }
    else if(iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen()
    }
  })
<<<<<<< HEAD
})
=======
})
>>>>>>> 860581d4057963e6cb29c645352ec28b7b102128
