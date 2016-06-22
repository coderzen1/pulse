FROM nodesource/node:4.0
MAINTAINER Jeremiah_McCurdy
COPY package.json
RUN npm install --global gulp-cli
ADD . .
CMD ["gulp"]
