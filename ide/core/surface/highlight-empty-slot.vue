<template>
    <transition name="fade">
        <div :class="$style.root" :style="position" v-show="active">
            <div :class="$style.rect" :style="dimension"></div>
        </div>
    </transition>
</template>
<script>

export default {
    props: { 
        meta: Object,
    },
    computed: {
        active() {
            return this.meta.active;
        },
        // transform() {
        //     if(this.active) {
        //         console.log(this.segments.segments)
        //         const seg = this.segments.segments;
        //         const dir = seg[0] === seg[2]
        //         return dir 
        //             ? `transform: translate(${seg[0]}px, ${seg[1]}px) scale(3, ${seg[3] - seg[1]})` 
        //             : `transform: translate(${seg[0]}px, ${seg[1]}px) scale(${seg[2] - seg[0]}, 3)`
        //     }
        //     return `transform: translate(0px, 0px) scale(0, 0);`
        // },
        position() {
            if(this.active) {
                const rect = this.meta.rect;
                return `transform: translate(${rect[0]}px, ${rect[1]}px)` 
            }
            return `transform: translate(-999px, 0px)`
        },
        dimension() {
            if(this.active) {
                const rect = this.meta.rect;
                return `transform: scale(${rect[2]}, ${rect[3]})` 
            }
            return `transform: scale(0, 0)`
        },
    },
}
</script>

<style module>
    .root {
        left: 0;
        top: 0;
        width: 0px;
        height: 0px;
        
        position: absolute;
        z-index: 4000;
        transform-origin: 0 0;
        pointer-events: none;
    }
    .rect {
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 1px;
        background-color: rgba(128, 128, 128, 0.3);
        transform-origin: 0 0;
    }
</style>