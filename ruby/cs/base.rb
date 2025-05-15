require 'active_record'
require 'obfuscatable'

module Cs
end

class Cs::Base < ActiveRecord::Base
  obfuscatable

  def self.to_param(id)
    Obfuscatable.hide(id, obfuscatable_spin)
  end
end
