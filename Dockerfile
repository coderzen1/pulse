FROM node:argon
MAINTAINER Jeremiah_McCurdy

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/sr/app/
RUN npm install --global gulp-cli
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD ["gulp"]
