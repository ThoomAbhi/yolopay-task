# Use official Node.js image
FROM node:18-bullseye

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install -g expo-cli && npm install

# Copy the rest of the project
COPY . .

# Expose Expo ports
EXPOSE 19000 19001 19002

# Start the Expo development server
CMD ["npx", "expo", "start", "--tunnel"]
