class ColumnIdTypeChange < ActiveRecord::Migration[6.1]
  def change
    change_column(:image_metadata, :imageId, :integer)
    change_column(:image_metadata, :imageMetaId, :integer)
    change_column(:image_metadata, :userId, :integer)
  end
end
