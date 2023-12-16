<script lang="ts" src="./TopMovieItem.ts"></script>
<style lang="css" src="./TopMovieItem.css"></style>

<template>
    <div class="movie-item-container">
        <img :src="movieData.image" />
        <table>
            <tr>
                <td class="title">Name</td>
                <td class="value">{{ movieData.name }}</td>
            </tr>
            <tr>
                <td class="title">Release Date</td>
                <td class="value">{{ movieData.publishDate }}</td>
            </tr>
            <tr>
                <td class="title">Director</td>
                <td class="value">{{ movieData.director }}</td>
            </tr>
            <tr>
                <td class="title">Actors</td>
                <td class="value">{{ movieData.actors }}</td>
            </tr>
            <tr>
                <td class="title">Profit</td>
                <td class="value">{{ movieData.profit }}</td>
            </tr>
        </table>
    </div>
</template>