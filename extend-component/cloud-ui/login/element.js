import { CloudElement, ideCommonAttributes } from 'codewave/cloud.js';

const TAG = 'lcap-login';

class LcapLoginElement extends CloudElement {
    static accept(s) {
        return s.tag === TAG;
    }

    renderIDE() {
        return `<${TAG} ${ideCommonAttributes(this)}></${TAG}>\n`;
    }

    render() {

    }
}

export default LcapLoginElement;
