class WelcomeController < ApplicationController
  def index
    @products = Product.joins(:reviews).select("products.id, products.name, products.description, avg(reviews.rating) as average_rating, products.price").
						group("products.id").limit(10).order("average_rating DESC")
  end
end
