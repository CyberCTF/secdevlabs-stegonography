# Upstream's deployments/api.Dockerfile with these changes: the sources are copied from
# app/app/ (upstream's build context is the app folder); and the app's .env, which upstream's
# deployments/generate-env.sh writes at `make install` with a random JWT secret, is written with a
# fixed secret (the app refuses to start without it: dotenv-safe). The database variables that
# script writes to deployments/.dockers.env are empty and unused (the app connects to
# mongodb://db:27017/stego), so they are left out. Before the app, create-users.js creates the
# users collection, which avoids a race in upstream's index.js that crashes its first start (see
# that file). Dependencies come from upstream's package-lock.json.
FROM docker.io/library/node:8.15.1-alpine
WORKDIR /app
ADD app/app/ /app
RUN printf '#.env\nSECRET=2034119875\n' > /app/.env
RUN apk update && \
    npm  install package.json
COPY create-users.js /usr/local/lib/create-users.js
CMD node /usr/local/lib/create-users.js; node index.js
