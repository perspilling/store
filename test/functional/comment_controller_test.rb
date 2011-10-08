require 'test_helper'

class CommentControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

end
