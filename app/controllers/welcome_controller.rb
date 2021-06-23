class WelcomeController < ApplicationController
  def index
    @props = { name: 'Northstar' }
  end
end
