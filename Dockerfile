FROM node:13-alpine
 
WORKDIR /app
 
COPY package*.json ./
 
RUN yarn
 
COPY . /app
 
# RUN npx tsc
# RUN npm run build
# RUN npx prettier server.js --write
# RUN npx eslint server.js --fix --quiet
 
EXPOSE 3000
 
CMD yarn servestart