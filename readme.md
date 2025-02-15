# Running the Script with PM2

To keep the script running continuously, you will use PM2. Below are the commands to manage the script with PM2:

- Start the script and watch for changes:

  ```sh
  pm2 start index.mjs --watch
  ```

- Stop the script:

  ```sh
  pm2 stop index.mjs
  ```

- Check the status of the script:

  ```sh
  pm2 status
  ```
