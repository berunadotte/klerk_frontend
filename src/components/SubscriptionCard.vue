<template>
  <article
    class="flex items-start border rounded-2xl shadow-md bg-gray-50 w-[478px] max-h-[244px] pt-[22px] pl-[24px] max-sm:w-[343px] max-sm:pt-[22px] max-sm:pl-[16px] max-sm:max-h-[272px]"
  >
    <div class="relative">
      <p class="text-[13px] text-gray-400 font-[400]">{{ comment }}</p>
      <h3 class="text-[20px] font-semibold leading-[16px] mt-[4px]">
        {{ title }}
      </h3>
      <img
        :src="icon"
        alt=""
        class="absolute top-[-1px] right-[-124px] w-[80px] h-[80px] mr-[16px] ml-[28px] mt-[2px] max-sm:w-[40px] max-sm:h-[40px] max-sm:pt-[0px] max-sm:top-[0px] max-sm:right-[-1px]"
      />
      <p
        class="text-gray-600 text-[14px] mt-[13px] max-w-[320px] max-sm:max-w-full max-sm:mr-[20px]"
      >
        {{ description }}
      </p>
      <ul
        class="text-sm text-black space-y-1 max-sm:max-w-[310px] max-sm:pb-[3px]"
      >
        <li
          v-for="(feature, index) in featuresArray"
          :key="index"
          :class="{ 'font-[500]': feature.includes('Никогда') }"
          class="flex items-center mt-[14px] mb-[9px]"
        >
          <img
            src="../assets/images/checkmark.svg"
            class="w-[16px] h-[16px] mr-[8px]"
            alt="checkmark"
          />
          {{ feature }}
        </li>
      </ul>
      <div class="flex items-center mt-[16px] max-sm:mt-[22px]">
        <label class="inline-flex items-center cursor-pointer mb-[22px]">
          <input
            type="checkbox"
            :id="`subscribe-${title}`"
            class="sr-only peer"
          />
          <div
            class="relative w-[48px] h-[24px] bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[22px] after:w-[22px] after:transition-all peer-checked:bg-blue-600"
          ></div>
          <span
            class="ml-[8px] text-sm font-medium text-gray-900 max-sm:ml-[16px]"
            >Уже получает {{ subscribers }}</span
          >
        </label>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    comment: String,
    title: String,
    description: String,
    features: String,
    subscribers: String,
    icon: String,
  },
  computed: {
    featuresArray() {
      const result = this.features.split(';')
      return result
    },
  },
}

</script>
<style scoped></style>
