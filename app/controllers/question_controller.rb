class QuestionsController < ApplicationController



def create

  response.cache_control.replace(:no_cache => true)

  @question = Question.create(question_content: params[:questionContent], question_type: params[:questionType], answer: params[:answer], test_id: params[:testId])
  render json: @question
end



end





