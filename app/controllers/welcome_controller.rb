class WelcomeController < ApplicationController

def index

  response.cache_control.replace(:no_cache => true)
  
  respond_to do |format|
    format.html {}
    format.js {}
  end

end


def submitAnswer

  response.cache_control.replace(:no_cache => true)
  
  respond_to do |format|
    format.js {}
  end

end


end