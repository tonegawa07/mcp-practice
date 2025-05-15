require 'sinatra'
require 'sinatra/json'
require_relative 'cs/base'

set :host_authorization, { permitted_hosts: [] }

get '/' do
  json(message: 'hello')
end

get '/to_param/:id' do
  obfuscated_id = Cs::Base.to_param(params[:id])
  json(obfuscated_id: obfuscated_id)
end

get '/deobfuscatable/:id' do
  deobfuscatable_id = Cs::Base.deobfuscatable(params[:id]).to_i.to_s
  json(deobfuscatable_id: deobfuscatable_id)
end
