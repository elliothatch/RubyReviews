class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.timestamp :timeCreated
      t.text :body
      t.float :rating

      t.timestamps null: false
    end
  end
end
