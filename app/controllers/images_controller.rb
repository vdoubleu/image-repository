class ImagesController < ActionController::API
  def add
    @img = ImageMetadatum.create(
      :userId => params[:userId], 
      :title => params[:name]
    )
    @img.file.attach(params[:file])

    render :json => { :res => "create success" }
  end

  def delete
    id = params[:imageId]
    @img = ImageMetadatum.find(id)
    @img.file.destroy
    @img.delete

    render :json => { :results => "delete success" }
  end

  def show
    givenUserId = params[:userId].to_i

    results = ImageMetadatum
      .where(userId: givenUserId)
      .map{|img| { 
        :title => img[:title],
        :imageId => img[:id]
      }}

    render :json => results
  end

  def displayUrl
    requestedImageId = params[:imageId].to_i
    @img_path = ImageMetadatum.find(requestedImageId).image_path

    send_file open(@img_path, "rb")
  end
end
