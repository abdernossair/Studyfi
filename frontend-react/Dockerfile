FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install react-scripts --save-dev
RUN npm install
COPY . .
RUN npm run build

# Pour servir le build via un serveur Nginx par exemple
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
