/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}

 */

let decode2 = new Map()
let encode2 = new Map()
let base = 'http://tinyurl.com/'

var encode = function(longUrl) {

    if(!encode2.has(longUrl)){
        let random = Math.floor(Math.random() * 1000)
        // console.log('rand',random)
        let val = base+ random.toString()

        // console.log('val',val)

        decode2.set(val,longUrl)
        encode2.set(longUrl,val)

    }

    return encode2.get(longUrl)
    
};

/**
 * Decode2s a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return decode2.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode2(encode2(url));
 */
