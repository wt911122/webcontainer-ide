export default function (props) {
    const nodepath = props.nodepath;
    const wrapperProps = { nodepath };
    Object.keys(props).forEach(key => {
        if(key.startsWith('ide-')) {
            wrapperProps[key] = props[key];
        }
    });
    return ( 
    <div {...wrapperProps}>
        双击编辑弹窗
    </div>)
}