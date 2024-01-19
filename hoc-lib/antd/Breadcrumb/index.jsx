
import { Breadcrumb } from 'antd';
// import styles from './ide.module.css';
export default function(props) {
    const children = props.children;
    const nodepath = props.nodepath;
    const wrapperProps = { nodepath };
    Object.keys(props).forEach(key => {
        if(key.startsWith('ide-')) {
            wrapperProps[key] = props[key];
        }
    });

    return (
        <div {...wrapperProps}>
             <Breadcrumb {...props}>
                {children}
             </Breadcrumb>
        </div>
    )
};


export { default as BreadcrumbIDEBanner } from './breadcrumb.ide.jsx';