FROM node:current-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

# docker build . -t container-name
# docker run -p 3000:3000 nextjs-docker