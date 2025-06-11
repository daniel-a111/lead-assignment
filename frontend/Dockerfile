FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN bash docker-entrypoint.bash

EXPOSE 8080

CMD ["npm", "run", "dev"]
