<style scope src="./modal-add-genre.css"></style>
<script lang="ts" src="./modal-add-genre.ts"></script>

<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:300px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Add New Genre</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-column" style="margin:16px;">
                    <div class="d-flex flex-row" style="gap:32px; margin:16px;">
                        <div class="col d-flex flex-column" style="gap:16px">
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Name:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="movieInput.name" style="height:30px" type="text"
                                        placeholder="Enter genre's name" />
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