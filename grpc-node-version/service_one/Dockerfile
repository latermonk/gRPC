FROM node:8.12 as node

WORKDIR /app/service_one
COPY package.json /app/service_one
RUN npm install
COPY . /app/service_one
EXPOSE 4500
CMD ["npm", "start"]
