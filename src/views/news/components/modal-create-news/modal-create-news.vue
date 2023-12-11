<script lang="ts" src="./modal-create-news.ts"></script>
<style lang="css" scoped src="./modal-create-news.css"></style>

<template>
    <div class="modal fade" id="modal-create-news" ref="modal-create-news" tabindex="-1" aria-labelledby="modal-create-news" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 w-100" id="exampleModalLabel">Create New Post</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input class="input w-100 mb-3" type="text" placeholder="Enter the title of news..." v-model="titlePost"/>
                <QuillEditor class="quill-editor" theme="snow" toolbar="full" contentType="html" v-model:content="contentPost" placeholder="Enter the content of news..."/>
                <div class="w-100 d-flex justify-content-start align-items-center mt-3">
                    <label v-if="!chosenImage" for="news-image" id="news-image-input-label"><i class="bi bi-plus-lg"></i></label>
                    <div v-else style="position: relative;">
                        <img :src="chosenImage" id="chosen-image"/>
                        <div @click="handleDeleteImage" class="d-flex justify-content-center align-items-center zoomout-icon cursor_pointer" style="position: absolute; width: 20px; height: 20px; border-radius: 50%; background-color: #d6d6d6; right: -5px; top: -5px">
                            <i class="bi bi-x"></i>
                        </div>
                    </div>
                    <input @change="handleChooseImage" type="file" id="news-image" class="d-none"/>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="handleClickSave" type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
</template>