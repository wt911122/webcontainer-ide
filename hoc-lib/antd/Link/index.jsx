import { Typography } from 'antd';

const { Link } = Typography;
export default function(props) {
    let innerText = '';
    Object.keys(props).forEach(key => {
        if(key === 'text') {
            innerText = props[key];
        }
    });

    return (
        <Link {...props}>
            {innerText}
        </Link>
    )
};