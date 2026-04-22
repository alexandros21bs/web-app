#!/usr/bin/env bash
set -e

SSH_HOST="82.25.102.11"
SSH_PORT="65002"
SSH_USER="u210865293"
SSH_KEY="$HOME/.ssh/webhostpro_deploy"
REMOTE_PATH="/home/u210865293/domains/webhostpro.gr/public_html"

echo "→ Building..."
npm run build

echo "→ Syncing dist/ to server..."
rsync -avz --delete \
  -e "ssh -p $SSH_PORT -i $SSH_KEY" \
  dist/ \
  "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"

echo "→ Uploading wpog.png..."
rsync -avz \
  -e "ssh -p $SSH_PORT -i $SSH_KEY" \
  wpog.png \
  "$SSH_USER@$SSH_HOST:$REMOTE_PATH/wpog.png"

echo "✓ Deploy complete → https://webhostpro.gr"
