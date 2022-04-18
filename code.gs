function conversations_history(token, channel_id) {
  let options = {
    'method': 'post',
    'payload': {
      'token': token,
      'channel': channel_id
    }
  }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/conversations.history', options));
}

function conversations_list(token) {
  let options = {
    'method': 'post',
    'payload': {
      'token': token
    }
  }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/conversations.list', options));
}

function bots_info(token) {
  let options = {
    'method': 'post',
    'payload': {
      'token': token
    }
  }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/bots.info', options));
}

function users_lookupByEmail(token, email) {
  let options = {
    'method': 'post',
    'payload': {
      'token': token,
      'email': email
    }
  }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/users.lookupByEmail', options));
}