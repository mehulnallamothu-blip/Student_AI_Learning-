# Use Node.js 18 LTS
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files first (for caching npm install)
COPY package*.json ./
COPY server/package*.json ./server/
COPY client/package*.json ./client/
COPY shared/package*.json ./shared/

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build client + server
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
