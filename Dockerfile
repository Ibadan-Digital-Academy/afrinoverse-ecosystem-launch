FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source code and build the Vite project
COPY . .
RUN npm run build

# Install the 'serve' package globally
RUN npm install -g serve

# Expose port 3000 to Dokploy
EXPOSE 3000

# Start the server targeting the dist folder 
# The -s flag tells it to act as a Single Page Application (fallback to index.html)
CMD ["serve", "-s", "dist", "-l", "3000"]
