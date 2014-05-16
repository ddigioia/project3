class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def send_email(recipient, senderMessage, test_id, url)
    @test_id = test_id
    @senderMessage = senderMessage
    @recipient_email = recipient
    @url  = url
    mail(to: @recipient_email, subject: 'You have been invited to take a test!')
  end
  
end
