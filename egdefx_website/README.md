# EgdeFX Website

A full-stack trading platform built with React frontend and Django backend, ready for production deployment on Digital Ocean.

## 🏗️ Architecture

**Frontend:**
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- Django REST API for authentication

**Backend:**
- Django 5.0 with Django REST Framework
- PostgreSQL database
- WhiteNoise for static file serving
- Gunicorn WSGI server

**Infrastructure:**
- Docker & Docker Compose
- Nginx reverse proxy
- Let's Encrypt SSL certificates
- Digital Ocean deployment ready

## 🚀 Quick Start (Development)

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+

### Automated Setup
```bash
# Run the development setup script
./dev-setup.sh
```

### Manual Setup

**Frontend:**
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

**Backend:**
```bash
# Navigate to backend directory
cd django_project/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (optional - script creates admin/admin123)
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

## 🌐 Production Deployment on Digital Ocean

### Prerequisites
- Digital Ocean Droplet (Ubuntu 20.04+ recommended)
- Domain name pointed to your droplet's IP
- SSH access to your droplet

### Deployment Steps

1. **Clone the repository on your droplet:**
```bash
git clone <your-repo-url>
cd egdefx_website
```

2. **Configure environment variables:**
```bash
# Copy environment template
cp .env.example .env

# Edit with your actual values
nano .env
```

Required environment variables:
- `DOMAIN`: Your domain name (e.g., example.com)
- `EMAIL`: Your email for SSL certificates
- `DJANGO_SECRET_KEY`: Generate a secure secret key
- `DB_PASSWORD`: Secure database password

3. **Run the deployment script:**
```bash
sudo ./deploy.sh
```

The script will:
- Install Docker and Docker Compose
- Configure firewall settings
- Build and start all services
- Set up SSL certificates
- Create database and run migrations
- Create a default admin user

4. **Configure DNS:**
Point your domain's A record to your droplet's IP address.

## 🔧 Configuration

### Environment Variables

**Root `.env` file:**
```env
DOMAIN=your-domain.com
EMAIL=your-email@example.com
DJANGO_SECRET_KEY=your-secret-key
DB_NAME=egdefx_db
DB_USER=egdefx_user
DB_PASSWORD=your-password
VITE_API_URL=https://your-domain.com/api
```

## 📁 Project Structure

```
egdefx_website/
├── src/                          # React frontend source
├── django_project/backend/       # Django backend
├── public/                       # Static assets
├── docker-compose.yml           # Docker orchestration
├── Dockerfile                   # Frontend Docker image
├── nginx.conf                   # Nginx configuration
├── deploy.sh                    # Production deployment script
├── dev-setup.sh                 # Development setup script
└── .env.example                 # Environment template
```

## 🛠️ Development Commands

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend
```bash
python manage.py runserver       # Start development server
python manage.py migrate         # Run database migrations
python manage.py collectstatic   # Collect static files
python manage.py test            # Run tests
```

### Docker
```bash
docker-compose up -d             # Start all services
docker-compose down              # Stop all services
docker-compose logs              # View logs
docker-compose exec backend bash # Access backend container
```

## 🔒 Security Features

- HTTPS/SSL encryption with Let's Encrypt
- Security headers (HSTS, XSS protection, etc.)
- CORS configuration
- Django security middleware
- PostgreSQL for production database
- Environment-based configuration

## 🧹 Project Cleanup

This project has been cleaned up to remove:
- ✅ Redundant deployment scripts (kept only `deploy.sh`)
- ✅ Duplicate requirements files
- ✅ Build artifacts (`dist/`, `node_modules/`)
- ✅ Virtual environments (`venv/`)
- ✅ Database files (`db.sqlite3`)
- ✅ Development Docker files
- ✅ Large lock files (`package-lock.json`)
- ✅ Unused Supabase integration

All unnecessary files are now properly ignored via `.gitignore`.

## 📝 Notes

- The project uses `bun.lockb` for dependency management (faster than npm)
- Development setup is automated with `dev-setup.sh`
- Production deployment is streamlined with a single `deploy.sh` script
- All sensitive files are properly excluded from version control
- Authentication is handled by Django REST API (no external auth providers)
