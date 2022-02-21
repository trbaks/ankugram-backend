FROM node:14

# setting the work direcotry
WORKDIR /usr/src/app

ENV PORT=5000 DB_USERNAME=YOUR_USERNAME DB_PASSWORD=YOUR_PASSWORD GEO_CODE_API_KEY=YOUR_API_KEY JWT_SIGN_KEY=YOUR_JWT_SECRET

# copy package.json
COPY ./package.json .

# install dependencies
RUN npm install

# COPY files
COPY . .

EXPOSE 5000

RUN node -v

CMD ["node","app.js"]
