class UserMailer < ActionMailer::Base
  default :from => "notifications@example.com"
 
  def password_reset(user)
    @user = user
    @url  = "http://gmail.com/login"
    mail(:to => user.email, :subject => "Re:Forgot panimutlu account password")
  end
end