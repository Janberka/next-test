import fetch from 'isomorphic-fetch';

const isBrowser = () => !process || process.browser;
const isDevelopment = () => process && process.env.NODE_ENV === 'development'

const publicUrl = 'https://nexttest.ja1.now.sh';

const host = () => {
  if (isBrowser()) {
    console.log('browser');
    return '';
  }

  if (isDevelopment()) {
    console.log('dev');
    return 'http://localhost:3000'
  };

  return publicUrl;
}

export const getPosts = () => fetch(`${host()}/api/posts`).then(r => r.json());
export const getPost = postId => fetch(`${host()}/api/posts/${postId}`).then(r=>r.json())
export const getComments = postId => fetch(`${host()}/api/posts/${postId}/comments`).then(r=>r.json());