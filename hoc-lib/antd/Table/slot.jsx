
const baseStyle = {
    background: '#f7f8fa',
    width: '100%',
    height: '120px',
};
export default function (props) {
    return (
        <div style={ baseStyle } {...props} emptyslot="true">
            请绑定数据源
        </div>
    )
}