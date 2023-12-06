<template>
    <transition name="fade">
        <div :class="$style.root" :style="transform" v-show="active">
            <slot></slot>
        </div>
    </transition>
</template>
<script>

export default {
    props: { 
        active: Boolean,
        x: Number,
        y: Number,
    },
    computed: {
        transform() {
            if(this.scale !== undefined) {
                return `transform: translate(${this.x}px, ${this.y}px)`
            }
            return `transform: translate(${this.x}px, ${this.y}px)`
        }
    }
}
</script>

<style module>
    .root {
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        position: absolute;
        z-index: 4000;
    }
    .root:hover {
        z-index: 99999;
    }
</style>