'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'companytest-secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  SLACK_ID:       '2151814398.2764197458',
  SLACK_SECRET:   '703662540e6d522af6500b2c0a1c34ce',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
