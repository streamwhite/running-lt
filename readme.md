# Running the Script with PM2

To ensure the script runs continuously, use PM2. Here are the commands to manage the script with PM2:

- Start the script and enable watching for changes:

  ```sh
  pm2 start index.mjs --watch
  ```

- Stop the script:

  ```sh
  pm2 stop index.mjs
  ```

- Check the script's status:

  ```sh
  pm2 status
  ```

Note: The subdomain should generally follow the format `description_uuid` to ensure uniqueness.
