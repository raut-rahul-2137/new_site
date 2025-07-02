from django.db import models
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.

class Registration(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=128, default=make_password('default_password'))  # Store hashed password with default
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return f"Username: {self.username} | Email: {self.email} | Name: {self.name} | Phone: {self.phone} | Password: {self.password} | Created: {self.created_at.strftime('%Y-%m-%d %H:%M')} | Updated: {self.updated_at.strftime('%Y-%m-%d %H:%M')}"

    class Meta:
        verbose_name = "Registration"
        verbose_name_plural = "Registrations"

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.email} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        ordering = ['-created_at']

class Franchise(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    status = models.CharField(
        max_length=20,
        choices=[
            ('PENDING', 'Pending'),
            ('IN_PROGRESS', 'In Progress'),
            ('CONTACTED', 'Contacted'),
            ('REJECTED', 'Rejected'),
            ('APPROVED', 'Approved')
        ],
        default='PENDING'
    )

    def __str__(self):
        return f"{self.name} - {self.email} - {self.status} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"

    class Meta:
        verbose_name = "Franchise"
        verbose_name_plural = "Franchises"
        ordering = ['-created_at']

class TradingConfiguration(models.Model):
    CATEGORY_CHOICES = [
        ('FOREX', 'Forex'),
        ('COMEX', 'Comex'),
        ('STOCKS', 'Stocks'),
        ('CRYPTO', 'Crypto'),
    ]

    user = models.ForeignKey(Registration, on_delete=models.CASCADE, related_name='trading_configs')
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    symbol = models.CharField(max_length=20)
    value = models.DecimalField(max_digits=10, decimal_places=2)
    enabled = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ['user', 'category', 'symbol']
        ordering = ['category', 'symbol']

    def __str__(self):
        return f"{self.user.username} - {self.category} - {self.symbol}"

class Broker(models.Model):
    user = models.ForeignKey(Registration, on_delete=models.CASCADE, related_name='brokers')
    mt5_login = models.CharField(max_length=100)
    mt5_password = models.CharField(max_length=128)  # Store hashed or encrypted in production
    mt5_server = models.CharField(max_length=100)
    broker_name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.broker_name} - {self.mt5_login}"

    class Meta:
        verbose_name = "Broker"
        verbose_name_plural = "Brokers"
        ordering = ['-created_at']

class TradeHistory(models.Model):
    forgingkey = models.CharField(max_length=100, default="")  # Username stored as forgingkey
    entry_time = models.DateTimeField()
    symbol = models.CharField(max_length=20)
    type = models.CharField(max_length=20)
    quantity = models.DecimalField(max_digits=12, decimal_places=4)
    entry_price = models.DecimalField(max_digits=16, decimal_places=4)
    exit_time = models.DateTimeField()
    exit_price = models.DecimalField(max_digits=16, decimal_places=4)
    pl = models.DecimalField(max_digits=16, decimal_places=4)
    cpl = models.DecimalField(max_digits=16, decimal_places=4)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.forgingkey} | {self.symbol} | {self.type} | {self.entry_time}"

    class Meta:
        verbose_name = "Trade History"
        verbose_name_plural = "Trade Histories"
        ordering = ['-created_at']
