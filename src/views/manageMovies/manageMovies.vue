<style scoped src="./manageMovies.css"></style>

<script lang="ts" src="./manageMovies.ts"></script>

<template>
    <ModalAddMovie id="addMovie" />
    <ModalAddGenre id="addGenre" />
    <ModalDetailsMovie ref="detailsMovie" id="detailsMovie"/>
    <div class="movie-container">
        <div class="background-feature d-flex flex-column">
            <Header />
            <div class="d-flex flex-row" style="height: calc( 100vh - 66px)">
                <NavigationBar class="col-2" />
                <div class="col-10 d-flex flex-column"
                    style="padding:24px; overflow-y: hidden; overflow-x: hidden; z-index:1;" v-motion-slide-left>
                    <ul class="nav nav-pills mb-1" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-movie-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-movie" type="button" role="tab" aria-controls="pills-movie"
                                aria-selected="true">Movie</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-genre-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-genre" type="button" role="tab" aria-controls="pills-genre"
                                aria-selected="false">Genre</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent"
                        style="background:#fff; border-radius: 16px; height: 580px; position: relative;">
                        <div class="tab-pane fade show active" id="pills-movie" role="tabpanel"
                            aria-labelledby="pills-movie-tab" style="padding: 16px; gap:12px; height: 100%;">
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
                                    <button class="btn-add" data-bs-toggle="modal" data-bs-target="#addMovie"><i
                                            class="bi bi-plus-lg"></i> Add new movie</button>
                                </div>
                                <div class="d-flex flex-column" style="gap:12px; margin-top: 2vh; overflow-y: scroll;">
                                    <div class="d-flex flex-row">
                                        <div class="col text-title-1">
                                            Image
                                        </div>
                                        <div class="col text-title-1">
                                            Name
                                        </div>
                                        <div class="col text-title-1">
                                            Studio
                                        </div>
                                        <div class="col text-title-1">
                                            Type
                                        </div>
                                        <div class="col text-title-1">
                                            Genre
                                        </div>
                                        <div class="col text-title-1">
                                            Publish Date
                                        </div>
                                        <div class="col text-title-1">
                                            Profit
                                        </div>
                                    </div>
                                    <div class="column-item" v-for="(item, index) in allMovies" :key="index" @click="handleDetailMovie(item)">
                                        <p class="col">
                                            <img class="movie-img" :src="item?.image" alt="">
                                        </p>
                                        <p class="col">
                                            {{ item?.name }}
                                        </p>
                                        <p class="col">
                                            {{ item?.studio }}
                                        </p>
                                        <p class="col">
                                            {{ item?.type }}
                                        </p>
                                        <p class="col" v-if="item['genre'].length > 0">
                                        <p v-for="(category, indexCategory) in item['genre']" :key="indexCategory">{{
                                            item["genre"][indexCategory].name }}</p>
                                        </p>
                                        <p class="col">
                                            {{ item?.publishDate?.slice(0, 10) }}
                                        </p>
                                        <p class="col">
                                            {{ item?.profit }}$
                                        </p>
                                    </div>
                                </div>
                                <div class="count-page">
                                    <div :class="[currentPage === index + 1 ? 'current-page-number' : '', 'page-number']"
                                        v-for="(item, index) in totalPages" :key="index"  @click="handleNextPage('movie',index)">
                                        <p>{{ index + 1 }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-genre" role="tabpanel" aria-labelledby="pills-genre-tab"
                            style="padding: 16px;gap:12px;height:100%; ">
                            <div class="d-flex flex-column classA"
                                style="gap:12px; background: #ffffff; width:100%; padding:16px; height:100%; position: relative; border-radius:16px">
                                <div class="d-flex flex-row justify-content-between align-items-center"
                                    style="width:100%; gap:16px">
                                    <div class="col-6 d-flex flex-row" style="gap:16px">
                                        <div class="d-flex justify-content-center align-items-center"
                                            style="font-weight:600; font-size:16px; color: #712f06">Search:</div>
                                        <input class="search-input input" placeholder="Enter your input"
                                            v-model="searchQueryGenre" />
                                    </div>
                                    <button class="btn-add" data-bs-toggle="modal" data-bs-target="#addGenre"><i
                                            class="bi bi-plus-lg"></i> Add new genre</button>
                                </div>
                                <div class="d-flex flex-column" style="gap:12px; margin-top: 2vh;">
                                    <div class="d-flex flex-row">
                                        <div class="col text-title-1">
                                            No
                                        </div>
                                        <div class="col text-title-1">
                                            ID
                                        </div>
                                        <div class="col text-title-1">
                                            Name
                                        </div>
                                    </div>
                                    <div class="column-item" v-for="(item, index) in allGenre" :key="index" v-motion-slide-left> 
                                        <p class="col" style="font-weight: bolder;">
                                            {{ index +1 }}
                                        </p>
                                        <p class="col">
                                            {{ item?.id }}
                                        </p>
                                        <p class="col">
                                            {{ item?.name }}
                                        </p>
                                        

                                    </div>
                                </div>
                                <div class="count-page">
                                    <div :class="[currentPageGenres === index + 1 ? 'current-page-number' : '', 'page-number']"
                                        v-for="(item, index) in totalPageGenres" :key="index" @click="handleNextPage('genre',index)">
                                        <p>{{ index + 1 }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
