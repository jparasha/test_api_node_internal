FROM openjdk

#copy jars
COPY ./add.jar /home/add.jar
COPY ./subtract.jar /home/subtract.jar

#RUN apt-get update

# install JAVA
# RUN add-apt-repository ppa:openjdk-r/ppa
# RUN apt-get update
# RUN apt-get install openjdk-8-jre

# install node
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash 
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000

RUN ls -l
CMD [ "node", "index.js" ]