class AddAssociationToComments < ActiveRecord::Migration
  def change
    change_table :comments do |t|
      t.references :comment_category
    end
  end
end
