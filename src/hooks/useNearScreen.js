import { useState, useEffect, useRef } from 'react'

// creacion de un Hooks
export default function useNearScreen({ distance = '100px' } = {}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        let observer
        const onChange = (entries, observer) => {
            const el = entries[0]
            console.log('ell', el.isIntersecting)
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        // si el navegador no cuenta con intersection observer
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })
            observer.observe(fromRef.current)
        })

        return () => observer && observer.disconnect()
    }, [])
    return { isNearScreen, fromRef }
}
