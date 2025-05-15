require 'sinatra'
require 'sinatra/json'

set :host_authorization, { permitted_hosts: [] }

get '/' do
  json(message: 'hello')
end
