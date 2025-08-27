# Use Node.js 18 LTS
FROM node:18

# Set working directory
WORKDIR /app

# -----------------------------
# Install root dependencies (if any)
# -----------------------------
COPY package*.json ./
RUN npm install

# -----------------------------
# Install server dependencies
# -----------------------------
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install

# -----------------------------
# Install client dependencies
# -----------------------------
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install

# -----------------------------
# Install shared dependencies
# -----------------------------
COPY shared/package*.json ./shared/
WORKDIR /app/shared
RUN npm install

# -----------------------------
# Copy the rest of the code
# -----------------------------
WORKDIR /app
COPY . .

# -----------------------------
# Build client and server
# -----------------------------
WORKDIR /app/client
RUN npm run build

WORKDIR /app/server
RUN npm run build

# -----------------------------
# Expose port for Render
# -----------------------------
EXPOSE 3000

# -----------------------------
# Start server
# -----------------------------
WORKDIR /app/server
CMD ["npm", "start"]