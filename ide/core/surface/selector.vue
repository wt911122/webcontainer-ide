<template>
    <div :class="$style.root" 
        :focus="isFocus">
        <template v-if="meta.active">
            <div :class="$style.rootTitle">{{ title }}</div>
            <svg :style="transform" :width="width" :height="height" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg" >
                <path
                    fill="none"
                    stroke-width="3"
                    stroke="blue" :d="polygonPath" />
            </svg>
        </template>
    </div>
</template>

<script>
export default {
    inject: ['setFocus', 'getSurface'],
    props: {
        meta: Object,
        isFocus: Boolean,
    },
    computed: {
        
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
    top: 0;
    background-color: blue;
    color: white;
    line-height: 18px;
    font-size: 16px;
    width: max-content;
    padding: 5px;
}
</style>