function extractText() {
   let items  = $('#items > li').toArray()
   .map((li) => {
      return $(li).text();
   });

   $('#result').text(items.join(', '));
}
