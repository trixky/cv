# Shared
FROM node:16-alpine3.15 as base

WORKDIR /app
COPY ./package.json .

COPY --chown=node:node . .

RUN npm install

# Production
FROM node:16-alpine3.15 as production

RUN apk add dumb-init

WORKDIR /app
COPY --chown=node:node --from=base /app .

RUN npm run build

ENTRYPOINT dumb-init node ./build
