import { useNavigate } from "react-router-dom"

type Method = 'GET' | 'POST' | 'PATCH'

export const login = (body): Promise<any> => {
    const url = 'login'
    return _request(url, 'POST', body)
}

export const registration = (body: any): Promise<any> => {
    const url = 'registration'
    return _request(url, 'GET', body)
}

function _request(path: string, method: Method, body?: unknown): Promise<any> {
    const navigate = useNavigate()
    const url = 'sadasd/' + path
    let params: any = {
        method: method,
    }

    if (body) {
        params.body = body
    }

    return fetch(url, params)
        .then(res => {
            if (res.status === 204) {
                navigate('/');
            } else {
                return res.json();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}