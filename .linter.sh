#!/bin/bash
cd /home/kavia/workspace/code-generation/spanioquest-6988-6994/main_container_for_spanioquest
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

