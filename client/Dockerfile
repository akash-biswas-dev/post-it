FROM node:22.18.0-bullseye as builder

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm build

FROM node:22.18-alpine3.22 as runner

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY --from=builder /app/dist/server .

EXPOSE 4000

ENTRYPOINT [ "node","server.mjs" ]

