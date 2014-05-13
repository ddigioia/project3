class TestsController < ApplicationController

def show

  response.cache_control.replace(:no_cache => true)
  
  respond_to do |format|
    format.html {}
    format.js {}
  end 

end

def create

 @test = Test.create(
  ##we have to catch the ajax request here to persist it
  )
 
end


end