#!/bin/bash

# Development Setup Script for EgdeFX Website

set -e

echo "🚀 Setting up development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 first."
    exit 1
fi

echo "📦 Installing frontend dependencies..."
npm install

echo "🐍 Setting up Python virtual environment..."
cd django_project/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements-dev.txt
cd ../..

echo "🗄️ Setting up database..."
cd django_project/backend
source venv/bin/activate
python manage.py migrate
python manage.py shell -c "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
    print('Superuser created: admin/admin123')
else:
    print('Superuser already exists')
"
cd ../..

echo "✅ Development environment setup completed!"
echo ""
echo "📝 To start development:"
echo "1. Frontend: npm run dev"
echo "2. Backend: cd django_project/backend && source venv/bin/activate && python manage.py runserver"
echo ""
echo "🔧 Admin panel: http://localhost:8000/admin (admin/admin123)" 