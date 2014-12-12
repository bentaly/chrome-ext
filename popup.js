var shifting = false;

$('body').on('click', '*', function(event) {
	if (event.shiftKey) {
		// console.log($(event.target));
		$(event.target).fadeOut(function() {
			$(this).remove();	
		})
		event.preventDefault();
		event.stopPropagation();
		return false;
    }
});

$('body').children().mouseover(function(e){
	$(".hova").removeClass("hova");     
	$(e.target).addClass("hova");
 	return false;
}).mouseout(function(e) {
    $(this).removeClass("hova");
});

$('body').on('keydown', function(e) {
    if (e.shiftKey || e.keyCode == 16) {
        $('body').addClass("shifty");
        shifting = true;
    } 
}).on('keyup', function(e) {
    if (e.shiftKey || e.keyCode == 16) {
        $('body').removeClass("shifty");
        shifting = false;
    } 
});