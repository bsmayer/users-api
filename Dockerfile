FROM node:10

RUN npm install -g yarn
RUN npm install -g typescript
RUN npm install -g pm2

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install

COPY src /src
RUN tsc

EXPOSE 8080
CMD [ "pm2-runtime", "start", "./build/index.js" ]