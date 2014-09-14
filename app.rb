require 'sinatra'
require 'sinatra/contrib/all'
require 'mongo'
require 'digest'
include Mongo

mongo = MongoClient.new
db = mongo['pony']
hourly = db['hourly']
daily = db['daily']
total = db['total']

get '/create' do
  if cookies[:_ibd].nil?
    cookies[:_ibd] = Digest::SHA2.hexdigest Time.now.to_s
  end
  params[:createdAt] = Time.now
  params[:uid] = cookies[:_ibd]
  hourly.insert(params)
  send_file File.expand_path('clear.gif', settings.public_folder)
end
