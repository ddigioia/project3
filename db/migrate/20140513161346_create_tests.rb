class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :question
      t.string :title
      t.timestamps
    end
  end
end
