class ReviewsController < ApplicationController
  def create
    @product = Product.find(params[:product_id])
    @review = @product.reviews.create(params[:review])
    flash[:notice] = "Thank you for reviewing this product"
    respond_to do |format|
      format.html { redirect_to @review.product }
      format.js
    end
  end
end
