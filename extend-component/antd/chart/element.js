import { AntdElement, ideCommonAttributes } from 'codewave/antd.js';

const TAG = 'ReactChart';

class ChartElement extends AntdElement {
    static accept(s) {
        return s.tag === TAG;
    }
    static TAG = 'ReactChart';

    renderIDE() {
        return `<div ${ideCommonAttributes(this)}><${TAG}></${TAG}></div>\n`;
    }

    render() {

    }
}

export default ChartElement;
