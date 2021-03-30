FROM node:12-alpine as builder
LABEL stage=builder
WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build -- --prod --build-optimizer

FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
