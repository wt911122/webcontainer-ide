import { Button } from 'antd'

export default function(props) {
    let innerText = '';
    Object.keys(props).forEach(key => {
        if(key === 'text') {
            innerText = props[key];
        }
    });

    return (
        <Button {...props}>
            {innerText}
        </Button>
    )
};