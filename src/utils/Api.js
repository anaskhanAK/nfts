export const Baseurl = 'http://192.168.0.109:3000';

const Token = localStorage.getItem('walletAddress');

const headers = {
    Authorization: "Bearer " + Token,
};

export const FetchingDataFromApi = async (url, params) => {
    try {
        const response = await fetch(Baseurl + url, {
            method: "GET",
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};