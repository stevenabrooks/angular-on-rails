class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title
      t.string :description
      t.integer :importance

      t.timestamps
    end
  end
end
