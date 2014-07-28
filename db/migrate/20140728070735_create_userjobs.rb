class CreateUserjobs < ActiveRecord::Migration
  def change
    create_table :userjobs do |t|

      t.belongs_to :user
      t.belongs_to :jobregistration
      t.timestamps
    end
  end
end
