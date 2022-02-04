Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, except: [:new, :edit] do 
    resources :comments, only: [:index]
  end
  resources :artworks, except: [:new, :edit] do
    resources :comments, only: [:index]
  end
  resources :artwork_shares, except: [:new, :edit, :update, :show]
  get '/users/:id/artworks', to: 'users#artworks'
  resources :comments, except: [:new, :edit, :update, :show]
  resources :likes, only: [:index, :create, :destroy]









  ##### Remnants from earlier phases
  # get '/users', to: 'users#index', as: 'users'
  # get '/users/:id', to: 'users#show', as: 'user'
  # post '/users', to: 'users#create'
  # patch '/users/:id', to: 'users#patch'
  # delete '/users/:id', to: 'users#destroy'
  # put '/users/:id', to: 'users#update'
  # # get '/users/new', to: 'users#new', as: 'new_user'
  # # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
  

### Target Result
#                     users GET    /users(.:format)                                                                         users#index
#                           POST   /users(.:format)                                                                         users#create
#                  new_user GET    /users/new(.:format)                                                                     users#new
#                 edit_user GET    /users/:id/edit(.:format)                                                                users#edit
#                      user GET    /users/:id(.:format)                                                                     users#show
#                           PATCH  /users/:id(.:format)                                                                     users#update
#                           PUT    /users/:id(.:format)                                                                     users#update
#                           DELETE /users/:id(.:format)


end
