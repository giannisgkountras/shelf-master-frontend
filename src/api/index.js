import ky from 'ky';
import queryString from 'query-string';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const rootApi = ky.extend({
    timeout: false,
    prefixUrl: `${apiUrl}/api`,
});

const api = {
    get: (path, searchParams) =>
        rootApi
            .get(path, { searchParams: queryString.stringify(searchParams) })
            .json(),
    post: (path, json) => rootApi.post(path, { json }).json(),
    put: (path, json) => rootApi.put(path, { json }).json(),
    patch: (path, json) => rootApi.patch(path, { json }).json(),
    delete: (path, json) => rootApi.delete(path, { json }).json(),
};

export default api;
