FROM node:15.12.0-alpine3.10
WORKDIR /usr/src

# Install Dependencies
COPY package*.json ./
RUN npm install

# Build TypeScript
COPY . . 
RUN npm run build

EXPOSE 4000
CMD ["sh", "start.sh"]