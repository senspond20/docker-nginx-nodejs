FROM node:8
COPY . .
RUN npm install
EXPOSE 5001 5002 5003
WORKDIR /
 
CMD npm start;