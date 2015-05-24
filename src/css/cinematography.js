var clicked=false;
$( document ).on( "click", function() {
	if (clicked==false) {
		var original=$(".vjs-loading-spinner");
		var like=original.clone();
		var watchlater=original.clone();
		var share=original.clone();
		var like_img='<i class="fa fa-heart"></i>';
		var watchlater_img='<i class="fa fa-clock-o"></i>';
		var share_img='<i class="icon-share2"></i>';
		like.html(like_img);
		like.attr("class","player_btns");
		like.addClass("player_btns_like");
		like.insertAfter(".vjs-loading-spinner");
		watchlater.html(watchlater_img);
		watchlater.attr("class","player_btns");
		watchlater.addClass("player_btns_watchlater");
		watchlater.insertAfter(".vjs-loading-spinner");
		share.html(share_img);
		share.attr("class","player_btns");
		share.addClass("player_btns_share");
		share.insertAfter(".vjs-loading-spinner");
		set_volume();
		clicked=true;
	}
});