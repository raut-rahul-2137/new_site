from django.contrib import admin
from .models import Registration, TradingConfiguration, Contact, Franchise, Broker, TradeHistory

@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'name', 'phone', 'created_at', 'updated_at')
    search_fields = ('username', 'email', 'name')
    list_filter = ('created_at', 'updated_at')

@admin.register(TradingConfiguration)
class TradingConfigurationAdmin(admin.ModelAdmin):
    list_display = ('get_username', 'category', 'symbol', 'value', 'enabled', 'created_at', 'updated_at')
    list_filter = ('category', 'enabled', 'created_at', 'updated_at')
    search_fields = ('user__username', 'symbol')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')

    def get_username(self, obj):
        return obj.user.username
    get_username.short_description = 'Username'
    get_username.admin_order_field = 'user__username'

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)
    list_editable = ('is_read',)

class FranchiseAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'status', 'created_at', 'is_read')
    list_filter = ('status', 'is_read', 'created_at')
    search_fields = ('name', 'email', 'phone', 'message')
    readonly_fields = ('created_at',)
    list_editable = ('status', 'is_read')

class BrokerAdmin(admin.ModelAdmin):
    list_display = ('get_username', 'broker_name', 'mt5_login', 'mt5_server', 'created_at')
    search_fields = ('user__username', 'broker_name', 'mt5_login', 'mt5_server')
    list_filter = ('broker_name', 'created_at')
    readonly_fields = ('created_at',)

    def get_username(self, obj):
        return obj.user.username
    get_username.short_description = 'Username'
    get_username.admin_order_field = 'user__username'

admin.site.register(Contact, ContactAdmin)
admin.site.register(Franchise, FranchiseAdmin)
admin.site.register(Broker, BrokerAdmin)

@admin.register(TradeHistory)
class TradeHistoryAdmin(admin.ModelAdmin):
    list_display = ('forgingkey', 'symbol', 'type', 'entry_time', 'exit_time', 'pl', 'cpl', 'created_at')
    search_fields = ('forgingkey', 'symbol', 'type')
    list_filter = ('forgingkey', 'symbol', 'type', 'created_at')
