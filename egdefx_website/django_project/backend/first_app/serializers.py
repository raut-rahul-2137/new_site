from rest_framework import serializers
from .models import Registration, TradingConfiguration, Contact, Franchise, Broker, TradeHistory
from django.contrib.auth.hashers import make_password

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['username', 'email', 'name', 'phone', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data['password'] = make_password(password)
        return super().create(validated_data)

class TradingConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TradingConfiguration
        fields = ['user', 'category', 'symbol', 'value', 'enabled']

class TradingConfigurationListSerializer(serializers.Serializer):
    FOREX = TradingConfigurationSerializer(many=True)
    COMEX = TradingConfigurationSerializer(many=True)
    STOCKS = TradingConfigurationSerializer(many=True)
    CRYPTO = TradingConfigurationSerializer(many=True)

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'message']

class FranchiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Franchise
        fields = ['name', 'email', 'phone', 'message']

class BrokerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Broker
        fields = ['user', 'mt5_login', 'mt5_password', 'mt5_server', 'broker_name', 'created_at']

class TradeHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TradeHistory
        fields = '__all__' 