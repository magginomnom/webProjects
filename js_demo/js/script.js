function askName() {
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('enter your name:')
    if (name=='') {
        alert('Please try again.')
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Nice to meet you!'
    }
}

function askQuestion() {
    var p = prompt('Are you mentally sane')
    if (p!=null) {
        document.getElementById('question').innerHTML = 'interesting.'
    }
}