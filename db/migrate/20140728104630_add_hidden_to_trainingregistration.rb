class AddHiddenToTrainingregistration < ActiveRecord::Migration
def change
   add_column :trainingregistrations, :hiddenid, :string

  end
end
