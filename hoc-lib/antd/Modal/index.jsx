import { forwardRef, useState, useImperativeHandle } from 'react';
import { Modal } from 'antd';
export { default as ModalSutando } from './sutando';
export default forwardRef(function(props, ref) {
    // const children = props.children;
    const nodepath = props.nodepath;
    const wrapperProps = { nodepath };
    Object.keys(props).forEach(key => {
        if(key.startsWith('ide-')) {
            wrapperProps[key] = props[key];
        }
    });

    const [open, setOpen] = useState(props.open);
    useImperativeHandle(ref, () => {
        return {
            open() {
                setOpen(true)
            },
            close() {
                setOpen(false)
            }
        };
    }, []);
    const title = props.title();
    const footer = props.footer();
    return (
        <Modal ref={ref} {...props} title={title} footer={footer} open={open}>
            {props.body()}
        </Modal>
    )
});
// export default Modal;
