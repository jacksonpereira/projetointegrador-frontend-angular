FROM node:alpine

WORKDIR /app

ADD ./package.json /app

RUN npm i

# RUN yarn global add @nestjs/cli

ADD ./ /app

RUN npm run build

CMD ["node", "dist/index.js"]