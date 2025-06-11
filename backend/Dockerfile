FROM node:18

WORKDIR /app

# COPY package*.json ./
COPY . .
RUN npm install
RUN npm i --save-dev @types/node
RUN npm install -g ts-node typescript


EXPOSE 3000

CMD ["ts-node", "src/index.ts"]
