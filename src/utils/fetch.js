export const fetchData = async (props) => {
    const { url, options, cb } = props
    
    try {

        const response = options ? await fetch(url, options) : await fetch(url)
        const data = await response.json()
        if (cb) cb(data)

    } catch (error) {
        console.error('fetchData', error)
    }
}