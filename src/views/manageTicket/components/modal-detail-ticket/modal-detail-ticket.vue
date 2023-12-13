<style scope src="./modal-detail-ticket.css"></style>
<script lang="ts" src="./modal-detail-ticket.ts"></script>

<template>

    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true" ref="modal-details-movie"
        id="detailsMovie">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:1000px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Ticket Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-row " style="margin:16px; min-height: 480px; overflow-y: scroll;">
                    <div class="movie-image d-flex justify-content-center align-items-center"
                        style="gap:32px; height: 480px; width: 30%;">
                        <img id="movie-image-modal" :src="ticketInput.image" alt="aaa">
                    </div>
                    <div class="col d-flex flex-column" style="gap:16px; width: 70%; min-height: 480px; padding: 8px;;">
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Movie:</label>
                            <div class="col-9">
                                <input v-model="ticketInput.movie" type="text" class="form-control" id="inputAuthor" disabled/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Theatre:</label>
                            <div class="col-3">
                                <input v-model="ticketInput.theatre" type="text" class="form-control" id="inputAuthor" disabled/>
                            </div>
                        </div>
                        
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Show at:</label>
                            <div class="col-3">
                                <input v-model="ticketInput.time" type="time" class="form-control" id="inputAuthor" disabled/>
                            </div>
                            <div class="col-3">
                                <input v-model="ticketInput.date" type="date" class="form-control" id="inputAuthor" disabled/>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Seat:</label>
                            <div class="col-2">
                                <input v-model="ticketInput.seat" type="text" class="form-control" id="inputAuthor" disabled/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Voucher:</label>
                            <div class="col-3">
                                <input v-model="ticketInput.code" type="text" class="form-control" id="inputAuthor" disabled/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Voucher value:</label>
                            <div class="col-2">
                                <input v-model="ticketInput.voucher" type="text" class="form-control" id="inputAuthor" disabled/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Created at:</label>
                            <div class="col-3">
                                <input v-model="ticketInput.createdAt" type="date" class="form-control" id="inputAuthor" disabled/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputAuthor" class="col-3 col-form-label">Price:</label>
                            <div class="col-3">
                                <input v-model="ticketInput.price" type="text" class="form-control" id="inputAuthor" disabled/>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="modal-footer d-flex justify-content-between">
                    <div class="d-flex flex-row justify-content-end" style="width: 100%;">
                        <button type="button" class="button-outline" data-bs-dismiss="modal" style="margin-right: 1vw;">Close</button>
                    </div>
                </div>
        </div>
    </div>
</div></template>

