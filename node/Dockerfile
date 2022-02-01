FROM node:16.13.2

WORKDIR /app/lib

# for caching
COPY package.json /app/package.json
# also lets try this for npm5+
# COPY package*.json /app/
RUN cd /app && npm install

# get the files
COPY lib /app/lib

EXPOSE 8080

CMD [ "npm", "start" ]