<style scope src="./modal-add-theatre.css"></style>
<script lang="ts" src="./modal-add-theatre.ts"></script>

<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:550px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Add New Theatre</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-column" style="margin:16px;">
                    <div class="d-flex flex-row" style="gap:32px; margin:16px;">
                        <div class="col d-flex flex-column" style="gap:16px">
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Name:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="theatreInput.name" style="height:30px" type="text"
                                        placeholder="Enter theatre's name" />
                                </div>
                                
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Description:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <textarea class="text-field input" v-model="theatreInput.description"
                                        placeholder="Enter theatre's description"></textarea>
                                </div>
                            </div>

                        </div>
                    </div>  

                </div>

                <div class="modal-footer">
                    <button type="button" class="button-outline" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="button-solid" @click="handleClickActionButton">Add</button>
                </div>
            </div>
        </div>
</div></template>