// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

var onReady = function() {
	//initialize table rows to be clickable
	$('tr').click(function() {
		var dataHref = $(this).data('href');
		if(typeof dataHref !== 'undefined')
			window.location = dataHref;
	});

	var emptyStarString = '&#9734;';
	var filledStarString  = '&#9733;';
	//initialize all star-rating classes
	$('.star-rating').each(function () {
		$(this).data('selected', 0);
		for(var i = 1; i <= 5; i++)
		{
			var starSpan = $('<span></span>');
			starSpan.addClass('star-rating-star');
			starSpan.data('value', i);
			starSpan.html(emptyStarString);
			$(this).append(starSpan);
		}
	});
	$('.star-rating-star').mouseover(function () {
		//in
		$(this).prevAll('.star-rating-star').each(function() {
			$(this).html(filledStarString);
		});
		$(this).html(filledStarString);
		$(this).nextAll('.star-rating-star').each(function() {
			$(this).html(emptyStarString);
		});
	});
	$('.star-rating').mouseout(function() {
		var selection = $(this).data('selected');
		$(this).children('.star-rating-star').each(function() {
			if($(this).data('value') <= selection)
			{
				$(this).html(filledStarString);
			}
			else
			{
				$(this).html(emptyStarString);
			}
		});
	});
	$('.star-rating-star').click(function () {
		$(this).parent().data('selected', $(this).data('value'));
		$(this).parent().siblings('input[name="review[rating]"]').val($(this).data('value'));
		$(this).prevAll('.star-rating-star').each(function() {
			$(this).html(filledStarString);
		});
		$(this).html(filledStarString);
		$(this).nextAll('.star-rating-star').each(function() {
			$(this).html(emptyStarString);
		});
	});
};

$(document).ready(onReady);
$(document).on('page:load', onReady);
