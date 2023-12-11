<style scoped src="./modal-details-movie.css"></style>

<script lang="ts" src="./modal-details-movie.ts"></script>

<template>
    <FormattedModal id="formatted-modal" ref="modal-delete-movie-component" title="Delete this movie"
        content="Do you want to delete this movie?" actionButtonTitle="Delete" :isDangerAction="true"
        @handleClickActionButton="handleDeleteMovie" />

    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true" ref="modal-details-movie"
        id="detailsMovie">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:1000px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Movie Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-row " style="margin:16px; min-height: 480px; overflow-y: scroll;">
                    <div class="movie-image d-flex justify-content-center align-items-center"
                        style="gap:32px; height: 480px; width: 30%;">
                        <img id="movie-image-modal" :src="movieInput.image" alt="aaa">
                    </div>
                    <div class="col d-flex flex-column" style="gap:16px; width: 70%; min-height: 480px; padding: 8px;">
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Name:</label>
                            <div class="col-9">
                                <input v-model="movieInput.name" type="text" class="form-control" id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Studio:</label>
                            <div class="col-4">
                                <input v-model="movieInput.studio" type="text" class="form-control" id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="selectCategories" class="col-form-label col-3">Genre:</label>
                            <div class="col-5" style="position: relative;" @click="toggleModalCategories" required>
                                <div class="custom-select">
                                    <p>Select genres</p>
                                    <i class="bi bi-chevron-down"></i>
                                </div>

                                <div v-if="isShowModalCategories" class="genre-modal" v-motion-slide-top @click.stop>
                                    <div v-for="(item, index) in allGenre" :key="index" class="genre-item-container">
                                        <label :for="`genre-${index}`">{{ item.name }}</label>
                                        <input v-model="seletectedGenre" :checked="handleCheckGenre(item.id)"
                                            type="checkbox" :id="`genre-${index}`" :value="item.id" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Type:</label>
                            <div class="col-5">
                                <select v-model="movieInput.type" class="custom-select" id="inputAuthor">
                                    <option value="2D">2D</option>
                                    <option value="3D">3D</option>
                                </select>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Start at:</label>
                            <div class="col-4">
                                <input v-model="movieInput.publishDate" type="date" class="form-control" id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">End at:</label>
                            <div class="col-4">
                                <input v-model="movieInput.endDate" type="date" class="form-control" id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Director:</label>
                            <div class="col-5">
                                <input v-model="movieInput.director" type="text" class="form-control" id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Actors:</label>
                            <div class="col-9">
                                <textarea v-model="movieInput.actors" type="text" class="form-control"
                                    id="inputAuthor"></textarea>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Duration:</label>
                            <div class="col-2">
                                <input v-model="movieInput.duration" type="number" class="form-control" id="inputAuthor" min="0"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Trailer:</label>
                            <div class="col-9">
                                <input v-model="movieInput.trailer" type="text" class="form-control" id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Description:</label>
                            <div class="col-9">
                                <textarea v-model="movieInput.description" class="form-control" id="inputAuthor"
                                    rows="5"></textarea>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Profit:</label>
                            <div class="col-4">
                                <input v-model="movieInput.profit" type="number" class="form-control" id="inputAuthor"
                                    disabled />
                            </div>
                        </div>
                    </div>

                </div>

                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="button-solid" style="background-color: red;" data-bs-dismiss="modal"
                        @click="handleOpenModalDeleteMovie">Delete</button>
                    <div class="d-flex flex-row">
                        <button type="button" class="button-outline" data-bs-dismiss="modal" style="margin-right: 1vw;">Close</button>
                        <button type="button" class="button-solid" @click="handleUpdate">Save Change</button>
                    </div>
                </div>
        </div>
    </div>
</div></template>