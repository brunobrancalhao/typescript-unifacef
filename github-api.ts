import axios from 'axios';

const baseURL = 'https://api.github.com/';

export const getUser = async (userName: string) => {
  try {
    const { data } = await axios.request({ method:'GET', baseURL, url: `users/${userName}` });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const init = async () => {
  const user = await getUser('brunobrancalhao');
  console.log(JSON.stringify(user));
}

init();