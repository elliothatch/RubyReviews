module SessionsHelper

  # 登入指定的用户
  def log_in(user)
    session[:user_id] = user.id
  end

  
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def username
    User.find_by(id: session[:user_id]).name
  end


  def logged_in?
    !current_user.nil?
  end
  def log_out
    session.delete(:user_id)
    @current_user = nil
  end
end