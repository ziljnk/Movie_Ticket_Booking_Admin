<style scope src="./modal-add-voucher.css"></style>
<script lang="ts" src="./modal-add-voucher.ts"></script>

<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="min-width:550px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100" id="ModalLabel">Add New Voucher</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex flex-column" style="margin:16px;">
                    <div class="d-flex flex-row" style="gap:32px; margin:16px;">
                        <div class="col d-flex flex-column" style="gap:16px">
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Name:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="voucherInput.name" style="height:30px" type="text"
                                        placeholder="Enter voucher's name" />
                                </div>
                                
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Code:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="voucherInput.code" style="height:30px" type="text"
                                        placeholder="Enter voucher's code" />
                                </div>
                                
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Value:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <input class="input" v-model="voucherInput.value" style="height:30px; width:50%" type="number" min="0"
                                        placeholder="Enter voucher's value" />
                                </div>
                                
                            </div>
                            <div class="input-field">
                                <p class="text-start" style="height:30px; font-weight:600">Description:</p>
                                <div class="d-flex flex-column" style="gap:4px">
                                    <textarea class="text-field input" v-model="voucherInput.description"
                                        placeholder="Enter voucher's description"></textarea>
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