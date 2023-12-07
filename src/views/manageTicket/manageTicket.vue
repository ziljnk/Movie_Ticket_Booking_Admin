<style src="./manageTicket.css"></style>

<script lang="ts" src="./manageTicket.ts"></script>

<template>
    <ModalDetailTicket id="detailTicket" />
    <div class="manageTheatre-container">
        <div class="background-feature d-flex flex-column">
            <Header />
            <div class="d-flex flex-row" style="height: calc( 100vh - 66px)">
                <NavigationBar class="col-2" />
                <div class="col-10 d-flex flex-column"
                    style="padding:24px; overflow-y: hidden; overflow-x: hidden; z-index:1;" v-motion-slide-left>

                    <div class="d-flex flex-column"
                        style="gap:12px; background: #ffffff; width:100%; padding:16px; height:100%; position: relative; border-radius:16px">
                        <div class="d-flex flex-row justify-content-between align-items-center"
                            style="width:100%; gap:16px">
                            <div class="col-6 d-flex flex-row " style="gap:16px;">
                                <div class="d-flex justify-content-center align-items-center"
                                    style="font-weight:600; font-size:16px; color: #712f06;">Search:</div>
                                <input class="search-input input" placeholder="Enter your input" v-model="searchQuery" />
                            </div>
                        </div>
                        <div class="d-flex flex-column" style="gap:12px; margin-top: 2vh; overflow-y: scroll;">
                            <div class="d-flex flex-row">
                                <div class="col-2 text-title-1">
                                    No
                                </div>
                                <div class="col-2 text-title-1">
                                    Schedule ID
                                </div>
                                <div class="col-2 text-title-1">
                                    Seat
                                </div>
                                <div class="col-2 text-title-1">
                                    Voucher
                                </div>
                                <div class="col-2 text-title-1">
                                    Price
                                </div>
                                <div class="col-2 text-title-1">
                                    Created at
                                </div>
                            </div>
                            <div class="column-item" v-for="(item, index) in tickets" :key="index" data-bs-toggle="modal"
                                data-bs-target="#detailTicket" v-motion-slide-left>
                                <p class="col-2">
                                    {{ index + 1 }}
                                </p>
                                <p class="col-2">
                                    {{ item?.schedule }}
                                </p>
                                <p class="col-2">
                                    {{ item?.seat?.row + item?.seat?.number }}
                                </p>
                                <p class="col-2">
                                    {{ item?.voucher?.value || '0' }}%
                                </p>

                                <p class="col-2">
                                    {{ item?.price }}
                                </p>
                                <p class="col-2">
                                    {{ item?.createdAt.slice(0,10) }}
                                </p>
                            </div>
                        </div>
                        <div class="count-page">
                            <div :class="[currentPage === index + 1 ? 'current-page-number' : '', 'page-number']"
                                v-for="(item, index) in totalPage" :key="index">
                                <p>{{ index + 1 }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>