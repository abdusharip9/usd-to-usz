'use strict'

const usz = document.querySelector('#usz'),
      usd = document.querySelector('#usd')

usz.addEventListener('input', (e) => {
  // console.log(e);
  const request = new XMLHttpRequest()

  request.open('GET', 'current.json')
  request.setRequestHeader('Content-Type', 'application/js; charset=utf-8')
  request.send()

  request.addEventListener('load', () => { // readystatechange ~ load => 4
    if(request.status === 200){ // request.readyState === 4 && 
      // console.log(request.response);
      const date = JSON.parse(request.response)
      usd.value = (+usz.value / date.current.usd).toFixed(3)
    } else {
      usd.value = 'Something went wrong'
    }
  })
})

usd.addEventListener('input', (e) => {
  // console.log(e);
  const request = new XMLHttpRequest()

  request.open('GET', 'current.json')
  request.setRequestHeader('Content-Type', 'application/js; charset=utf-8')
  request.send()

  request.addEventListener('load', () => { // readystatechange ~ load => 4
    if(request.status === 200){ // request.readyState === 4 && 
      // console.log(request.response);
      const date = JSON.parse(request.response)
      usz.value = (+usd.value * date.current.usd).toFixed(2)
    } else {
      uzs.value = 'Something went wrong'
    }
  })
})

 // status 200 - ok, 404 - not found, 500 - server, 400 - client error
  // statusText 
  // response   => 100~599
  // readyStage => 1, 2, 3, 4