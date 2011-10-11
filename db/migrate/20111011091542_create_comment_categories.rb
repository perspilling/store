class CreateCommentCategories < ActiveRecord::Migration
  def change
    create_table :comment_categories do |t|
      t.string :name

      t.timestamps
    end
  end
end
