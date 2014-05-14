class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :title
      t.string :question
      t.string :answer
      t.timestamps
    end
  end
end
