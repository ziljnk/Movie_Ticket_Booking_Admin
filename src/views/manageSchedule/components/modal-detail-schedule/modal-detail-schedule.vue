<style scope src="./modal-detail-schedule.css"></style>
<script lang="ts" src="./modal-detail-schedule.ts"></script>

<template>

    <FormattedModal id="formatted-modal" ref="modal-delete-schedule-component" title="Delete this schedule"
            content="Do you want to delete this schedule?" actionButtonTitle="Delete" :isDangerAction="true"
            @handleClickActionButton="handleDeleteSchedule" />

    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true" ref="modal-detail-schedule">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:1000px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Movie Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-column " style="margin:16px; overflow-y: scroll;">
                    <div class="d-flex flex-row ">
                        <div class="movie-image d-flex justify-content-center" style="gap:32px; height: 450px; width: 30%;">
                            <img id="movie-image-modal" :src="scheduleInput.image" alt="aaa">
                        </div>
                        <div class="col d-flex flex-column" style="gap:16px; width: 70%; padding: 8px;">
                            <div class="row mb-3">
                                <label for="inputAuthor" class="col-3 col-form-label">Movie:</label>
                                <div class="col-9">
                                    <input v-model="scheduleInput.movie" type="text" class="form-control" id="inputAuthor"
                                        disabled />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputAuthor" class="col-3 col-form-label">Movie:</label>
                                <div class="col-2">
                                    <input v-model="scheduleInput.duration" type="text" class="form-control" id="inputAuthor"
                                        disabled />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputAuthor" class="col-3 col-form-label">Start at:</label>
                                <div class="col-6 d-flex flex-row" style="gap:16px">
                                    <input v-model="scheduleInput.startTimeDate" type="date" class="form-control"
                                        id="inputAuthor" />
                                    <input v-model="scheduleInput.startTime" type="time" class="form-control"
                                        id="inputAuthor" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputAuthor" class="col-3 col-form-label">End at:</label>
                                <div class="col-6 d-flex flex-row" style="gap:16px">
                                    <input v-model="scheduleInput.endTimeDate" type="date" class="form-control"
                                        id="inputAuthor" />
                                    <input v-model="scheduleInput.endTime" type="time" class="form-control"
                                        id="inputAuthor" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputTheatre" class="col-3 col-form-label">Theatre:</label>
                                <div class="col-5">
                                    <select v-model="scheduleInput.theatre" class="custom-modal-select" id="inputTheatre" style="height: 35px;">
                                        <option v-for="theatre in allTheatre" :key="theatre.id" :value="theatre.id">
                                            {{ theatre.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="inputAuthor" class="col-3 col-form-label">Price:</label>
                                <div class="col-3">
                                    <input v-model="scheduleInput.price" type="number" class="form-control" id="inputAuthor"
                                        min="0" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputAuthor" class="col-3 col-form-label">Revenue:</label>
                                <div class="col-3">
                                    <input v-model="scheduleInput.total" type="number" class="form-control" disabled
                                        id="inputAuthor" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center bookseats">
                        <div class="row mb-3 d-flex" style="width: 100%; align-items: flex-start;">
                            <label class="col col-form-label"
                                style="color: brown; font-weight: 500; font-size: larger;">Booked Seats:</label>
                        </div>
                        <table class="seat-table">
                            <tr class="seat-row" style="margin-left: 40px">
                                <td class="seat-row-label" style="width: 30px" v-for="(item, index) in 10" :key="index">{{
                                    item }}</td>
                            </tr>
                            <tr class="seat-row" v-for="(itemRow, index) in 10" :key="index">
                                <td class="seat-column-label">{{ rowArray[itemRow - 1] }}</td>
                                <td :id="`row-${itemRow}-cell-${itemCell}`" class="seat-cell"
                                    v-for="(itemCell, index) in 10" :key="index"
                                    :class="{ 'booked-seat': isSeatBooked(rowArray[itemRow - 1], itemCell) }"></td>
                            </tr>
                        </table>
                        <div class="d-flex justify-content-center align-items-center flex-column"
                            style="width: 100%; margin-left: 50px;">
                            <div class="screen">
                                SCREEN
                            </div>

                            <div class="seat-legend" style="margin-left: 50px;">
                                <div class="seat-legend-item">
                                    <div class="seat-legend-item-color seat-legend-item-available"></div>
                                    <p>Empty</p>
                                </div>

                                <div class="seat-legend-item">
                                    <div class="seat-legend-item-color seat-legend-item-selected"></div>
                                    <p>Booked</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="button-solid" style="background-color: red;" data-bs-dismiss="modal"
                        @click="handleOpenModalDeleteSchedule">Delete</button>
                    <div class="d-flex flex-row">
                        <button type="button" class="button-outline" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="button-solid" @click="handleUpdate">Save Change</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>