import { get } from '../get.js'
import { post } from '../post.js'

export function getAdData() {
    const result = get('/api/homelist')
    return result
}

export function getListData(city, page,data) {
    const result = post('/api/homelist/' + encodeURIComponent(city) + '/' + page,data)
    return result
}