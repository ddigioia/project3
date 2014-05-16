class TestsController < ApplicationController

def show
  response.cache_control.replace(:no_cache => true)

  @test = Test.find(params[:id])

  respond_to do |format|
      format.html { }
      format.json { render json: @test.questions }
  end
end

def create
  response.cache_control.replace(:no_cache => true)
  @test = Test.create(title: params[:title])
  render json: @test
end

def updateTest
end

# def tryTest
#   @questions = Question.where(test_id: params[:id])
#   render json: @questions
# end

def sendTest
  @recipientEmail = params[:recipientEmail]
  @senderMessage = params[:senderMessage]
  @test_id = params[:testId]
  @url = "http://localhost:3000/tests/" + @test_id 
  UserMailer.send_email(@recipientEmail, @senderMessage, @test_id, @url).deliver
  render json: @recipientEmail
end

end