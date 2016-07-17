$(document).ready(function(){
  $(document).on("click",".rb-drodown-select > ul.dropdown-menu >li > a",function(e){
    $(this).parents('.rb-drodown-select').find('span.slelector-text').text($(this).data('priority'));
    $(this).parents('.rb-drodown-select').find('.selected').val($(this).data('priority'));
  });
});
