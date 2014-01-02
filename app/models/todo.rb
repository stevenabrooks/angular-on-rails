class Todo < ActiveRecord::Base
  attr_accessible :description, :importance, :title, :done
end
