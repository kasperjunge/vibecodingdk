# Deployment Guide

## Docker Compose Deployment

This application is fully containerized and can be deployed using Docker Compose.

### Prerequisites

- Docker Engine 20.10+
- Docker Compose V2
- Git

### Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd vibecodingdk
```

2. Create environment file:
```bash
cp .env.docker .env
```

3. Configure environment variables in `.env`:
```bash
# Required: Set secure passwords
POSTGRES_PASSWORD=your_secure_password
SECRET_KEY=your_secure_secret_key
ADMIN_PASSWORD=your_admin_password

# Required: Configure email service
RESEND_API_KEY=your_resend_api_key
MAIL_FROM=noreply@yourdomain.com
```

4. Start the stack:
```bash
docker-compose up -d
```

5. Access the application:
- Frontend: http://localhost (port 80)
- Backend API: http://localhost:8000
- Database: localhost:5432

### Services

#### Frontend (React + Nginx)
- Built with Vite and served by Nginx
- Automatically proxies `/api` requests to backend
- Health check endpoint: `/health`

#### Backend (FastAPI)
- Python FastAPI application
- Runs database migrations automatically on startup
- Health check endpoint: `/health`

#### Database (PostgreSQL 16)
- Persistent data stored in Docker volume `postgres_data`
- Health checks ensure readiness before backend starts

### Deployment on Coolify

[Coolify](https://coolify.io/) is a self-hosted platform that simplifies Docker deployments.

#### Prerequisites

- Coolify instance running
- Domain name pointed to your Coolify server
- Git repository access configured in Coolify

#### Setup Steps

1. **Create New Project** in Coolify dashboard

2. **Add Application**:
   - Select "Docker Compose" as the build pack
   - Connect your Git repository
   - Set the branch (e.g., `main` or `feature/docker-compose-setup`)

3. **Configure Environment Variables**:
   Navigate to the Environment Variables section and add:
   
   ```
   ENVIRONMENT=prod
   POSTGRES_DB=vibecodingdk
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=<generate-secure-password>
   SECRET_KEY=<generate-secure-key>
   ADMIN_EMAIL=admin@yourdomain.com
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=<generate-secure-password>
   ADMIN_FIRST_NAME=Admin
   ADMIN_LAST_NAME=User
   EMAIL_PROVIDER=resend
   MAIL_FROM=noreply@yourdomain.com
   MAIL_FROM_NAME=Vibe Coding DK
   RESEND_API_KEY=<your-resend-api-key>
   SLACK_WEBHOOK_URL=<optional>
   ```

4. **Configure Domains**:
   - Set your custom domain (e.g., `yourdomain.com`)
   - Coolify will automatically handle SSL certificates via Let's Encrypt

5. **Deploy**:
   - Click "Deploy" button
   - Coolify will:
     - Clone the repository
     - Build Docker images
     - Start the containers
     - Configure reverse proxy
     - Issue SSL certificates

6. **Monitor**:
   - Check logs in Coolify dashboard
   - Verify all containers are healthy
   - Test frontend and backend endpoints

#### Health Checks

Coolify uses the health checks defined in `docker-compose.yml`:
- **Database**: `pg_isready` check every 10s
- **Backend**: HTTP check on `/health` every 30s
- **Frontend**: HTTP check on `/health` every 30s

#### Persistent Data

The PostgreSQL database data is stored in a Docker volume (`postgres_data`), which persists across deployments and container restarts.

#### Updating the Application

1. Push changes to your Git repository
2. In Coolify dashboard, click "Redeploy"
3. Coolify will:
   - Pull latest changes
   - Rebuild containers that changed
   - Perform rolling restart (zero-downtime)

### Manual Deployment (VPS)

If deploying to a VPS without Coolify:

1. Install Docker and Docker Compose on your server

2. Clone the repository:
```bash
git clone <repository-url>
cd vibecodingdk
```

3. Create and configure `.env` file as shown above

4. Start the application:
```bash
docker-compose up -d
```

5. Configure reverse proxy (Nginx/Caddy) for:
   - Frontend: Proxy to `http://localhost:80`
   - Backend: Proxy to `http://localhost:8000`
   - SSL certificates with Let's Encrypt

Example Nginx configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Maintenance

#### View Logs
```bash
docker-compose logs -f [service_name]
```

#### Restart Services
```bash
docker-compose restart [service_name]
```

#### Backup Database
```bash
docker exec vibecodingdk-db pg_dump -U postgres vibecodingdk > backup.sql
```

#### Restore Database
```bash
docker exec -i vibecodingdk-db psql -U postgres vibecodingdk < backup.sql
```

#### Update Application
```bash
git pull
docker-compose down
docker-compose build
docker-compose up -d
```

### Troubleshooting

#### Backend container keeps restarting
- Check logs: `docker logs vibecodingdk-backend`
- Verify database is healthy: `docker ps`
- Check environment variables are set correctly

#### Database connection errors
- Ensure `POSTGRES_HOST=db` in docker-compose environment
- Check database is healthy: `docker exec vibecodingdk-db pg_isready -U postgres`

#### Frontend cannot reach backend
- Check nginx configuration in `frontend/nginx.conf`
- Verify backend is running: `curl http://localhost:8000/health`

### Security Considerations

1. **Change Default Passwords**: Always use secure, randomly generated passwords
2. **Environment Variables**: Never commit `.env` file to version control
3. **SSL/TLS**: Always use HTTPS in production
4. **Database**: Restrict PostgreSQL port access (remove `ports` section in production)
5. **Updates**: Keep Docker images updated regularly

### Performance Optimization

1. **Database**: Configure PostgreSQL for your workload in docker-compose.yml:
```yaml
command: postgres -c max_connections=100 -c shared_buffers=256MB
```

2. **Frontend**: Static assets are cached for 1 year (configured in nginx.conf)

3. **Backend**: Scale backend containers:
```bash
docker-compose up -d --scale backend=3
```

### Support

For issues or questions:
- Check application logs
- Review this documentation
- Open an issue in the repository
