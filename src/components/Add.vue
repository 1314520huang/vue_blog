<template>
    <div class="edit_container">
        <form class="form-horizontal" role="form" style="width: 98%; margin-top: 80px" id="blog">
            <div class="form-group">
                <label class="col-sm-1 control-label"></label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="title" placeholder="请输入标题"
                           style="text-align: center">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-1 control-label"></label>
                <div class="col-sm-10">
                    <quill-editor style="height: 400px; margin-top: 20px"
                                  v-model="content"
                                  ref="myQuillEditor"
                                  :options="editorOption"
                                  @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                  @change="onEditorChange($event)">
                    </quill-editor>
                </div>
            </div>
            <div class="form-group" style="margin-top: 80px">
                <label class="col-sm-5 control-label"></label>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-success" @click="saveBlog(1)">发布</button>
                </div>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-primary" @click="saveBlog(0)">保存</button>
                </div>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-warning" @click="cleanContent">清空</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import {quillEditor} from "vue-quill-editor"; //调用编辑器
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import axios from 'axios'

    import {addQuillTitle} from '../../static/js/quill-title'

    export default {
        components: {
            quillEditor
        },
        data() {
            return {
                title:'',
                content: ``,
                editorOption: {}
            }
        },
        methods: {
            onEditorReady(editor) { // 准备编辑器
                editor.container.style.height = `${500}px`
            },
            onEditorBlur() {
            }, // 失去焦点事件
            onEditorFocus() {
            }, // 获得焦点事件
            onEditorChange() {
            }, // 内容改变事件
            saveBlog(state) {
                let param = new URLSearchParams();
                param.append("content", this.content);
                param.append("title",   this.title);
                this.$axios.post('/blog', param).then(res => {
                        console.log(res);
                });
            },
            cleanContent() {
                this.content = "";
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        },
        mounted() {
            addQuillTitle();
        }
    }
</script>
<style>


</style>
