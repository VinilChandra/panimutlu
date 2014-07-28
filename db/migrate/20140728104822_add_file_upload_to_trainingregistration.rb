class AddFileUploadToTrainingregistration < ActiveRecord::Migration
  def change
     add_column :trainingregistrations, :attachment, :string
  end
end
