FROM node:16.13.2

# for caching
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
# also lets try this for npm5+
# COPY package*.json /app/
RUN cd /app && npm install

# get the files
WORKDIR /app/lib
EXPOSE 80
COPY lib /app/lib

CMD ["start"]