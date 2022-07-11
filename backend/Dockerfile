FROM node:16

WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm install

# RUN npm ci --only=production

COPY . .

COPY ./.docker/start.sh /usr/local/bin/start
RUN chmod +x /usr/local/bin/start

CMD ["start"] 

EXPOSE 3000

