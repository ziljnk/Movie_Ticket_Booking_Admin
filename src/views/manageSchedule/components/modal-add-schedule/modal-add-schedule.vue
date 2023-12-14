<style scope src="./modal-add-schedule.css"></style>
<script lang="ts" src="./modal-add-schedule.ts"></script>

<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:650px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Add New Schedule</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-column" style="margin:16px;">
                    <div class="d-flex flex-row" style="gap:32px; margin:16px;">
                        <div class="col d-flex flex-column" style="gap:16px">
                            <div class="d-flex flex-column">
                                <div class="input-field" style="gap:16px; width: 100%; margin: 0.5vh 0vh;">
                                    <div class="d-flex justify-content-start align-items-center"
                                        style="font-weight:600; font-size:14px">Movie:</div>
                                    <input v-if="!selectMovie" class="search-input input"
                                        placeholder="Enter movie name" v-model="movieInput" />
                                    <div v-else style="
                                        display: flex;
                                        height: 40px;
                                        padding: 8px;
                                        align-items: center;
                                        gap: 16px;
                                        align-self: stretch;
                                        border-radius: 12px;
                                        outline: 1px solid var(--neutral-06-day, #D6D6D6);">
                                        <div class="d-flex flex-row p-1 gap-2"
                                            style="border-radius: 8px; background: var(--second-04, #E8F3EC); width: fit-content;">
                                            <p>{{ selectMovie?.name + " (T" + selectMovie?.duration + ")" }}</p>
                                            <img src="@/assets/remove.svg" style="cursor:pointer"
                                                @click="handleRemoveMovie()" />
                                        </div>
                                    </div>
                                </div>
                                <div style="position:relative">
                                    <div v-if="movieInput && suggest?.length !== 0"
                                        class="text-start p-2 d-flex flex-column suggest">
                                        <div class="d-flex flex-column suggest-item" v-for="(item, index) in suggest"
                                            :key="index" @click="handleSelectMovie(item)"
                                            style="cursor:pointer; gap:8px">
                                            <p
                                                style="color: var(--neutral-darkest, #2B2B2B); font-size: 16px; font-weight: 600; line-height: 150%;">
                                                Name: {{ item?.name || 'N/A' }}</p>
                                            <p
                                                style="color: var(--neutral-darkest, #ADADAD); font-size: 14px; font-weight: 400; line-height: 150%;">
                                                Time: {{ item?.duration || 'N/A' }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Start at:</p>
                                <div class="d-flex flex-row" style="gap:4px">
                                    <input class="input" v-model="scheduleInput.startTimeDate" style="height:30px" type="date" />
                                    <input class="input" v-model="scheduleInput.startTime" style="height:30px" type="time" />
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">End at:</p>
                                <div class="d-flex flex-row" style="gap:4px">
                                    <input class="input" v-model="scheduleInput.endTimeDate" style="height:30px" type="date" />
                                    <input class="input" v-model="scheduleInput.endTime" style="height:30px" type="time" />
                                </div>
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Theatre:</p>
                                <div class="d-flex flex-row" style="gap:4px">
                                    <select class="custom-modal-select" v-model="scheduleInput.theatre">
                                        <option disabled selected value hidden>Choose theatre</option>
                                        <option v-for="(theatre, index) in allTheatres" :key="index" :value="theatre.id">
                                            {{ theatre.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Price:</p>
                                <div class="d-flex flex-row" style="gap:4px">
                                    <input class="input" v-model="scheduleInput.price" style="height:30px" type="number" min="0"
                                        placeholder="Enter ticket price" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="button-outline" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="button-solid" @click="handleClickActionBtn">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>