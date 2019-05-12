function toggle() {
  
    let btn = $('.head > .button');
    if(btn.text() === 'More'){
        $('#extra').css('display', 'block');
        btn.text('Less');
    } else {
        $('#extra').css('display', 'none');
        btn.text('More');
    }
}