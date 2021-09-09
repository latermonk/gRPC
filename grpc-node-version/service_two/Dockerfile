FROM node:8.12 as node

WORKDIR /app/service_two
COPY package.json /app/service_two
RUN npm install
COPY . /app/service_two
EXPOSE 4600
CMD ["npm", "start"]