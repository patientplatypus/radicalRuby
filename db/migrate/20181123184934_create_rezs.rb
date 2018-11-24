class CreateRezs < ActiveRecord::Migration[5.2]
  def change
    create_table :rezs do |t|
      t.string :title
      t.text :text

      t.timestamps
    end
  end
end
