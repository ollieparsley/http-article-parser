FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Set up dependencies
COPY . .
RUN npm install

# Enable the http port and start the service
EXPOSE 8080
CMD [ "npm", "start" ]