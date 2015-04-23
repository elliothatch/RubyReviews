module ReviewsHelper
	def starDisplay rating
		emptyStarString = '&#9734;';
		filledStarString  = '&#9733;';
		output = '<div class="star-rating-static">'
		for i in 1..5
			starChar = emptyStarString;
			if i <= rating
				starChar = filledStarString;
			end
			output << '<span class="star-rating-star-static">' << starChar << '</span>'
		end
		output << '</div>'
		return output.html_safe
	end
end
