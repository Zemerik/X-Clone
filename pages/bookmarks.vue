<template>
    <div class="relative flex flex-col items-center justify-start 2xl:w-7/12 xl:w-7/12 lg:w-7/12 sm:w-7/12 min-h-[200vh] 2xl:ml-[280px] xl:ml-[280px] lg:ml-[80px] sm:ml-[80px]">
        <div class="sticky top-0 w-full h-[56px] bg-transparent text-normalWhite mr-auto border-b-[0.5px] border-useGray backdrop-blur-sm">
           <div class="flex flex-col py-1 px-3">
               <h1 class="font-bold text-normalWhite text-lg">Bookmarks</h1>
               <span class="text-[10px] text-gray-400 font-light">@Zemerik_X</span>
           </div>
        </div>
        <div class="flex flex-col items-center justify-center text-normalWhite py-10">
            <img src="/images/nonebookmarks.png" class="w-72" alt="bookmarks none image">
            <div class="text-center mt-8">
                <h1 class="text-2xl font-bold ">Save Tweets for later</h1>
                <span class="text-sm text-lowsWhite">Don’t let the good ones fly away! Bookmark <br> Tweets to easily find them again in the future.</span>
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
    title: 'bookmarks',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})
</script>
