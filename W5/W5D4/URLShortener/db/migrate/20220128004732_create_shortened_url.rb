class CreateShortenedUrl < ActiveRecord::Migration[5.2]
  def change
    create_table :shortened_urls do |t|
      t.text :long_url, null:false
      t.string :short_url, null:false
    end
    add_index :shortened_urls, :long_url, unique: true
  end
end
