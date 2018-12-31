# build
FROM node:10.13 as build-image
ENV APP_DIR /usr/app
WORKDIR ${APP_DIR}
COPY . .

RUN yarn install && \
    yarn build && \
    yarn test

# release
FROM node:10.13-alpine
RUN apk add --update --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
ENV APP_DIR /usr/app
WORKDIR ${APP_DIR}
COPY --from=build-image ${APP_DIR}/node_modules ./node_modules
COPY --from=build-image ${APP_DIR}/dist ./dist
COPY --from=build-image ${APP_DIR}/package.json .
USER node
CMD ["npm","start"]