# secDevLabs Stegonography

[secDevLabs](https://github.com/globocom/secDevLabs)' [`owasp-top10-2021-apps/a5/stegonography`](https://github.com/globocom/secDevLabs/tree/10be438496e928c66567749f0aaf0bb976052bc9/owasp-top10-2021-apps/a5/stegonography) app, by Globo.com and the
secDevLabs contributors: a Node.js (Express) steganography site backed by MongoDB with several Security Misconfigurations: default admin credentials, verbose stack traces and a session cookie that names the technology. This repository runs it with
[Isoloom](https://www.isoloom.com): [`isoloom.yml`](isoloom.yml) describes the machines, built from
the vendored app folder (see [UPSTREAM.md](UPSTREAM.md)).

| Machine | Service |
| --- | --- |
| app | Stegonography on port 10006 |
| db | MongoDB 4.0.28 on port 27017 (lab network only) |

## Run it

```bash
isoloom generate
isoloom run docker
```

Then open http://localhost:10006/. The same spec runs as Docker on a local VM (`docker-vm`), on a cloud VM
(`cloud-docker`) or on Kubernetes. Lab guide: the app's
[README](https://github.com/globocom/secDevLabs/blob/10be438496e928c66567749f0aaf0bb976052bc9/owasp-top10-2021-apps/a5/stegonography/README.md), with the attack narrative and the secDevLabs walkthrough.

Upstream version and commit: [UPSTREAM.md](UPSTREAM.md).

## Licence

BSD-3-Clause, as secDevLabs ([LICENSE](LICENSE)). The third-party software inside the images keeps
its own licence. This application is deliberately vulnerable: keep it isolated.
