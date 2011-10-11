class CommentController < ApplicationController
  def show
    @comment_categories = CommentCategory.all
  end
end
