$(document).ready(function() {
  $(function() {
    $( "#left, #right" ).sortable({
      connectWith: ".sort_this"
    }).disableSelection();
  });
});

