<template>
    <div>
        <quillEditor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
        >
        </quillEditor>
        <div style="margin-top:20px;">
            <el-button type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>
<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'
    export default {
        components: {
            quillEditor
        },
        data () {
            return {
                content: '',
                editorOption: {
                    placeholder: '请开始您的表演',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ header: 1 }, { header: 2 }],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            [{ script: 'sub' }, { script: 'super' }],
                            [{ indent: '-1' }, { indent: '+1' }],
                            [{ direction: 'rtl' }],
                            [{ size: ['small', false, 'large', 'huge'] }],
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            [{ font: [] }],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                            ['clean'],
                            ['link', 'image', 'video']
                        ]
                    }
                }
            }
        },
        methods: {
            submit () {
                console.log(this.content)
            }
        }
    }
</script>
