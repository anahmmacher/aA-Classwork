class AddingMinToBenches < ActiveRecord::Migration[5.2]
  def change

    change_column_default :benches, :seating, 2
  end
end
