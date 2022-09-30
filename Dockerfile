FROM node:lts-alpine

WORKDIR /app

RUN npm install -g http-server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run dist

EXPOSE 8080

CMD ["http-server", "dist", "-p", "8080"]