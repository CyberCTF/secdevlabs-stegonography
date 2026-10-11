#!/bin/sh
# Places the player's flag (CTF_FLAG_MAIN, given by the launcher) (placeholder: the lab has no natural data slot for it);
# without one (CI, a run by hand) the development flag.
dev='FLAG{dev-secdevlabs-stegonography}'
printf '%s\n' "${CTF_FLAG_MAIN:-$dev}" > /ctf/flag
chmod 444 /ctf/flag
