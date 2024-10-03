<template>
    <div class="relative flex flex-col items-center justify-start 2xl:w-7/12 xl:w-7/12 lg:w-7/12 sm:w-7/12 min-h-[200vh] 2xl:ml-[280px] xl:ml-[280px] lg:ml-[80px] sm:ml-[80px]">
        <div class="flex justify-start items-center sticky top-0 bg-black w-full">
            <div class="bg-black  top-0 py-2 group w-full px-5">
                <label tabindex="3"
                       class="flex bg-useGray py-[10px] rounded-l-full rounded-r-full justify-start px-3 items-center focus-within:border-[0.5px] focus-within:border-useGreen focus-within:bg-black">
                     <span class="cursor-pointer ">
                          <svg viewBox="0 0 24 24" class="fill-lowsWhite w-[18px] group-focus-within:fill-useGreen"
                               aria-hidden="true">
                          <g>
                              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                          </g>
                          </svg>
                     </span>
                    <input type="text" class="outline-none bg-transparent px-2 text-lowsWhite text-sm flex-grow"
                           v-model="searchInput" placeholder="Search Twitter">
                    <span @click="clearSearchInput"
                          class="flex items-center justify-center bg-useGreen rounded-full box-border cursor-pointer	w-5 h-5 opacity-0 group-focus-within:opacity-100">
                    <svg viewBox="0 0 15 15" class="fill-black w-[10px] " aria-hidden="true">
                    <g>
                        <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path>
                    </g>
                    </svg>
                    </span>
                </label>
            </div>
            <div class="pr-4">
                <span class="fill-normalWhite p-2 hover:bg-lowWhite rounded-full cursor-pointer">
                    <svg viewBox="0 0 24 24" class="w-[16px]" aria-hidden="true">
                    <g>
                        <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
                    </g>
                    </svg>
                </span>
            </div>
        </div>

        <div class="w-full border-b-[1px] border-lowsWhite">
            <div class="bg-transparent h-auto overflow-hidden">
                <h1 class="text-normalWhite text-lg font-bold px-3 py-3">Trends for you</h1>
                <ul class="flex flex-col text-normalWhite">
                    <li v-for="trend in trendsForYou" :key="trend.id"
                        class="flex px-2 py-1 cursor-pointer hover:bg-lowWhite justify-between items-start">
                        <div class="flex flex-col px-2">
                            <span class="text-[12px] text-lowsWhite font-light">{{ trend.trending }}</span>
                            <span class="text-sm font-bold">{{ trend.title }}</span>
                            <span class="text-[12px] text-lowsWhite font-light">{{ trend.twitCount }} tweet</span>
                        </div>
                        <div tabindex="10"
                             class="cursor-pointer relative group rounded-full p-2 fill-lowsWhite  hover:fill-tickBlue  hover:bg-hoverBlue z-100 transition duration-200">
                            <svg viewBox="0 0 24 24" class="w-[15px] " aria-hidden="true">
                                <g>
                                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                                </g>
                            </svg>
                            <div class="absolute  opacity-0 shadow-[rgba(222,222,222,0.6)] shadow-[0_0_7px_0] overflow-hidden text-normalWhite rounded-xl text-sm w-64 bg-black z-100 pointer-events-none group-focus:opacity-100 group-focus:pointer-events-auto -bottom-10 transition duration-200 right-0">
                                <div class="flex flex-col">
                                <span class="py-3 px-2 flex items-center gap-2 hover:bg-lowWhite cursor-pointer">
                                  <svg viewBox="0 0 24 24" class="fill-normalWhite w-[18px] " aria-hidden="true"><g><path
                                          d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></g></svg>
                                  Not interested in this
                                </span>
                                    <span class="py-3 px-2 flex items-center gap-2 hover:bg-lowWhite cursor-pointer">
                                    <svg viewBox="0 0 24 24" class="fill-normalWhite w-[18px]" aria-hidden="true"><g><path
                                            d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></g></svg>
                                    This trend is harmful or spammy
                                </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="text-sm text-useGreen p-2 py-4 hover:bg-lowWhite cursor-pointer">Show More</li>
                </ul>
            </div>
        </div>
        <div class="w-full text-normalWhite ">
            <h1 class="text-[18px] px-2 font-bold py-2">What's happening</h1>
            <ul>
                <li class="cursor-pointer hover:bg-lowWhite px-2 py-2">
                    <div class="flex items-center justify-between">
                        <span class="text-[12px] font-bold">NBA</span>
                        <span class="text-[12px] text-lowsWhite">Today * 2:00 AM</span>
                    </div>
                    <div class="w-full overflow-hidden rounded-lg py-1">
                        <span class="flex items-center gap-3 text-sm justify-start font-bold bg-[#E14434] py-2">
                            <img src="/images/atlanta.png" class="w-[40px]" alt="atlanta image">
                            Atlanta Hawks
                        </span>
                        <span class="flex items-center gap-3 text-sm justify-start font-bold bg-[#007A33] py-2">
                            <img src="/images/boston.png" class="w-[40px]" alt="boston image">
                            Boston Celtics
                        </span>
                    </div>
                </li>
                <li class="cursor-pointer hover:bg-lowWhite px-2 py-2">
                    <div class="flex items-center justify-between">
                        <span class="text-[12px] font-bold">NBA</span>
                        <span class="text-[12px] text-lowsWhite">Today * 2:00 AM</span>
                    </div>
                    <div class="w-full overflow-hidden rounded-lg py-1">
                        <span class="flex items-center gap-3 text-sm justify-start font-bold bg-[#006BB6] py-2">
                            <img src="/images/atlanta.png" class="w-[40px]" alt="atlanta image">
                            New York Knicks
                        </span>
                        <span class="flex items-center gap-3 text-sm justify-start font-bold bg-[#6F263D] py-2">
                            <img src="/images/boston.png" class="w-[40px]" alt="boston image">
                            Cleveland Cavaliers
                        </span>
                    </div>
                </li>
                <li class="text-sm text-useGreen p-2 py-4 hover:bg-lowWhite cursor-pointer">Show More</li>
            </ul>
        </div>
    </div>
    <aside class="2xl:w-5/12 xl:w-5/12 lg:w-5/12 sm:w-5/12 min-h-screen border-l-[0.5px] border-useGray relative flex flex-col justify-start gap-2 items-center px-5">
        <WhoToFollow/>
    </aside>
</template>

<script setup>
import {ref} from "#imports";

const trendsForYou = ref([
    {id: 1, trending: 'Sports · Trending', title: 'Essendon', twitCount: '4.56M'},
    {id: 2, trending: 'Politics · Trending', title: 'Iran', twitCount: '2.18M'},
    {id: 3, trending: 'Technology · Trending', title: 'Hackoctoberfest', twitCount: '1.78M'},
    {id: 4, trending: 'Trending in Australia', title: 'Bhallarat', twitCount: '1.39M'},
    {id: 5, trending: 'Bollywood · Trending ', title: 'Singhamagain', twitCount: '2.32M'},
])

const searchInput = ref('');

const clearSearchInput = () => {
    searchInput.value = '';
}

useHead({
    title: 'explore',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})
</script>