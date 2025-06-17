# Use stable Node version supported by Expo (Node 18 works fine)
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install project dependencies
RUN npm install --legacy-peer-deps


# Copy the rest of the code
COPY . .

# Expose required ports
EXPOSE 19000 19001 19002 19006

# Use local expo CLI via npx, bind to 0.0.0.0
CMD ["npx", "expo", "start", "--web", "--host", "0.0.0.0"]
