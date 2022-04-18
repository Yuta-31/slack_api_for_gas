
function chat_postMessage(token, channel, message={'text': ''}, optional_argument={}) {
  var payload = {
    'token': token,
    'channel': channel
  };
  if (Object.keys(message).includes("blocks")) {
    payload['blocks'] = JSON.stringify(message['blocks']);
  } else if (Object.keys(message).includes("attachments")) {
    payload['attachments'] = message['attachment'];
  } else {
    payload['text'] = message['text'];
  }
  for (var arg in optional_argument) {
    payload[arg] = optional_argument[arg];
  }
  var options = {};
  options = {
      'method': 'post',
      'payload': payload
    }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.postMessage', options));
}

function chat_delete(token, channel_id, ts) {
  let options = {
  'method': 'post',
  'payload': {
      'token': token,
      'channel': channel_id,
      'ts': ts
    }
  }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.delete', options));
}

function chat_deleteSchedeledMessage(token, channel, scheduled_message_id) {
  let options = {
    'method': 'post',
    'payload': {
      'token': token,
      'channel': channel,
      'scheduled_message_id': scheduled_message_id
    }
  }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.deleteSchedeledMessage', options));
}

function chat_getPermalink(token, channel, message_ts) {
  let options = {
    'method': 'post',
    'payload': {
      'token': token,
      'channel': channel,
      'message_ts': message_ts
    }
  }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.getPermalink', options));
}

function chat_meMessage(token, channel, text) {
  let options = {
    'method': 'post',
    'payload': {
      'token': token,
      'channel': channel,
      'message_ts': text
    }
  }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.meMessage', options));
}

function chat_postEphemeral(token, channel, text, user, optional_argument={}) {
  var payload = {
    'token': token,
    'channel': channel,
    'text': text,
    'user': user
  };
  for (var arg in optional_argument) {
    payload[arg] = optional_argument[arg];
  }
  var options = {};
  options = {
      'method': 'post',
      'payload': payload
    }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.postEphemeral', options));
}

function chat_scheduleMessage(token, channel, post_at, text, optional_argument={}) {
  var payload = {
    'token': token,
    'channel': channel,
    'post_at': post_at,
    'text': text
  };
  for (var arg in optional_argument) {
    payload[arg] = optional_argument[arg];
  }
  var options = {};
  options = {
      'method': 'post',
      'payload': payload
    }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.scheduleMessage', options));
}

function chat_unfurl(token, channel, ts, unfurls, optional_argument={}) {
  var payload = {
    'token': token,
    'channel': channel,
    'ts': ts,
    'unfurls': unfurls
  };
  for (var arg in optional_argument) {
    payload[arg] = optional_argument[arg];
  }
  var options = {};
  options = {
      'method': 'post',
      'payload': payload
    }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.unfurl', options));
}

function chat_update(token, channel, ts, optional_argument={}) {
  var payload = {
    'token': token,
    'channel': channel,
    'ts': ts
  };
  for (var arg in optional_argument) {
    payload[arg] = optional_argument[arg];
  }
  var options = {};
  options = {
      'method': 'post',
      'payload': payload
    }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.update', options));
}

function chat_scheduleMessage_list(token, channel, post_at, text, optional_argument={}) {
  var payload = {
    'token': token
  };
  for (var arg in optional_argument) {
    payload[arg] = optional_argument[arg];
  }
  var options = {};
  options = {
      'method': 'post',
      'payload': payload
    }
  return JSON.parse(UrlFetchApp.fetch('https://slack.com/api/chat.scheduleMessage.list', options));
}