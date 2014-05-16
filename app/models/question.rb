class Question < ActiveRecord::Base
  belongs_to :tests
  # has_one :photos
  # has_attached_file 
  #   :photo1 
  #   :styles => { :medium => "300x300>"} 
  #   :path => "/assets/images/test_photos/:id/:filename"

  # validates_attachment_content_type :photo1, :content_type => /\Aimage\/.*\Z/
end