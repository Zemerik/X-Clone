<template>
    <div class="flex flex-col justify-start items-center sticky top-0 bg-black w-full">
        <div class="bg-black  top-0 py-2 group w-full px-5">
            <label tabindex="3" class="flex   bg-useGray py-[10px] px-5 gap-2 rounded-l-full rounded-r-full justify-center items-center focus-within:border-[0.5px] focus-within:border-useGreen focus-within:bg-black">
               <span class="cursor-pointer ">
                    <svg  viewBox="0 0 24 24" class="fill-lowsWhite w-[18px] group-focus-within:fill-useGreen" aria-hidden="true">
                    <g>
                        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                    </g>
                    </svg>
               </span>
                <input type="text" class="outline-none bg-transparent px-2 text-lowsWhite text-sm" v-model="searchInput" placeholder="Search Twitter">
               <span @click="clearSearchInput" class="flex items-center justify-center bg-useGreen rounded-full box-border cursor-pointer	w-5 h-5 opacity-0 group-focus-within:opacity-100">
                    <svg viewBox="0 0 15 15" class="fill-black w-[10px] " aria-hidden="true">
                    <g>
                        <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path>
                    </g>
                    </svg>
               </span>
            </label>
        </div>
    </div>
</template>

<script setup>
  const searchInput = ref('');

  const clearSearchInput = () => {
      searchInput.value = '';
  }
</script>

