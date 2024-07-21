<template>
    <ul id="listCategory" class="listCategory">
        <li class="categoryName" v-for="category in categoryList" :key="category.id">
            <router-link :to="{name: 'CategoryPage', params: {idCategorie: category.id}}" class="router-link">
                <h3>{{ category.name }}</h3>
            </router-link>
            <ul id="listItems" class="listItems">
                <li v-for="item in category.items" :key="item.id">
                    <div class="itemFrame">
                        <div class="itemImage"></div>
                        <h4>{{ item.name }}</h4>
                    </div>
                </li>
            </ul>
            <div class="scrollBar"></div>
        </li>
    </ul>
</template>

<script setup>
    import {defineProps, ref} from 'vue';

    const props = defineProps({
        categoryList: {type: Array}
    });
</script>

<style>
    ul{
        list-style-type: none;
    }

    .listCategory {
        display: flex;
        flex-direction: column;
        gap: 5vh;
        padding-bottom: 50px;
    }

    .listItems {
        display: flex;
        gap: 5vw;
        padding-left: 0;
        width: 100%;
        overflow-x: scroll;
        scrollbar-color: transparent transparent;
    }

    h3 {
        font-family: 'Amatic SC';
        font-size: 64px;
        font-weight: 400;
        line-height: 80.7px;
        text-align: left;
        margin-top: 0px;
        display: inline-block;
    }

    .itemFrame {
        background-color: #F5F5DC;
        width: 379px;
        height: 408px;
        display: flex;
        flex-direction: column;
        margin-right: 5vw;
    }

    .itemImage {
        background-color: #D9D9D9;
        width: 295px;
        height: 295px;
        margin-top: 32px;
        margin-left: 42px;
    }

    h4 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.26px;
        margin-left: 42px;
    }

    .scrollBar {
        width: 153px;
        height: 6px;
        border-radius: 62px;
        background-color: #C68E17;
        margin-top: 5vh;
    }

    .router-link, .router-link:visited, .router-link:hover, .router-link:active {
    color: black;
    text-decoration: none;
    }
</style>