<style src="./news.css"></style>

<script lang="ts" src="./news.ts"></script>

<template>
    <ModalCreateNews ref="modal-create-news-component"/>
    <ModalUpdateNews ref="modal-update-news-component"/>
    <div class="news-container">
        <div class="background-feature d-flex flex-column">
            <Header />
            <div class="d-flex flex-row" style="height: calc( 100vh - 66px)">
                <NavigationBar class="col-2" />
                <div class="d-flex flex-column w-100 px-5">
                    <div class="w-100 d-flex justify-content-between align-items-center" style="height: 100px;">
                        <div class="d-flex justify-content-start align-items-center gap-2">
                            <p style="font-weight:600; font-size:16px; color: #712f06">Search:</p>
                            <input class="search-input input" type="text" placeholder="Enter your input"/>
                        </div>
    
                        <button @click="handleOpenCreateNews" class="button-solid">Create New Post</button>
                    </div>

                    <table class="table table-hover w-100">
                        <thead>
                          <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Creator</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr @click="handleChooseNews(item)" v-for="(item, index) in allNews" :key="index" class="cursor_pointer text-start">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.title }}</td>
                            <td v-html="item.content"></td>
                            <td v-if="item.creator.account">{{ item.creator.account }}</td>
                            <td v-else>...</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
        
    </div>
</template>
