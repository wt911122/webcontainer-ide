<template>
    <transition name="fade">
        <div :class="$style.root" :style="transform" v-show="active">
            <div :class="$style.seg" :style="transformSeg"></div>
        </div>
    </transition>
</template>
<script>

export default {
    props: { 
        segments: Object,
    },
    data() {
        return {
            useTransition: false,
        }
    },
    computed: {
        active() {
            return this.segments.active;
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
        transform() {
            if(this.active) {
                const seg = this.segments.segments;
                const dir = seg[0] === seg[2];
                const transition = this.useTransition ? 'transition: all .3s;' : ''
                return dir 
                    ? `${transition}transform: translate(${seg[0]}px, ${seg[1]}px)` 
                    : `${transition}transform: translate(${seg[0]}px, ${seg[1]}px)`
            }
            return `transform: translate(0px, 0px)`
        },
        transformSeg() {
            if(this.active) {
                const seg = this.segments.segments;
                const dir = seg[0] === seg[2]
                return dir 
                    ? `transform: scale(3, ${seg[3] - seg[1]})` 
                    : `transform: scale(${seg[2] - seg[0]}, 3)`
            }
            return `transform: scale(0, 0);`
        }
    },
    watch: {
        active(val) {
            console.log(val);
            this.$nextTick(() => {
                this.useTransition = val;
            })
        }
    }
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
    .seg {
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 1px;
        background-color: chartreuse;
        transform-origin: 0 0;
    }
</style>