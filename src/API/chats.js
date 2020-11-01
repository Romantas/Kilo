import axios from 'axios';

export function getChatData() {
  return axios.get('https://api.jsonbin.io/b/5f9d4555857f4b5f9ae07ed3', {
    headers: {
      'secret-key':
        '$2b$10$nPqMFsUXAnkht6qEfMe8ZOzOogzIFb0We6S1FmG3B1yF6ihN7tdS6',
    },
  });
}

export function postChatData(data) {
  return axios.put('https://api.jsonbin.io/b/5f9d4555857f4b5f9ae07ed3', data, {
    headers: {
      'secret-key':
        '$2b$10$nPqMFsUXAnkht6qEfMe8ZOzOogzIFb0We6S1FmG3B1yF6ihN7tdS6',
      'Content-Type': 'application/json',
      versioning: 'false',
    },
  });
}
