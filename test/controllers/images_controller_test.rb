require "test_helper"

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get images_add_url
    assert_response :success
  end

  test "should get delete" do
    get images_delete_url
    assert_response :success
  end

  test "should get show" do
    get images_show_url
    assert_response :success
  end
end
