<template>
    <div class="container">
        <h1 class="text-9xl font-semibold tracking-wide">Nuxt JS</h1>

        <div>
            <a href="https://github.com/jos620" target="_blank" class="github">
                <img src="~/assets/svg/github.svg" alt="Github" />
                <p>Github</p>
            </a>
            <a
                href="https://www.linkedin.com/in/mateus-eduardo-ito-silva-b728ba196/"
                target="_blank"
                class="linkedin"
            >
                <img src="~/assets/svg/linkedin.svg" alt="LinkedIn" />
                <p>LinkedIn</p>
            </a>
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
    @apply from-green-500 via-cyan-400 to-blue-500;
}

a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 0 6px;
    color: white;
    width: 128px;
    height: 64px;
    border-radius: 6px;
    position: fixed;
    bottom: 20px;
    transition: all 100ms ease-in-out 0s;

    @apply shadow-md hover:shadow-xl;

    &:focus {
        outline: none;
    }

    &:hover {
        bottom: 24px;
    }
}

.linkedin {
    left: 20px;
    @apply bg-linkedin;

    &:hover {
        left: 24px;
    }
}

.github {
    right: 20px;
    @apply bg-github;

    &:hover {
        right: 24px;
    }
}
</style>
