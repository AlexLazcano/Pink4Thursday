FROM node:15.12.0-alpine3.10
WORKDIR /home/server

# Install Dependencies
COPY package*.json ./
RUN npm install

# Build TypeScript
COPY . . 
RUN npm run build

EXPOSE 4000
CMD ./start.sh