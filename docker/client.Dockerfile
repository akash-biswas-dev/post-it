FROM node:22.18.0-bullseye as builder

RUN npm install -g pnpm

WORKDIR /app

COPY ../client .

RUN pnpm install --force
RUN pnpm build

# Production image
FROM node:22.18-alpine3.22

RUN apk add --no-cache curl

WORKDIR /app

RUN npm install -g pnpm

COPY ../client/package.json ../client/pnpm-lock.yaml ./

RUN pnpm install 

# Copy server build
COPY --from=builder /app/dist/client . 

EXPOSE 4000

ENTRYPOINT ["node", "server/server.mjs" ]
