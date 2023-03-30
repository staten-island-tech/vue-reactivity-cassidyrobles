<template>
    <div class="card">
<h2>{{ title }}</h2>
<img v-bind:src="image"/>
<p>{{ description }}</p>
    </div>
</template>

<script>
    export default {
        name: "Card",
    props: {
        name: String,
        price: number,
        image: String,
    },
};
</script>

<style>
.card{
    width: 30%;
    background-color: red;
}
</style>