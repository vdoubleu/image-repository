class ImageMetadatum < ApplicationRecord
  has_one_attached :file

  def image_path
    ActiveStorage::Blob.service.path_for(file.key)
  end
end
