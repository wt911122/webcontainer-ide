<template>
    <div :style="rootStyle">
        
        <template v-for="target in targets">
            <Wrapper
                :x="target.position[0]" 
                :y="target.position[1]"
                :active="true">
                <Selector :meta="target" :isFocus="true"></Selector>
            </Wrapper>
        </template>
        <HighlightEmptySlot
            :meta="highlight_empty_slot">
        </HighlightEmptySlot>
        <Wrapper 
            :x="highlight_elem?.position?.[0]" 
            :y="highlight_elem?.position?.[1]"
            :active="highlight_elem.active">
            <Selector :meta="highlight_elem" :isFocus="false"></Selector>
        </Wrapper>
        <HighlightSeg 
            :segments="highlight_seg">
        </HighlightSeg>
    </div>
</template>
<script setup>
import { inject, toRaw, computed } from 'vue';
import Wrapper from './wrapper.vue';
import Selector from './selector.vue';
import HighlightSeg from './highlight-segment.vue';
import HighlightEmptySlot from './highlight-empty-slot.vue';

const getSurface = inject('getSurface');
const surface = getSurface();


const { highlight_elem, targets, highlight_seg, highlight_empty_slot } = surface;

const rootStyle = computed(() => ({
    position: 'relative',
    left: 0
    // left: props.visible ? 0: '-999px' 
}))

</script>