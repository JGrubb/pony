require 'sinatra'
require 'sinatra/contrib/all'
require 'mongo'
require 'securerandom'
include Mongo

mongo = MongoClient.new
db = mongo['pony']
pings = db['pings']

get '/call' do
  if cookies[:_ibd].nil?
    cookies[:_ibd] = SecureRandom.uuid
  end
  params[:createdAt] = Time.now
  params[:uid] = cookies[:_ibd]

  pings.ensure_index(:createdAt, expireAfterSeconds: 86400)
  pings.ensure_index(:uid)
  pings.ensure_index(:h)
  pings.ensure_index(:p)
  pings.insert(params)

  send_file File.expand_path('clear.gif', settings.public_folder)
end
