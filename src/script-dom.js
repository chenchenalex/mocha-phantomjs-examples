// nodejs does not support ES2015 syntax, so don't use them without babel transpile

function addClass() {
    $('.test-container').addClass('new-class');
}

function addDivs(num) {
    var div = '<div></div>',
        divsToAppend = [];

    for (var i = 0; i < num; i++) {
        divsToAppend.push(div);
    }

    $('.test-container').append(divsToAppend.join(''));
}

function clearDom() {
    $('.test-container').html('');
}