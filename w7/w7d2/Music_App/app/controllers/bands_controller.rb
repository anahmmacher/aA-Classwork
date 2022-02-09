class BandsController < ApplicationController

  def index
    @bands = Band.all
    render :index
  end

  def show
    @bands = Band.find_by(params[:id])
    render :show
  end

    
end
