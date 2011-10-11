class CommentCategory < ActiveRecord::Base
  has_many :comments
end
