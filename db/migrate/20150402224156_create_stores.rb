class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.integer :owner_id
      t.string :name
      t.string :location
      t.string :store_type

      t.timestamps
    end
  end
end
