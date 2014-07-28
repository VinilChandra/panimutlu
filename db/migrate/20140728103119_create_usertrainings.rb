class CreateUsertrainings < ActiveRecord::Migration
  def change
    create_table :usertrainings do |t|

      t.belongs_to :user
      t.belongs_to :trainingregistration
      t.timestamps
    end
  end
end
