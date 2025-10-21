module.exports = {
  apps: [
    {
      name: 'the-real-objects-dev',
      script: 'npm',
      args: 'run dev',
      cwd: '/home/user/webapp/The-Real-Objects',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    }
  ]
};