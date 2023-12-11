<style src="./manageSchedule.css"></style>

<script lang="ts" src="./manageSchedule.ts"></script>

<template>
    <ModalAddSchedule id="addSchedule" />
    <ModalDetailSchedule ref="detailSchedule"  id="detailSchedule" />
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
                                    <button class="btn-add" data-bs-toggle="modal" data-bs-target="#addSchedule"><i
                                            class="bi bi-plus-lg"></i> Add new theatre</button>
                                </div>
                                <div class="d-flex flex-column" style="gap:12px; margin-top: 2vh; overflow-y: scroll;">
                                    <div class="d-flex flex-row">
                                        <div class="col text-title-1">
                                            Image
                                        </div>
                                        <div class="col text-title-1">
                                            Movie
                                        </div>
                                        <div class="col text-title-1">
                                            Location
                                        </div>
                                        <div class="col text-title-1">
                                            Start at
                                        </div>
                                        <div class="col text-title-1">
                                            Duration
                                        </div>
                                        <div class="col text-title-1">
                                            Price
                                        </div>
                                    </div>
                                    <div class="column-item" v-for="(item, index) in allSchedules" :key="index" v-motion-slide-left @click="handleDetaiSchedule(item)">
                                        <p class="col">
                                            <img class="movie-img" :src="item?.movie?.image" alt="">
                                        </p>  
                                        <p class="col">
                                            {{ item?.movie?.name }}
                                        </p>  
                                        <p class="col">
                                            {{ item?.theatre?.name }}
                                        </p>
                                        <p class="col">
                                            {{ `${item?.startTime.slice(11, 16)} (${item?.startTime.slice(0, 10)})` }}

                                        </p>
                                        <p class="col">
                                            {{ item?.movie?.duration + " min" }}
                                        </p>
                                        <p class="col">
                                            {{ item?.price }}$
                                        </p>
                                    </div>
                                </div>
                                <div class="count-page">
                                    <div :class="[currentPage === index + 1 ? 'current-page-number' : '', 'page-number']"
                                        v-for="(item, index) in totalPage" :key="index">
                                        <p>{{ index + 1 }}</p>
                                    </div>
                                </div>
                            </div>

                </div>
            </div>
        </div>

    </div>
</template>