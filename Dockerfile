FROM node:16-alpine3.12

USER node

COPY entrypoint.sh /

EXPOSE ${PORT}

CMD [ "sh", "entrypoint.sh" ]