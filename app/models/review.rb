class Review < ActiveRecord::Base
	belongs_to :product
	belongs_to :user
	validates :author_id, presence: true
	validates :body, presence: true,
					 length: { minimum: 5 }
end
