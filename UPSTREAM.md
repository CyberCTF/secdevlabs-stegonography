# Upstream

| | |
| --- | --- |
| Project | secDevLabs (Globo.com) |
| Repository | https://github.com/globocom/secDevLabs |
| App | `owasp-top10-2021-apps/a5/stegonography` |
| Version | master (secDevLabs has no releases) |
| Commit | 10be438496e928c66567749f0aaf0bb976052bc9 |
| Licence | BSD-3-Clause |

The app folder [`owasp-top10-2021-apps/a5/stegonography`](https://github.com/globocom/secDevLabs/tree/10be438496e928c66567749f0aaf0bb976052bc9/owasp-top10-2021-apps/a5/stegonography) of that commit is vendored unchanged, without its Git history,
split so that each part sits in the build folder of the machine that uses it:

| Upstream path (in the app folder) | Here |
| --- | --- |
| everything | `build/app/app/` |

Each `build/<machine>/Dockerfile` says in its header comment how it differs from upstream:

- `build/app/`: upstream's `deployments/api.Dockerfile` writing the app's `.env` with a fixed JWT secret (upstream's `deployments/generate-env.sh` writes a random one at `make install`; the app refuses to start without it). The database variables that script writes are empty and unused (the app connects to `mongodb://db:27017/stego`), so they are left out. Before the app starts, `build/app/create-users.js` creates the `users` collection: upstream's `index.js` creates it and inserts the admin user over two concurrent connections, and when the insert wins, `createCollection()` throws `a collection 'stego.users' already exists`, which crashes the app's first start (seen in one of four runs).
- `db`: upstream's compose file runs the stock `mongo` image (latest) without authentication; the lab runs the stock `mongo:4.0.28`, because the app's MongoDB driver (3.2.3, from its `package-lock.json`) supports servers up to 4.0. No overlay is needed.

To update, replace the vendored folders with a newer secDevLabs commit, then change this file.
