<template>
    <div class="relative flex flex-col items-center justify-start 2xl:w-4/12 xl:w-4/12 lg:w-4/12 sm:w-4/12 min-h-screen 2xl:ml-[280px] xl:ml-[280px] lg:ml-[80px] sm:ml-[80px]">
        <div class="w-full flex items-center justify-between py-2">
            <h1 class="text-normalWhite px-2">Messages</h1>
            <div class="flex gap-1 items-center px-2">
              <span>
                  <svg viewBox="0 0 24 24" class="fill-normalWhite w-[26px] cursor-pointer hover:bg-lowWhite p-1 rounded-full transition duration-200" aria-hidden="true">
                      <g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g>
                  </svg>
              </span>
                <span>
                    <svg viewBox="0 0 24 24" class="fill-normalWhite w-[26px]  cursor-pointer hover:bg-lowWhite p-1 rounded-full transition duration-200" aria-hidden="true">
                        <g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g>
                    </svg>
                </span>
            </div>
        </div>
        <div class="flex flex-col justify-start w-full mt-10 items-start">
            <h1 class="text-[28px] font-bold text-normalWhite px-7">Welcome to your <br> inbox!</h1>
            <span class="text-lowsWhite text-[13px] font-light px-7">Drop a line, share Tweets and more with <br> private conversations between you and others <br> on Twitter.</span>
            <div class="pl-6">
                <button class="text-normalWhite mt-5 hover:brightness-90 transition duration-200  bg-useGreen py-3 px-5 rounded-l-full font-bold text-sm rounded-r-full">Write a message</button>
            </div>
        </div>
    </div>
    <aside class="2xl:w-7/12 xl:w-7/12 lg:w-7/12 sm:w-7/12 min-h-screen border-l-[0.5px] border-r-[0.5px] border-useGray relative flex flex-col justify-start gap-2 items-center px-5">
        <div class="flex flex-col justify-start w-auto left-36 top-44 items-start absolute">
            <h1 class="text-[28px] font-bold text-normalWhite px-7">Select a message</h1>
            <span class="text-lowsWhite text-[13px] font-light px-7">Choose from your existing conversations, start <br> a new one, or just keep swimming.</span>
            <div class="pl-6">
                <button class="text-normalWhite mt-5 hover:brightness-90 transition duration-200  bg-useGreen py-3 px-5 rounded-l-full font-bold text-sm rounded-r-full">New Message</button>
            </div>
        </div>
    </aside>
</template>

<script setup>
useHead({
    title: 'messages',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})
</script>
