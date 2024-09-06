FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install axios

RUN npm install --save @fortawesome/fontawesome-free

RUN npm install -D tailwindcss postcss autoprefixer

RUN npx tailwindcss init -p

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
