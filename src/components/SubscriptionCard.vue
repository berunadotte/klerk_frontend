<template>
  <div
    class="flex items-start border rounded-2xl shadow-md bg-gray-50 w-[478px] pt-[22px] pl-[24px]"
  >
    <div>
      <p class="text-[13px] text-gray-400 font-[400]">{{ comment }}</p>
      <h3 class="text-[20px] font-semibold leading-[16px] mt-[4px]">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-[14px] mt-[13px] max-w-[320px]">
        {{ description }}
      </p>
      <ul class="text-sm text-black space-y-1">
        <li
          v-for="(feature, index) in featuresArray"
          :key="index"
          :class="{ 'font-[500]': feature.includes('Никогда') }"
          class="flex items-center mt-[14px] mb-[9px]"
        >
          <img
            src="../assets/images/checkmark.svg"
            class="w-[16px] h-[16px] mr-2"
            alt="checkmark"
          />
          {{ feature }}
        </li>
      </ul>
      <div class="flex items-center mt-4">
        <label class="inline-flex items-center cursor-pointer mb-[22px]">
          <input
            type="checkbox"
            :id="`subscribe-${title}`"
            class="sr-only peer"
          />
          <div
            class="relative w-[48px] h-[24px] bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[22px] after:w-[22px] after:transition-all peer-checked:bg-blue-600"
          ></div>
          <span class="ml-[8px] text-sm font-medium text-gray-900"
            >Уже получает {{ subscribers }}</span
          >
        </label>
      </div>
    </div>
    <img :src="icon" alt="" class="w-[80px] h-[80px] mr-4 ml-[28px] mt-[2px]" />
  </div>
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
