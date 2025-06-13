FROM node:18.20.2-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production

FROM node:18.20.2-alpine AS runtime
WORKDIR /app
RUN apk update && apk upgrade
COPY --from=builder /app/node_modules ./node_modules
COPY index.js .
COPY public ./public

EXPOSE 3000
CMD ["node", "index.js"]
