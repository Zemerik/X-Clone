<template>
    <div class="relative flex flex-col items-center justify-start 2xl:w-7/12 xl:w-7/12 lg:w-7/12 sm:w-7/12 min-h-screen 2xl:ml-[280px] xl:ml-[280px] lg:ml-[80px] sm:ml-[80px]">
        <TwitNav/>
        <WhatsHappening/>
        <TwitPost/>
    </div>
    <aside class="2xl:w-5/12 xl:w-5/12 lg:w-5/12 sm:w-5/12 min-h-screen border-l-[0.5px] border-useGray relative flex flex-col justify-start gap-2 items-center px-5">
        <TwitSearch />
        <TrendsForYou />
        <WhoToFollow />
        <div class="flex flex-col text-lowsWhite text-[12px] w-full px-4 mt-1">
            <div class="flex gap-2">
                <span class="hover:underline cursor-pointer">Terms of Service</span>
                <span class="hover:underline cursor-pointer">Privacy Policy</span>
                <span class="hover:underline cursor-pointer">Cookie Policy</span>
            </div>
            <div class="flex gap-2">
                <span class="hover:underline cursor-pointer">Imprint</span>
                <span class="hover:underline cursor-pointer">Accessibility</span>
                <span class="hover:underline cursor-pointer">Ads info</span>
                <span class="hover:underline cursor-pointer">More...</span>
            </div>
            <span>© 2024 Twitter, Inc.</span>
        </div>
    </aside>
</template>

<script setup>
useHead({
    title: 'Home / X',
    meta: [
        { name: 'description', content: 'A Thrilling X Clone' }
    ],
})
</script>

