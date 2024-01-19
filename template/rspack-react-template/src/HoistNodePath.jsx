import { useEffect, useRef } from 'react';

export default function (props) {
    const { topSelector, nodePath } = props;
    const ref = useRef(null);
    useEffect(() => {
        let el = ref.current.parentNode;
        console.log(topSelector)
        do {
            if(el.matches(topSelector)) {
                break;
            }
            el = el.parentNode;
        } while(el);
       
        el.setAttribute('nodepath', nodePath);
        Object.keys(props).forEach(key => {
            if(key !== 'topSelector' && key!== 'nodePath') {
                el.setAttribute(key, props[key]);
            }
        });
    })
    return (
        <div ref={ref}></div>
    )
}