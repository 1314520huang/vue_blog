<template>
    <div>
        <router-link to="/add">Add</router-link>
        <div class="anime_list" id="blogDiv" v-show="show == true">
            <dl v-for="blog in blogs">
                <dt><a :href="'${ctx }/show/'+blog.id" target="_blank"><img :src="blog.imgUrl"/></a></dt>
                <dd>
                    <h3><a :href="'${ctx }/show/'+blog.id" target="_blank" :title="blog.name"><b style="color:#F00">{{blog.name}}</b></a></h3>
                    <p><div class="d_label"><b>地区：</b><a :title="blog.country">{{blog.country}}</a></div><div class="d_label"><b>年代：</b><a :title="blog.year">{{blog.year}} 年</a></div></p>
                    <p><div class="d_label"><b>标签：</b><a >{{blog.belongValue}}、{{blog.value}}</a></div>
                    <p><b>简介：</b>{{blog.detail}}</p>
                    <p><b style="color:#F00">推荐指数:  {{blog.average}}</b></p>
                </dd>
            </dl>
        </div>
        <div>
            <dl>
                <dt><a :href="'${ctx }/show/'+blog.id" target="_blank"><img :src="blog.imgUrl"/></a></dt>
                <dt></dt>
            </dl>
        </div>
        <span v-show="show == false" style="text-align: center;"> No Data ! </span>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "BlogList",
        components:{
            axios
        },
        data: function () {
            return {
                show: true,
                blogs: [],
                blog: {}
            }
        },
        methods: {
            initBlog: function () {
                axios.get("/api/blog?type=0").then(res => {
                    console.log(res);
                    if (res.code == 0) {
                        this.blogs = res.data;
                        this.show = true;
                    } else
                        this.show = false;
                });
            },
            searchBlog: function () {
                axios.get("/api/blog/search").data(this.blog).then(res => {
                    if (res.code == 0) {
                        this.blogs = res.data;
                        this.show = true;
                    } else
                        this.show = false;
                });
            }
        },
        mounted() {
//            this.initBlog();
        }
    }
</script>
