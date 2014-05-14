class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string      :question_content
      t.string      :question_type
      t.string      :answer
      t.references  :test
    end
  end
end
