import service from '../util/http'

export function getNews(type,count) {
    return service({
        url: '/api',
        method: 'get',
        params: {
            action:'getnews',
            type,
            count
        }
    })
}
export function getNewsDetail(uniquekey) {
    return service({
        url: '/api',
        method: 'get',
        params: {
            action:'getnewsitem',
            uniquekey
        }
    })
}