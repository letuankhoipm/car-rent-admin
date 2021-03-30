FROM node:12-alpine as builder
WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm ci --unsafe-perm
COPY . .
RUN npm run build -- --prod --build-optimizer

FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
