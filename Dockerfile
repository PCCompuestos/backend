# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy current directory to /app
COPY . .

# Install dependencies
RUN npm install

# Expose the port that the app will run on
EXPOSE 3001

# Command to run the application
CMD ["node", "app.js"]
