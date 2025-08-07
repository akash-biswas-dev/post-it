FROM node:22.18.0-bullseye as builder

RUN npm install -g pnpm

WORKDIR /app

COPY ../client .

RUN pnpm install --frozen-lockfile

RUN pnpm build

FROM node:22.18-alpine3.22

WORKDIR /app

COPY ../client/package.json ../client/pnpm-lock.yaml ./

COPY --from=builder /app/dist/client/server .

EXPOSE 4000

ENTRYPOINT [ "node","server.mjs" ]

