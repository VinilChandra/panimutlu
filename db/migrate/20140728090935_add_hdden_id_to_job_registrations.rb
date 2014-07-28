class AddHddenIdToJobRegistrations < ActiveRecord::Migration
  def change
   add_column :jobregistrations, :hiddenid, :string

  end
end
