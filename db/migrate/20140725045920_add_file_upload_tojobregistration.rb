class AddFileUploadTojobregistration < ActiveRecord::Migration
  def change
  	 add_column :jobregistrations, :attachment, :string
  end
end
