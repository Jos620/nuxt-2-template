<template>
    <a :href="link" target="_blank" :class="nameLower">
        <img :src="require(`~/assets/svg/${nameLower}.svg`)" alt="Github" />
        <p>{{ name }}</p>
    </a>
</template>

<script>
export default {
    name: 'Media Links',

    props: {
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },

    computed: {
        nameLower: function () {
            return this.name.toLowerCase();
        }
    }
}
</script>

<style lang="postcss">
a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 0 6px;
    color: white;
    width: 132px;
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

.codepen {
    right: 50%;
    transform: translateX(50%);
    @apply bg-codepen;

    &:hover {
        bottom: 24px;
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
