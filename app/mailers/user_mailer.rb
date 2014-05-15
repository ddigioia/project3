class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def send_email(recipient)
    @recipientEmail = recipient
    @url  = 'http://localhost:3000'
    mail(to: @recipientEmail.email, subject: 'You have been invited to take a test!')
  end
  
end
