import rateLimit from "../config/upstash.js"

const rateLimiter = async(req, res, next) => {
    try {
        const {success} = await rateLimit.limit("my-rate-limit-key")
        if(!success){
            res.status(429).json({
                message: "Too many requests, please try again later"
            })
        }
        next()
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export default rateLimiter