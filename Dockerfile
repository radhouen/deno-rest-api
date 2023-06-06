FROM debian:11 

EXPOSE 8000

WORKDIR /app

USER deno

COPY . .

RUN deno install --allow-net deno

RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]
