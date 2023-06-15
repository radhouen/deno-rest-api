FROM denoland/deno:1.19.0

EXPOSE 8000

WORKDIR /app

USER deno

COPY . .

RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]
