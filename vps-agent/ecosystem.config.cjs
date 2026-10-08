module.exports = {
  apps: [
    {
      name: 'idg-youtube-agent',
      script: './index.js',
      watch: false,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
