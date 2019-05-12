function addSticker(){
    let title = $('.title');
    let content = $('.content');
    
    if(title.val() && content.val()){

        let ul = $('.stickerBoard ul#sticker-list');
        let li = $('<li class = "note-content"></li>');
        let h2 = $(`<h2>${title.val()}</h2>`);
        let a = $('<a class = "button">x</a>').click(function(){
            li.remove();
        });
        let hr = $('<hr>');
        let p = $(`<p>${content.val()}</p>`);
        li.append(h2).append(a).append(hr).append(p);
        ul.append(li);
    }

    title.val('');
    content.val('');
}