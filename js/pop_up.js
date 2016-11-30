jQuery(function($) {
	$('.registration > li > a').click(function(){
		var $this = $(this),
			$pop = $this.next('.pop_up'),
			$close = $pop.children('.close');

		$this.parent().siblings().children('.pop_up').hide()
		$pop.show();
		$close.click(function(){
			$pop.hide();
		});	
		return false;
	});
});