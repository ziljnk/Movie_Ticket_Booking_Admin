<style scope src="./modal-add-movies.css"></style>
<script lang="ts" src="./modal-add-movies.ts"></script>

<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:850px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Add New Movie</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-column" style="margin:16px; overflow-y: scroll;">
                    <div class="d-flex flex-row" style="gap:32px; margin:16px;">
                        <div class="col d-flex flex-column" style="gap:16px">
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Name:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="movieInput.name" style="height:30px" type="text"
                                        placeholder="Enter movie's name" />
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Genre:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <div class="custom-select" @click="toggleModalCategories" required>
                                        <p>Select movie's genre</p>
                                        <i class="bi bi-chevron-down"></i>

                                        <div v-if="isShowModalCategories" class="genre-modal" v-motion-slide-top
                                            @click.stop>
                                            <div v-for="(item, index) in genre" :key="index" class="genre-item-container">
                                                <label :for="`genre-${index}`">{{ item.name }}</label>
                                                <input v-model="movieInput.genre" type="checkbox" :id="`genre-${index}`"
                                                    :value="item.id" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Start at:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="movieInput.publishDate" style="height:30px" type="date" />
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Director:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="movieInput.director" style="height:30px" type="text"
                                        placeholder="Enter movie's director" />
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Trailer:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="movieInput.trailer" style="height:30px" type="text"
                                        placeholder="Enter movie's trailer link" />
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex flex-column" style="gap:16px">
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Studio:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="movieInput.studio" style="height:30px" type="text"
                                        placeholder="Enter movie's studio" />
                                </div>
                            </div>

                            <div class="input-field">
                                <p class="text-start" style="height: 30px; font-weight: 600">Type:</p>
                                <div class="d-flex flex-column" style="gap: 4px">
                                    <select v-model="movieInput.type" class="custom-select" style="height: 30px">
                                        <option value="" disabled selected hidden>Select movie's type</option>
                                        <option value="2D">2D</option>
                                        <option value="3D">3D</option>
                                    </select>
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">End at:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="movieInput.endDate" style="height:30px" type="date" />
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Duration:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="movieInput.duration" style="height:30px" type="number"
                                        placeholder="Enter movie's duration" />
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="d-flex flex-row" style="gap:32px; margin:16px;">
                        <div class="col d-flex flex-column" style="gap:16px">
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Actors:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <textarea class="text-field input" v-model="movieInput.actors"
                                        placeholder="Enter movie's actors"></textarea>
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Description:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <textarea class="text-field input" v-model="movieInput.description"
                                        placeholder="Enter movie's description"></textarea>
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Image:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <div class="report-items-image" style="margin-top: 8px;">
                                        <label class="custom-file-upload card-image" >
                                            <input type="file" multiple accept=".png, .jpg, .jpeg"/>
                                            <i class="bi bi-plus d-flex justify-content-center" style="font-size:24px"></i>
                                        </label>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="button-outline" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="button-solid">Add</button>
                </div>
            </div>
        </div>
</div></template>