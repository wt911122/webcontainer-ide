import { Typography } from 'antd';

const { Text } = Typography;
export default function(props) {
    let innerText = '';
    Object.keys(props).forEach(key => {
        if(key === 'text') {
            innerText = props[key];
        }
    });

    return (
        <Text {...props}>
            {innerText}
        </Text>
    )
};