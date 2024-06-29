# Use an official Node runtime as the base image
FROM node:20.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Install a simple HTTP server for serving static content
RUN npm install -g serve

# The app binds to port 3000 by default
EXPOSE 3000

# Define the command to run the app using serve
CMD ["serve", "-s", "build", "-l", "3000"]