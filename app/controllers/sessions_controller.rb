class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && (user.password==(params[:session][:password]))
      # Log the user in and redirect to the user's show page.
      log_in user
      redirect_to root_url
    else
      flash[:danger] = 'Invalid email/password combination'  # Not quite right!
      redirect_to root_url
    end
  end

  def destroy
     log_out
    redirect_to root_url
  end
end