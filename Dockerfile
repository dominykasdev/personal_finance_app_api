FROM node:21.7.3-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]