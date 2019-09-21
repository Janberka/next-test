import fetch from 'isomorphic-fetch';

const isBrowser = () => !process || process.browser;
const isDevelopment = () => process && process.env.NODE_ENV === 'development'

const publicUrl = 'https://nexttest.ja1.now.sh';

const host = () => {
  if (isBrowser()) {
    return '';
  }

  if (isDevelopment()) {
    return 'http://localhost:3000'
  };

  return publicUrl;
}

const api = (endpoint) => fetch(`${host()}/api/${endpoint}`).then(r=>r.json());

export const getFeeds = () => api(``);
export const getFeed = (feed) => api(feed);
export const getPosts = (feed) => api(`${feed}/posts`);
export const getPost = (feed, postId) => api(`${feed}/${postId}`)
export const getComments = (feed, postId) => api(`${feed}/${postId}/comments`);
