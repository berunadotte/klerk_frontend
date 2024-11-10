<template>
  <div class="bg-white min-h-screen flex flex-col items-center font-sans">
    <header class="text-center mt-[48px]">
      <img src="./assets/images/logo.svg" alt="Logo" class="mx-auto" />
      <nav
        aria-label="Навигация по сайту"
        class="text-gray-500 text-[13px] space-x-2.5 pt-[22px] max-sm:mt-[4px] max-sm:space-x-2"
      >
        <span v-if="!isSmallScreen">Хлебные крошки</span>
        <span v-else>Главная</span> →
        <span v-if="!isSmallScreen">Хлебные крошки</span>
        <span v-else>Рассылки</span> →
        <span>Хлебные крошки</span>
      </nav>
      <h1
        class="text-[56px] font-medium mt-[17px] max-sm:text-[32px] max-sm:mt-[4px]"
      >
        Подписки «Клерка»
      </h1>
    </header>
    
    <main>
      <div class="mt-[18px] max-sm:mt-[20px]">
        <ul
          class="flex space-x-6 text-[16px] tracking-tighter font-medium text-blue-500 max-sm:space-x-8 max-sm:ml-[9px]"
        >
          <li class="border-solid border-b-2 border-blue-500 pb-[16px]">
            <a href="#">Рассылки</a>
          </li>
          <li
            class="border-solid hover:border-b-2 border-blue-500 pb-[16px] text-gray-400 hover:text-blue-500"
          >
            <a href="#">Соцсети</a>
          </li>
          <li>
            <a
              href="#"
              class="border-solid hover:border-b-2 border-blue-500 pb-[19px] text-gray-400 hover:text-blue-500"
              >Мессенджеры</a
            >
          </li>
        </ul>
      </div>

      <section
        class="bg-bg-gray rounded-lg shadow-lg w-full max-w-[1024px] max-sm:max-w-full"
      >
        <h2
          class="text-center text-[24px] font-medium mb-[21px] mt-[46px] max-sm:mx-[8px] max-sm:text-left max-sm:mt-[31px] max-sm:leading-[32px] max-sm:mb-[16px]"
        >
          Выберите рассылки, которые подходят именно вам
        </h2>

        <div
          class="flex items-center justify-between mb-[14px] ml-[45px] mr-[47px] bg-white rounded-l-full rounded-r-full max-sm:mb-[18px] max-sm:ml-[14px] max-sm:mr-[8px]"
        >
          <input
            type="email"
            placeholder="Электронная почта"
            class="p-[18px] rounded-l-lg max-sm:p-[16px] max-sm:pl-[10px]"
          />
          <button
            type="button"
            class="h-[58px] w-[164px] text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-6 py-3 text-center max-sm:h-[56px] max-sm:w-[56px] max-sm:p-0 max-sm:pl-[16px]"
          >
            <img
              v-if="isSmallScreen"
              src="./assets/images/arrow.svg"
              alt="Подписаться"
              class="w-[24px] h-[24px]"
            />
            <p v-else>Подписаться</p>
          </button>
        </div>
        <div class="flex items-center mb-[32px] max-sm:mb-[22px]">
          <label
            class="ml-[48px] inline-flex items-center cursor-pointer max-sm:ml-[8px]"
          >
            <input type="checkbox" value="" class="sr-only peer" />
            <div
              class="relative w-[32px] h-[16px] bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:bg-blue-600"
            ></div>
            <span class="ml-[8px] text-sm font-{400} text-gray-900"
              >Подписаться на все рассылки</span
            >
          </label>
        </div>

        <div
          class="grid grid-cols-2 max-sm:grid-cols-1 gap-x-[0px] gap-y-[25px] justify-items-center mb-[46px] px-[14px] max-sm:gap-y-[24px]"
        >
          <SubscriptionCard
            comment="Перед рассветом"
            title="Утренний бухгалтер"
            description="Самые важные новости и события за день. Кратко, по делу, структурировано."
            features="Новости для бухгалтеров, ИП и директора;Подборка статей за день"
            subscribers="59 342 человек"
            icon="../src/assets/images/frame3505.png"
          />
          <SubscriptionCard
            comment="После заката"
            title="Ночной бухгалтер"
            description="Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения."
            features="Анализ, оценка и только самое главное;Лучшие комменты юзеров в обзоре"
            subscribers="37 480 человек"
            icon="../src/assets/images/frame3507.png"
          />
          <SubscriptionCard
            comment="Раз в две недели"
            title="Ножницы скидок"
            description="Подборка самых выгодных и полезных спецпредложений от надежных компаний."
            features="Акции и скидки от лидеров рынка;Те, кто подписался — экономят много денег"
            subscribers="92 118 человек"
            icon="../src/assets/images/frame3509.png"
          />
          <SubscriptionCard
            comment="По мере появления анонсов"
            title="Чемодан вебинаров"
            description="Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов."
            features="Никогда не пришлем платные вебинары;Подборка топовых тем для вебинаров"
            subscribers="92 082 человек"
            icon="../src/assets/images/frame3511.png"
          />
        </div>
      </section>
    </main>

    <footer class="mt-[48px] mb-[48px] text-5xl text-center max-sm:mt-[32px]">
      ¯\_(ツ)_/¯
    </footer>
  </div>
</template>

<script>
import SubscriptionCard from './components/SubscriptionCard.vue'

export default {
  components: {
    SubscriptionCard,
  },
  data() {
    return {
      isSmallScreen: false,
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 640
    },
  },
}
</script>

<style></style>
