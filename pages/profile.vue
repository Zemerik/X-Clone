<template>
    <div class="relative flex flex-col items-center justify-start 2xl:w-7/12 xl:w-7/12 lg:w-7/12 sm:w-7/12 min-h-screen 2xl:ml-[280px] xl:ml-[280px] lg:ml-[80px] sm:ml-[80px]">
       <div class="flex sticky top-0 w-full bg-transparent backdrop-blur-sm gap-6 items-center justify-start py-1 z-100">
           <nuxt-link to="/" class="fill-normalWhite hover:bg-lowWhite p-[7px] rounded-full ml-2 cursor-pointer">
               <svg viewBox="0 0 24 24" aria-hidden="true" class=" w-[18px]"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
           </nuxt-link>
           <div class="flex flex-col text-normalWhite">
               <h1 class=" text-[17px] font-semibold">Hemang Yadav</h1>
               <span class="text-[12px] font-light text-lowsWhite">125 Posts</span>
           </div>
       </div>

        <div class="relative w-full">
            <img src="/images/banner.png" class="h-[200px] w-full object-cover" alt="banner image">
            <img src="/images/profile.jpeg" class="h-[146.5px] w-[146.5px] rounded-full absolute -bottom-[80px] border-[4px] border-black left-3" alt="profile image">
        </div>

        <div class="flex justify-end items-center text-end w-full py-4">
            <button class="text-normalWhite mr-4 text-sm border-[1px] border-normalWhite py-1 px-3 rounded-l-full rounded-r-full transition duration-200 hover:bg-lowsWhite">Edit Profile</button>
        </div>

        <div class="flex flex-col w-full items-start justify-center mt-7 px-4 gap-3">
          <div class="flex flex-col text-normalWhite">
              <span class="text-normalWhite text-[18px] font-bold">Hemang Yadav</span>
              <span class="text-lowsWhite text-[13px] font-light">@Zemerik_X</span>
          </div>
            <span class="flex gap-2 items-center text-lowsWhite text-[13px]"><svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 fill-lowsWhite"><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g></svg> Joined July 2023</span>
            <div class="flex items-center gap-4">
                <span class="flex text-lowsWhite text-[12px] gap-2 cursor-pointer hover:underline"> <b class="text-normalWhite">  321 </b>   Following</span>
                <span class="flex text-lowsWhite text-[12px] gap-2 cursor-pointer hover:underline underline-normalWhite"> <b class="text-normalWhite">  330 </b>   Followers</span>
            </div>
        </div>
        <div class="w-full h-[48px] mt-2 bg-transparent text-normalWhite mr-auto border-b-[0.5px] border-useGray backdrop-blur-sm">
            <div class="flex justify-evenly items-center text-sm font-light" >
                <a class="w-6/12 text-center h-[48px] flex flex-col items-center justify-center text-white font-normal cursor-pointer hover:bg-lowWhite transition duration-200 relative"><span>Tweets</span><div class="absolute bg-useGreen w-14 h-[4px] rounded top-10"></div></a>
                <a class="w-6/12 text-center h-[48px] flex flex-col items-center justify-center cursor-pointer hover:bg-lowWhite transition duration-200 text-lowsWhite"><span>Replies</span></a>
                <a class="w-6/12 text-center h-[48px] flex flex-col items-center justify-center cursor-pointer hover:bg-lowWhite transition duration-200 text-lowsWhite"><span>Media</span></a>
                <a class="w-6/12 text-center h-[48px] flex flex-col items-center justify-center cursor-pointer hover:bg-lowWhite transition duration-200 text-lowsWhite"><span>Likes</span></a>
            </div>
        </div>
        <TwitPost />
    </div>
    <aside class="2xl:w-5/12 xl:w-5/12 lg:w-5/12 sm:w-5/12 min-h-screen border-l-[0.5px] border-useGray relative flex flex-col justify-start gap-2 items-center px-5">
        <TwitSearch />
        <WhoToFollow />
        <TrendsForYou />
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
    title: 'Hemang Yadav (Zemerik_X) / X',
    meta: [
        { name: 'description', content: 'A Thrilling X Clone' }
    ],
})
</script>
