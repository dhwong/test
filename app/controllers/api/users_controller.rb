class Api::UsersController < Api::BaseController
  # before_filter :correct_user, only: :show

  def index
    respond_with :api, users
  end

  def show
    respond_with :api, user
  end

  def create
    respond_with :api, users.create(user_params)
  end

  def update
    respond_with :api, users.update(user_params)
  end

  def destroy
    respond_with :api, user.destroy
  end

  private

    def users
      @users ||= User.all
    end

    def user
      @user ||= users.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :fname, :lname, :isOwner,
                                  :password, :password_confirmation)
    end
end
