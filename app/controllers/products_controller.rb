class ProductsController < ApplicationController
  respond_to :html, :xml

  # GET /products
  # GET /products.xml
  # GET /products.json
  def index
    @products = Product.all
    respond_with(@products)
  end

  # GET /products/1
  # GET /products/1.xml
  # GET /products/1.json
  def show
    @product = Product.find(params[:id])
    respond_with(@product)
  end

  # GET /products/new
  # GET /products/new.xml
  # GET /products/new.json
  def new
    @product = Product.new
    respond_with(@product)
  end

  # GET /products/1/edit
  def edit
    @product = Product.find(params[:id])
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(params[:product])

    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  # PUT /products/1
  # PUT /products/1.json
  def update
    @product = Product.find(params[:id])

    respond_to do |format|
      if @product.update_attributes(params[:product])
        format.html { redirect_to @product, notice: 'Product was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    respond_to do |format|
      format.html { redirect_to products_url }
    end
  end
end
