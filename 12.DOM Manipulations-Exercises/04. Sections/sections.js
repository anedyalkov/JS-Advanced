function create(sections) {
    for (let section of sections) {
        let div = $(`<div></div>`);
        let paragraph = $(`<p style="display:none">${section}</p>`);
        div.append(paragraph);
        $('#content').append(div);
        div.click(function () {
            paragraph.css('display', 'block')
        })
    }
}