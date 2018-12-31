class ChangeFollowsColumnNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :follows, :followeable_id, :followable_id
    rename_column :follows, :followeable_type, :followable_type
  end
end
