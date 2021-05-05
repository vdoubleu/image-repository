Rails.application.routes.draw do
  get 'images/:userId', to: 'images#show'
  post '/images', to: 'images#add'
  delete '/images/:imageId', to: 'images#delete'

  get 'images/url/:imageId', to: 'images#displayUrl'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
