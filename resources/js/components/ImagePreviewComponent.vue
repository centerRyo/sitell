<template>
    <div>
        <input type="file" name="pic" class="areaDrop__inputFile" @change="onFileChange($event)">
        <img :src="imageData" v-if="imageData" class="areaDrop__prevImg">
        <img :src="pic_path" v-else-if="pic" class="areaDrop__prevImg">
    </div>
</template>

<script>
    export default {
        props: ['pic', 'pic_path'],
        data: function() {
            return {
                imageData: ''
            };
        },
        methods: {
            onFileChange(e) {
                const files = e.target.files;

                if (files.length > 0) {
                    const file = files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.imageData = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
    }
</script>
