class TestsController < ApplicationController

def show

  response.cache_control.replace(:no_cache => true)
  
  respond_to do |format|
    format.html {}
    format.js {}
  end 

end

def create

  response.cache_control.replace(:no_cache => true)

  @test = Test.create(title: params[:title])
  render json: @test
end

def updateTest

  
end


end