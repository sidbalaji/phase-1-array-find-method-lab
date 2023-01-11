// code your solution here

function winTest(element){
    return element.result == 'W'
    }

function superbowlWin(arr){
        let index = arr.find(winTest)
        //console.log(index)
        if(typeof index ==='undefined'){
            return index
        }
        else{
        return index.year
        }
    }
