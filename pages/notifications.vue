<template>
    <div class="relative flex flex-col items-center justify-start 2xl:w-7/12 xl:w-7/12 lg:w-7/12 sm:w-7/12 min-h-[200vh] 2xl:ml-[280px] xl:ml-[280px] lg:ml-[80px] sm:ml-[80px]">
        <div class="sticky top-0 w-full h-[96px] bg-transparent text-normalWhite mr-auto border-b-[0.5px] border-useGray backdrop-blur-sm">
            <div class="h-[48px] w-full flex items-center justify-between py-3 px-4 ">
                <nuxt-link to="/"><h3 class="font-bold">Notifications</h3></nuxt-link>
                <span class="fill-normalWhite p-2 hover:bg-lowWhite rounded-full cursor-pointer">
                    <svg viewBox="0 0 24 24" class="w-[16px]" aria-hidden="true">
                    <g>
                        <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
                    </g>
                    </svg>
                </span>
            </div>
            <div class="flex justify-evenly items-center text-sm font-light" >
                <a class="w-6/12 text-center h-[48px] flex flex-col items-center justify-center text-white font-normal cursor-pointer hover:bg-lowWhite transition duration-200 relative"><span>All</span><div class="absolute bg-useGreen w-14 h-[4px] rounded top-10"></div></a>
                <a class="w-6/12 text-center h-[48px] flex flex-col items-center justify-center cursor-pointer hover:bg-lowWhite transition duration-200 text-lowsWhite"><span>Verified</span></a>
                <a class="w-6/12 text-center h-[48px] flex flex-col items-center justify-center cursor-pointer hover:bg-lowWhite transition duration-200 text-lowsWhite"><span>Mentions</span></a>
            </div>
        </div>
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
    title: 'notifications',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})
</script>
