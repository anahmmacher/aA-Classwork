class LikesController < ApplicationController
  def index 
    if params.has_key?(:user_id)
      likes = Like.where(user_id: params[:user_id])
    elsif params.has_key?(:artwork_id)  
      likes = Like.where("likes.likeable_type = 'Artwork' AND 
      likes.likeable_id = ? ", params[:artwork_id])
    elsif params.has_key?(:comment_id)
      likes = Like.where("likes.likeable_type = 'Comment' AND 
      likes.likeable_id = ? ", params[:comment_id])
    else
    likes = Like.all 
    end
    render json: likes
  end 

  def create 
    like = Like.new(like_params)
    if like.save
      render json: like
    else  
      render json: likes.errors.full_messages, status: 422
    end 
  end 

  def destroy
    like = Like.find(params[:id])
    if like.destroy
      render json: "Like was destroyed"
    else  
      render json: likes.errors.full_messages, status: 422
    end 
  end 

  private 
  def likes_params
    params.require(:likes).permit(:user_id, :likeable_type, :likeable_id)
  end
end
