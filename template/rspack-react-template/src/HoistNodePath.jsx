import { useEffect, useRef } from 'react';

export default function ({ topSelector, nodePath }) {
    const ref = useRef(null);
    useEffect(() => {
        let el = ref.current.parentNode;
        do {
            if(el.matches(topSelector)) {
                break;
            }
            el = el.parentNode;
        } while(el);
        el.setAttribute('nodepath', nodePath);
    })
    return (
        <div ref={ref}></div>
    )
}