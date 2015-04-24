class ApiKey < ActiveRecord::Base
	before_create :generate_access_token
	belongs_to :user

	private
	
		def generate_access_token
			begin
				self.access_token = SecureRandom.hex # hexadecimal generated for key
			end while self.class.exists?(access_token: access_token)
		end
end