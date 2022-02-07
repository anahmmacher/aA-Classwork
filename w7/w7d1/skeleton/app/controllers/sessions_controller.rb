class SessionsController < ApplicationController
  
  helper_method :current_user

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
    @user.reset_session_token
    redirect_to cats_url
  end

  def destroy
    logout!
    redirect_to cats_url
  end

end
