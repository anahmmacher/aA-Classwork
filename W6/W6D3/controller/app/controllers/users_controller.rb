class UsersController < ApplicationController

  def index 
      
      if params.has_key?(:username) 
        userone = User.where(username: params[:username])
        render json: userone
      elsif !user_params.nil? && user_params.has_key?(:username)
        userone = User.where(username: user_params[:username])
        render json: userone
      else
        users = User.all
        render json: users
      end
    # render plain: "I'm in the index action!"
  end

  def artworks
    artworks = Artwork.where(artist_id: params[:id])
    actual_array = []
    artworks.each{|ele| actual_array << ele }
    placeholder_array = ArtworkShare.where(viewer_id: params[:id]).includes(:artwork)
    placeholder_array.each{ |share| actual_array << share.artwork}
    render json: actual_array
  end

#   class ArticlesController
#   def index
#     if params.has_key?(:magazine_id)
#       # index of nested resource
#       @articles = Article.where(magazine_id: params[:magazine_id])
#     else
#       # index of top-level resource
#       @articles = Article.all
#     end

#     render json: @articles
#   end
# end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      redirect_to "/users/#{user.id}"
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    if user.destroy
        render json: 'User was destroyed'
    else
        render json: user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username)
  end
end