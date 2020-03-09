FROM node:13.8-alpine

COPY . /my_app

WORKDIR /my_app

ENV NODE_ENV=production 

RUN npm install --dev --silent 

RUN npm run heroku-postbuild

EXPOSE 5000

CMD ["npm", "start"]