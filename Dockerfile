FROM nodesource/node:4.0
MAINTAINER Jeremiah_McCurdy
ADD package.json package.json
RUN npm install --global gulp
RUN npm install
ADD . .
CMD ["gulp"]
