class Addtitlecolumn < ActiveRecord::Migration[5.2]
  def change
    add_column :polls, :title, :string, null:false
  end
end
