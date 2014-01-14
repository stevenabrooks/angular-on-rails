class TodosController < ApplicationController
  # respond_to :json

  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    respond_with Todo.create(params[:todo])
  end

  def update
    render json: Todo.update(params[:id], params[:todo])
  end

  def destroy
    respond_with Todo.destroy(params[:id])
  end
end
