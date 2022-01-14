FROM node:15.13 

WORKDIR /app

COPY . .

ARG NPM_AUTH_TOKEN
RUN echo $NPM_AUTH_TOKEN

RUN NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

RUN yarn generate
