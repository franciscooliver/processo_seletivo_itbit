FROM nginx

RUN apt-get update -q && apt-get install -y curl apt-transport-https ca-certificates software-properties-common gnupg git
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs build-essential

WORKDIR /usr/app/

COPY package*.json /usr/app/

COPY default.conf /etc/nginx/conf.d/default.conf

RUN npm install

COPY . .

# COPY start.sh /usr/local/bin/start
# RUN chmod +x /usr/local/bin/start

CMD [ "npm", "run", "start" ]

EXPOSE 4202