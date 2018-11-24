Rails.application.routes.draw do
  get 'about/index'
  match "/about" => "about#index", :via => 'get'
  get 'welcome/index'
  resources :rez
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
