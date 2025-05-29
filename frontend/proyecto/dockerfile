FROM node:18-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/appangular/browser /usr/share/nginx/html

EXPOSE 80