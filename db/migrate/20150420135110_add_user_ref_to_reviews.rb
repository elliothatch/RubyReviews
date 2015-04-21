class AddUserRefToReviews < ActiveRecord::Migration
  def change
    add_reference :reviews, :author, index: true, foreign_key: true
  end
end
