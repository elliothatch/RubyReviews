class Product < ActiveRecord::Base
	has_many :reviews, dependent: :destroy

	def average_rating
		return self.reviews.average(:rating)
	end
end
