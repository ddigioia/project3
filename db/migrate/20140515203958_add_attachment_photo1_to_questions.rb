class AddAttachmentPhoto1ToQuestions < ActiveRecord::Migration
  def self.up
    change_table :questions do |t|
      t.attachment :photo1
    end
  end

  def self.down
    drop_attached_file :questions, :photo1
  end
end
