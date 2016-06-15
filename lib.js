function bubbleSort(array) {
    function loop(array, end) {
        if(sorted(array)) return array
        else {
            // ソート処理
            for(var i = 0; i<end; i++){
                if(array[i] >array[i+1]) swap(array, i, i+1)        
            }

            setTimeout(function() {
                $($('.sp').get(end)).css('background', 'red')
            }, 1000)

            return bubbleSort(array, end-1)
        }
    }

    loop(array, array.length-1)
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

    return array
}

$('#sort-btn').click(function(){
    var list = $('.sp').map(function(index, element){ return parseInt($(element).text()) })
    bubbleSort(list)
    $('.sp').map(function(index, element){ $(element).text(list[index]) })
})