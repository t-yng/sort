
const bubbleSort = function (array) {
  const INTERVAL = 500
  return new Promise(function(resolve) {
    const loop = function(array, end) {
      var time = 0
      if(end < 0) resolve()
      else {
        // ソート処理

        for(var i = 0; i　<　end; i++){

          if(i === 0) {
            $('.sp').get(i).style.background = 'blue'
            $('.sp').get(i+1).style.background = 'blue'            
          }

          time += INTERVAL
          setTimeout(function(i) {
            const swapped = array[i] > array[i+1]
            if(array[i] > array[i+1]) swap(array, i, i+1)

            if(i+1 < end) {
              $('.sp').get(i).style.background = '#00ff00'
              $('.sp').get(i+2).style.background = 'blue'
            }
          }, time, i)
        }

        // time += INTERVAL
        setTimeout(function() {
          if(end > 0){
            $('.sp').get(end-1).style.background = '#00ff00'
          }
          $('.sp').get(end).style.background = 'red'
          loop(array, end-1)
        }, time)
      }
    }
    loop(array, array.length-1)
  })
}

function sorted(array) {    
  for(var i = 0; i < array.length-1; i++) {
    if(array[i] > array[i+1]) return false
  }

  return true
}

function swap(array, index1, index2) {
  const tmp = array[index1]
  array[index1] = array[index2]
  array[index2] = tmp

  $('.sp').get(index1).textContent = array[index1]
  $('.sp').get(index2).textContent = array[index2]
}

const getNumbers = function() {
  return $('.sp').map(function(index, element){ return parseInt($(element).text()) })
}

const shuffle = function(array) {
  var shuffled = []

  for(var i = array.length; i > 0; i--) {
    const r = Math.floor(Math.random() * i)
    shuffled.push(array[r])
    array.splice(r, 1)
  }

  return shuffled
}

$('#sort-btn').click(function(){
  const list = getNumbers()
  bubbleSort(list).then(() => {
    alert('ソート完了！')
  })
})

$('#shuffle-btn').click(() => {
  const list = getNumbers()
  const shuffled = shuffle(list)

  console.log(list, shuffled)

  shuffled.forEach((item, index) => {
    $('.sp').get(index).textContent = item
  })
})