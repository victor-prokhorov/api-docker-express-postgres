FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN yarn
COPY . . 

FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN yarn

COPY --from=builder /usr/app/ ./

COPY config.docker.json ./config.json
# COPY .env .

EXPOSE 3000
 
CMD yarn servestart

