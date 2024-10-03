<template>
    <div class="flex w-full items-start gap-2 px-4 py-1 border-b-[0.5px] border-lowWhite h-auto">
        <nuxt-link to="/" class="cursor-pointer py-1 h-auto">
            <img src="/images/profile.jpeg" class="w-[43px] rounded-full hover:brightness-90" alt="">
        </nuxt-link>
        <div class="w-full flex flex-col group py-1 items-start ">
            <button class="hover:bg-hoverGreen relative group  group-focus-within:flex cursor-pointer  transition duration-200 hidden gap-2 items-center text-useGreen text-[12px]  ml-2 py-[1px] px-[12px] rounded-l-full rounded-r-full border-[1px] border-lowsWhite ">
                Everyone
                <svg viewBox="0 0 24 24" class="w-[13px] fill-useGreen" aria-hidden="true">
                    <g>
                        <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path>
                    </g>
                </svg>
                <span class="flex flex-col text-normalWhite gap-2 py-1 z-100 top-7 -right-12 rounded-xl absolute bg-black shadow-[rgba(222,222,222,0.6)] shadow-[0_0_7px_0] w-64 opacity-0 group-focus:opacity-100 pointer-events-none group-focus:pointer-events-auto transition duration-200">
                    <span class="text-lg text-start px-2 py-2 font-bold">Choose audience</span>
                    <a class="flex items-center text-[14px] gap-2 px-4 py-2 cursor-pointer hover:bg-lowWhite">
                        <span class="bg-useGreen rounded-full p-2">
                            <svg viewBox="0 0 24 24" class="fill-normalWhite w-[18px]" aria-hidden="true">
                                <g><path
                                        d="M4.65 8.24c-.57 1.13-.9 2.41-.9 3.76 0 4.56 3.69 8.25 8.25 8.25 2.87 0 5.4-1.47 6.88-3.69l-2.99-1.5.56-3.32-3.01-4.21 4.16-1.59c-1.27-1.17-2.91-1.95-4.72-2.14l-.5 2.38-2.08 1.04-.53 1.41 4.82 1.93-2.16 2.87-1.23 5.54-3.7-1.85V13.1l-.53-2.68.26-.71-2.58-1.47zm1.13-1.66l2.16 1.23.77-2.03 1.91-.96.21-.99c-2.01.29-3.78 1.3-5.05 2.75zm3.26 4l.46 2.32v2.98l.3.15.77-3.46.85-1.13-2.35-.94-.03.08zm9.92-3.02l-2.39.91 1.99 2.79-.45 2.68 1.67.83c.3-.87.47-1.8.47-2.77 0-1.63-.47-3.16-1.29-4.44zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"></path></g>
                            </svg>
                        </span>
                        Everyone
                    </a>
                    <a class="flex flex-col text-[14px] items-start py-2 px-4 cursor-pointer hover:bg-lowWhite">
                        <div class="flex items-center gap-2">
                            <span class="bg-useGreen rounded-full p-2">
                                <svg viewBox="0 0 24 24" class="fill-normalWhite w-[18px]" aria-hidden="true">
                                    <g><path
                                            d="M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm13.759-3.83c-.355-.69-1.059-1.13-1.84-1.17-.66-.03-1.347.22-1.918.79-.573-.57-1.259-.82-1.92-.79-.781.04-1.485.48-1.84 1.17-.358.71-.339 1.62.206 2.59.541.97 1.601 1.99 3.352 2.98l.202.12.201-.12c1.751-.99 2.811-2.01 3.352-2.98.544-.97.563-1.88.205-2.59z"></path></g>
                                </svg>
                            </span>
                           <div class="flex flex-col items-center">
                                Twitter Circle
                            <div class="text-[13px] ml-2"><span class="text-lowsWhite"><b class="text-normalWhite">0</b> people</span> <span
                                    class="cursor-pointer rounded-full px-2 py-1 hover:bg-lowWhite underline">Edit</span></div>
                           </div>
                        </div>

                    </a>
                </span>
            </button>
            <input type="text" v-model="input" placeholder="What's happening?"
                   class="text-normalWhite bg-transparent text-lg outline-none resize-none overflow-hidden px-2 mt-2 w-full">
            <div class="border-b-[1px] border-lowsWhite w-full mt-2 py-3 hidden group-focus-within:block">
                <button class="flex gap-1 relative group hover:bg-hoverGreen transition duration-200 text-useGreen text-[13px] items-center px-2 rounded-l-full rounded-r-full">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="w-[13px] fill-useGreen">
                        <g>
                            <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path>
                        </g>
                    </svg>
                    Everyone can reply
                    <span class="flex flex-col text-normalWhite gap-2 py-1 z-100 top-7 -right-12 rounded-xl absolute bg-black shadow-[rgba(222,222,222,0.6)] shadow-[0_0_7px_0] w-72 opacity-0 group-focus:opacity-100 pointer-events-none group-focus:pointer-events-auto transition duration-200">
                        <span class="text-sm font-light text-start text-lowsWhite px-2 py-2 ">
                            <b class="text-normalWhite font-bold">Who can reply?</b><br>
                            Choose who can reply to this Tweet. Anyone mentioned can always reply
                        </span>
                            <a class="flex items-center text-[14px] gap-2 px-4 py-2 cursor-pointer hover:bg-lowWhite">
                                <span class="bg-useGreen rounded-full p-2">
                                    <svg viewBox="0 0 24 24" class="fill-normalWhite w-[18px]" aria-hidden="true">
                                        <g><path
                                                d="M4.65 8.24c-.57 1.13-.9 2.41-.9 3.76 0 4.56 3.69 8.25 8.25 8.25 2.87 0 5.4-1.47 6.88-3.69l-2.99-1.5.56-3.32-3.01-4.21 4.16-1.59c-1.27-1.17-2.91-1.95-4.72-2.14l-.5 2.38-2.08 1.04-.53 1.41 4.82 1.93-2.16 2.87-1.23 5.54-3.7-1.85V13.1l-.53-2.68.26-.71-2.58-1.47zm1.13-1.66l2.16 1.23.77-2.03 1.91-.96.21-.99c-2.01.29-3.78 1.3-5.05 2.75zm3.26 4l.46 2.32v2.98l.3.15.77-3.46.85-1.13-2.35-.94-.03.08zm9.92-3.02l-2.39.91 1.99 2.79-.45 2.68 1.67.83c.3-.87.47-1.8.47-2.77 0-1.63-.47-3.16-1.29-4.44zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"></path></g>
                                    </svg>
                                </span>
                                Everyone
                            </a>
                            <a class="flex items-center text-[14px] gap-2 px-4 py-2 cursor-pointer hover:bg-lowWhite">
                                <span class="bg-useGreen rounded-full p-2">
                                    <svg viewBox="0 0 24 24" class="fill-normalWhite w-[18px]" aria-hidden="true">
                                        <g><path
                                                d="M4.65 8.24c-.57 1.13-.9 2.41-.9 3.76 0 4.56 3.69 8.25 8.25 8.25 2.87 0 5.4-1.47 6.88-3.69l-2.99-1.5.56-3.32-3.01-4.21 4.16-1.59c-1.27-1.17-2.91-1.95-4.72-2.14l-.5 2.38-2.08 1.04-.53 1.41 4.82 1.93-2.16 2.87-1.23 5.54-3.7-1.85V13.1l-.53-2.68.26-.71-2.58-1.47zm1.13-1.66l2.16 1.23.77-2.03 1.91-.96.21-.99c-2.01.29-3.78 1.3-5.05 2.75zm3.26 4l.46 2.32v2.98l.3.15.77-3.46.85-1.13-2.35-.94-.03.08zm9.92-3.02l-2.39.91 1.99 2.79-.45 2.68 1.67.83c.3-.87.47-1.8.47-2.77 0-1.63-.47-3.16-1.29-4.44zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"></path></g>
                                    </svg>
                                </span>
                                People you follow
                            </a>
                            <a class="flex items-center text-[14px] gap-2 px-4 py-2 cursor-pointer hover:bg-lowWhite">
                            <span class="bg-useGreen rounded-full p-2">
                                <svg viewBox="0 0 24 24" class="fill-normalWhite w-[18px]" aria-hidden="true">
                                    <g><path
                                            d="M4.65 8.24c-.57 1.13-.9 2.41-.9 3.76 0 4.56 3.69 8.25 8.25 8.25 2.87 0 5.4-1.47 6.88-3.69l-2.99-1.5.56-3.32-3.01-4.21 4.16-1.59c-1.27-1.17-2.91-1.95-4.72-2.14l-.5 2.38-2.08 1.04-.53 1.41 4.82 1.93-2.16 2.87-1.23 5.54-3.7-1.85V13.1l-.53-2.68.26-.71-2.58-1.47zm1.13-1.66l2.16 1.23.77-2.03 1.91-.96.21-.99c-2.01.29-3.78 1.3-5.05 2.75zm3.26 4l.46 2.32v2.98l.3.15.77-3.46.85-1.13-2.35-.94-.03.08zm9.92-3.02l-2.39.91 1.99 2.79-.45 2.68 1.67.83c.3-.87.47-1.8.47-2.77 0-1.63-.47-3.16-1.29-4.44zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"></path></g>
                                </svg>
                            </span>
                            Only people you mention
                            </a>
                    </span>
                </button>
            </div>
            <div class="flex items-center justify-between px-2 w-full">
                <ul class="flex items-center pt-6 pb-2 gap-3">
                    <li class="cursor-pointer hover:bg-hoverGreen rounded-full p-1">
                        <svg viewBox="0 0 24 24" class="w-[18px] fill-useGreen" aria-hidden="true">
                            <g>
                                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                            </g>
                        </svg>
                    </li>
                    <li class="cursor-pointer hover:bg-hoverGreen rounded-full p-1">
                        <svg viewBox="0 0 24 24" class="w-[18px] fill-useGreen" aria-hidden="true">
                            <g>
                                <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
                            </g>
                        </svg>
                    </li>
                    <li class="cursor-pointer hover:bg-hoverGreen rounded-full p-1">
                        <svg viewBox="0 0 24 24" class="w-[18px] fill-useGreen" aria-hidden="true">
                            <g>
                                <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
                            </g>
                        </svg>
                    </li>
                    <li class="cursor-pointer hover:bg-hoverGreen rounded-full p-1">
                        <svg viewBox="0 0 24 24" class="w-[18px] fill-useGreen" aria-hidden="true">
                            <g>
                                <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                            </g>
                        </svg>
                    </li>
                    <li class="cursor-pointer hover:bg-hoverGreen rounded-full p-1">
                        <svg viewBox="0 0 24 24" class="w-[18px] fill-useGreen" aria-hidden="true">
                            <g>
                                <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
                            </g>
                        </svg>
                    </li>
                    <li class="brightness-50 hover:bg-hoverGreen rounded-full p-1">
                        <svg viewBox="0 0 24 24" class="w-[18px] fill-useGreen" aria-hidden="true">
                            <g>
                                <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                            </g>
                        </svg>
                    </li>
                </ul>
                <div class="mt-2">
                    <button v-bind:class="isFill">Post</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const input = ref(null)

const isFill = computed(() => {
    if (input.value !== null) {
        return 'text-normalWhite bg-useGreen text-sm font-bold rounded-l-full rounded-r-full py-[6px] px-3'
    } else {
        return 'text-normalWhite bg-useGreen text-sm font-bold rounded-l-full rounded-r-full py-[6px] px-3 brightness-50'
    }
})
</script>
