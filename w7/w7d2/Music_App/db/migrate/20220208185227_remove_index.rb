class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :session_token
  end
end
