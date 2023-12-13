<style src="./manageTheatre.css"></style>

<script lang="ts" src="./manageTheatre.ts"></script>

<template>
    <ModalAddTheatre id="addTheatre" />
    <ModalDetailTheatre ref="detailTheatre" id="detailTheatre" />
    <div class="manageTheatre-container">
        <div class="background-feature d-flex flex-column">
            <Header />
            <div class="d-flex flex-row" style="height: calc( 100vh - 66px)">
                <NavigationBar class="col-2" />
                <div class="col-10 d-flex flex-column"
                    style="padding:24px; overflow-y: hidden; overflow-x: hidden; z-index:1;" v-motion-slide-left>

                    <div class="d-flex flex-column"
                                style="gap:12px; background: #ffffff; width:100%; padding:16px; height:100%; position: relative; border-radius:16px">
                                <div class="d-flex flex-row justify-content-between align-items-center"
                                    style="width:100%; gap:16px">
                                    <div class="col-6 d-flex flex-row" style="gap:16px">
                                        <div class="d-flex justify-content-center align-items-center"
                                            style="font-weight:600; font-size:16px; color: #712f06">Search:</div>
                                        <input class="search-input input" placeholder="Enter your input"
                                            v-model="searchQuery" />
                                    </div>
                                    <button class="btn-add" data-bs-toggle="modal" data-bs-target="#addTheatre"><i
                                            class="bi bi-plus-lg"></i> Add new theatre</button>
                                </div>
                                <div class="d-flex flex-column" style="gap:12px; margin-top: 2vh; overflow-y: scroll;">
                                    <div class="d-flex flex-row">
                                        <div class="col-3 text-title-1">
                                            No
                                        </div>
                                        <div class="col-2 text-title-1">
                                            Name
                                        </div>
                                        <div class="col text-title-1">
                                            Description
                                        </div>
                                    </div>
                                    <div class="column-item" v-for="(item, index) in theatres" :key="index" @click="handleDetaiTheatre(item)" v-motion-slide-left>
                                        <p class="col-3" style="font-weight: bold;">
                                            {{ index + 1 }}
                                        </p>  
                                        <p class="col-2">
                                            {{ item?.name }}
                                        </p>
                                        <p class="col">
                                            {{ item?.description }}
                                        </p>
                                    </div>
                                </div>
                                <div class="count-page">
                                    <div :class="[currentPage === index + 1 ? 'current-page-number' : '', 'page-number']"
                                        v-for="(item, index) in totalPage" :key="index" @click="handleNextPage(index)">
                                        <p>{{ index + 1 }}</p>
                                    </div>
                                </div>
                            </div>

                </div>
            </div>
        </div>

    </div>
</template>