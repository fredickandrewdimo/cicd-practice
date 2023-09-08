# Use the official Node.js runtime as a parent image
FROM node:latest

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Express app is running on (3545 in your case)
EXPOSE 3545

# Define the command to start your Express app
CMD ["node", "server.js"]
