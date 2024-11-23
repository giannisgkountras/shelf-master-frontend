import ky from 'ky';
import queryString from 'query-string';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const rootApi = ky.extend({
    timeout: false,
    prefixUrl: `${apiUrl}/api`,
});

const api = {
    get: async (path, searchParams) =>
        await rootApi
            .get(path, { searchParams: queryString.stringify(searchParams) })
            .json(),
    post: async (path, json) => await rootApi.post(path, { json }).json(),
    put: async (path, json) => await rootApi.put(path, { json }).json(),
    patch: async (path, json) => await rootApi.patch(path, { json }).json(),
    delete: async (path, json) => await rootApi.delete(path, { json }).json(),
};

export default api;
