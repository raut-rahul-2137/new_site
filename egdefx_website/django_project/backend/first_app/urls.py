from django.urls import path
from . import views
from .views import trade_history_by_user

urlpatterns = [
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('trading-config/', views.trading_config, name='trading_config'),
    path('contact/', views.contact_submit, name='contact_submit'),
    path('franchise/', views.franchise_submit, name='franchise_submit'),
    path('broker/', views.broker_submit, name='broker_submit'),
    
    # Admin panel endpoints
    path('users/', views.get_users, name='get_users'),
    path('contacts/', views.get_contacts, name='get_contacts'),
    path('franchises/', views.get_franchises, name='get_franchises'),
    path('franchises/<int:franchise_id>/', views.update_franchise_status, name='update_franchise_status'),
    path('read-status/<str:model_type>/<int:item_id>/', views.update_read_status, name='update_read_status'),
    path('check-admin/<int:user_id>/', views.check_admin, name='check_admin'),
    path('brokers/', views.get_brokers, name='get_brokers'),
    path('trade-history/<str:forgingkey>/', trade_history_by_user, name='trade-history-by-user'),
] 