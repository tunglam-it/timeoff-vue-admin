export default {
    methods: {
        isInsertUpdate() {
            if (this.$route.params.id) {
                return false;
            } else {
                return true;
            }
        },
    }
}