class ApplicationController < ActionController::Base
  #CRLLL

  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    redirect_to new_user_url unless current_user
  end

  def require_logged_out
    redirect_to cats_url unless current_user.nil?
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
      # redirect_to cats_url
    # else
    #   redirect_to new_session_url
    # end
  end

end
