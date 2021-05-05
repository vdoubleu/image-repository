class CreateImageMetadata < ActiveRecord::Migration[6.1]
  def change
    create_table :image_metadata do |t|
      t.string :imageMetaId
      t.string :userId
      t.text :title
      t.string :imageId

      t.timestamps
    end
  end
end
