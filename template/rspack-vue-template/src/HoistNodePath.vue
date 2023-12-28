<template>
    <div></div>
</template>
<script>
export default {
    props: {
        nodePath: String,
        topSelector: String,
    },
    mounted() {
        let el = this.$el.parentNode;
        do {
            if(el.matches(this.topSelector)) {
                break;
            }
            el = el.parentNode;
        } while(el);
        el.setAttribute('nodepath', this.nodePath);
    }
}
</script>