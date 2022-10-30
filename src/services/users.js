import { urlFetch } from "../contants";

const getGitHubUser = async (user) => {
    const response = await fetch(`${urlFetch}/${user}`, {
        methos: 'GET'
    })
    const payload = response.json();

    return payload;
}

export default getGitHubUser;