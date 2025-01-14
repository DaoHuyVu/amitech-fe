FROM node:20-alpine AS build
WORKDIR /opt/app
COPY package*.json ./
RUN npm install 
ENV PATH=/opt/node_modules/bin:$PATH
COPY . .

RUN npm run build

FROM nginx:alpine AS final
WORKDIR /opt/app
COPY --from=build /opt/app/build /usr/share/nginx/html/build
CMD ["nginx","-g","daemon off;"]
