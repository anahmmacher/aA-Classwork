class Adduserid < ActiveRecord::Migration[5.2]
  def change
    add_column :polls, :creator_id, :integer, null:false
  end
end
