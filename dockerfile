

# FROM node:latest

# RUN mkdir /app

# WORKDIR /app

# RUN mkdir /.next

# COPY ./.next ./.next

# COPY package.json ./

# COPY package-lock.json ./

# RUN npm install

# EXPOSE 15777

# CMD ["npm", "run", "start"]


FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY ./ngnix.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]