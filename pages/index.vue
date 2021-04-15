<template>
    <div class="container mx-auto">
        <h1 class="text-9xl font-semibold tracking-wide">Nuxt JS</h1>

        <div>
            <media-link name="LinkedIn" link="https://linkedin.com/in/mateus-eduardo-ito-silva-b728ba196" />
            <media-link name="CodePen" link="https://codepen.io/mateus-ito" />
            <media-link name="GitHub" link="https://github.com/jos620" />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.container {
    height: 100vh;
    display: grid;
    place-items: center;
}

h1 {
    @apply text-transparent bg-clip-text;
    @apply bg-gradient-to-r;
    @apply from-blue-600 via-cyan-600 to-green-600;
}
</style>
