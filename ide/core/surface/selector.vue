<template>
    <div :class="$style.root" 
        :focus="isFocus">
        <template v-if="meta.active">
            <div v-if="!meta.noTitle" :class="$style.rootTitle" @mouseover="hoverParent">
                {{ title }}
                <div :class="$style.parents" v-if="isFocus">
                    <div v-for="item in parentList" key="item.key" :class="$style.parentTitleWrapper">
                        <div :class="$style.parentTitle" :nodePath="item.source.nodePath" @click="changeFocus(item.source)">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </div>
            <svg :style="transform" :width="width" :height="height" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg" >
                <path
                    fill="none"
                    stroke-width="3"
                    :stroke-dasharray="strokeDash"
                    stroke="blue" :d="polygonPath" />
            </svg>
        </template>
    </div>
</template>

<script>
export default {
    inject: ['setFocusNode', 'getSurface', 'setHighlightNode', 'closeHighlightElem'],
    props: {
        meta: Object,
        isFocus: Boolean,
    },
    computed: {
        strokeDash() {
            return this.isFocus ? 'none' : '4, 1'
        },
        parentList() {
            let source = this.meta.source;
            let list = []
            while(source.parentNode && !source.parentNode.isRoot) {
                const parentNode = source.parentNode;
                list.push({
                    source: parentNode,
                    title: parentNode.tag,
                    key: parentNode.componentKey
                })
                source = parentNode;
            }
            console.log(list)
            return list.reverse();
        },
        polygonPath() {
            const polygonPath = this.meta.polygonPath;
            let i = 0, l = polygonPath.length, path = 'M ';
            while(i < l) {
                path += `${polygonPath[i]} ${polygonPath[i+1]}`
                i+=2;
                path += (i === l ? ' Z' : ' L ' )
            }
            return path;
        },
        viewBox() {
            const viewbox = this.meta.viewbox;
            return `${viewbox.x-3} ${viewbox.y-3} ${viewbox.width + 6} ${viewbox.height+6}`
        },
        width() {
            return this.meta.viewbox.width+6;
        },
        height() {
            return this.meta.viewbox.height+6;
        },
        title() {
            return this.meta?.source?.tag || ''
        },
        transform() {
            const viewbox = this.meta.viewbox;
            return `transform: translate(${viewbox.x-3}px, ${viewbox.y-3}px)`
        }
    },
    methods: {
        hoverParent(e) {
            console.log(e);
            const elem = e.target;
            if(elem && elem.getAttribute('nodePath')) {
                this.setHighlightNode(elem.getAttribute('nodePath'))
                    console.log(elem.getAttribute('nodePath'));
            } else {
                console.log('not')
                this.closeHighlightElem();
            }
        },
        changeFocus(source) {
            this.setFocusNode(source);
        } 
        // close() {
        //     this.getSurface().closeHighlightElem();
        // },
        // setFocusCurrent() {
        //     this.setFocus({
        //         source: this.meta.source,
        //         boundingbox: this.meta.boundingbox,
        //     })
        //     console.log('setFocus')
        // }
    }
}
    
</script>

<style module>
.root{
    position: absolute;
    width: 0;
    height: 0;
}
.root[focus="true"]{
    border-style: solid;
}
.root > svg {
    pointer-events: none
}
.rootTitle{
    position: absolute;
    transform: translateY(-100%) translateX(-1.5px);
    left: 0;
    top: 2px;
    background-color: blue;
    color: white;
    line-height: 18px;
    font-size: 16px;
    width: max-content;
    padding: 5px;
    cursor: pointer;
    min-width: 80px;
}
.rootTitle:hover .parents{
    display: block;
}
.parents {
    display: none;
    position: absolute;
    top: 0px;
    transform: translateY(-100%);
    left: 0;
}
.parentTitleWrapper{
    padding: 2px 0;
}
.parentTitle{
    background-color: blue;
    color: white;
    line-height: 18px;
    font-size: 16px;
    width: max-content;
    padding: 5px;
    cursor: pointer;
    min-width: 80px;
}
</style>