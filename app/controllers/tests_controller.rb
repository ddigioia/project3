class TestsController < ApplicationController

def show
  response.cache_control.replace(:no_cache => true)

  @test = Test.find(params[:id])
  render json: @test.questions
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
  UserMailer.send_email(@recipientEmail).deliver
  render json: @recipientEmail
end

end