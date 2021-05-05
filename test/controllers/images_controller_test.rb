require "./test/test_helper"

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test "upload, get and delete images" do
    post '/images',  :params => { :userId => 123, :name => "hello1.png" } 
    assert_response :success

    post '/images',  :params => { :userId => 123, :name => "hello2.png" } 
    assert_response :success

    get '/images/123'
    assert_response :success
    body = JSON.parse(response.body)
    assert body.kind_of?(Array)

    body.each { |b| 
      assert b.include? "imageId"
      assert b.include? "title"
    }

    body.each { |b|
      delete "/images/#{b["imageId"]}"
      assert_response :success
    }
    
  end
end
