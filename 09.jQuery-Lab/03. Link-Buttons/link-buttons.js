function attachEvents() {
    $('a.button').click(addClassSelected)
   
    function addClassSelected(){
        removeClassSelected();
        $(this).addClass('selected');
    }

    function removeClassSelected(){
        $('a.button').removeClass('selected');
    } 
}