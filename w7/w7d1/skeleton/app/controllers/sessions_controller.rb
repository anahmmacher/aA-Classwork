class SessionsController < ApplicationController
  before_action :require_logged_out, only: :new
  # 
  # use logged_in?
  # if logged_in?
  # redirect_to cats_url
  helper_method :current_user

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    login!(@user)
    redirect_to cats_url
  end

  def destroy
    logout!
    redirect_to cats_url
  end

end
