import { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import { Select } from 'antd';
export const SelectOption = Select.Option;
export default forwardRef(function(props, ref) {
    // const children = props.children;
    const nodepath = props.nodepath;
    const wrapperProps = { nodepath };
    Object.keys(props).forEach(key => {
        if(key.startsWith('ide-')) {
            wrapperProps[key] = props[key];
        }
    });
    const selectRef = useRef(null);

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
    return (
        <Select ref={selectRef} {...props} open={open}>
            {props.children}
        </Select>
    )
});

