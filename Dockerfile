FROM node
MAINTAINER Jeremiah_McCurdy
ADD package.json package.json
RUN npm install
ADD . .
CMD ["gulp"]
