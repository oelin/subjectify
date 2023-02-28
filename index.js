export default subject => new Proxy(subject, {
        get(_, key, __) {
                if (typeof(subject[key]) === 'function') {
                        return function(...a) {
                                subject[key](...a)
                                return this
                        }
                }
                
                return subject[key]
        }
})
