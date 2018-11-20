class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :followeable_id
      t.string :followeable_type
      t.timestamps
    end
  end
end
