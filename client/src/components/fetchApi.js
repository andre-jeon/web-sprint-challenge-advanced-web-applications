import { axiosWithAuth } from './axiosWithAuth'

export const fetchApi = () => {
    return axiosWithAuth()
    .get('colors')
    .then(res => {
        return res
    })
    .catch(err => console.log(err))
}
