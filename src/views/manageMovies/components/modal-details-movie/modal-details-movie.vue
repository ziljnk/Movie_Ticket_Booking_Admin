<style scoped src="./modal-details-movie.css"></style>

<script lang="ts" src="./modal-details-movie.ts"></script>

<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:1000px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Movie Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-row " style="margin:16px; min-height: 480px; overflow-y: scroll;">
                    <div class="movie-image d-flex justify-content-center align-items-center"
                        style="gap:32px; height: 480px; width: 30%;">
                        <img id="movie-image-modal"
                            src="https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg" alt="aaa">
                    </div>
                    <div class="col d-flex flex-column" style="gap:16px; width: 70%; min-height: 480px; padding: 8px;">
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Name:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Studio:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Genre:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Type:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Start at:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">End at:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Director:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Actors:</label>
                            <div class="col-9">
                                <textarea v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor"></textarea>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Duration:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Trailer:</label>
                            <div class="col-9">
                                <input v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Description:</label>
                            <div class="col-9">
                                <textarea v-model="copiedBook.publishingYear" type="text" class="form-control"
                                    id="inputAuthor"></textarea>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="button-outline" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="button-solid">Save Change</button>
                </div>
            </div>
        </div>
    </div>
</template>