FROM node AS build
RUN yarn global add create-react-app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . /app

RUN yarn build

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build/ ./
EXPOSE 80

RUN ls /usr/share/nginx/