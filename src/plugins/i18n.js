import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enVocab from './contents/en'
import myVocab from './contents/my'
import cnVocab from './contents/cn'

Vue.use(VueI18n)

const messages = {
  'en': enVocab,
  'my': myVocab,
  'cn': cnVocab
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})

export default i18n
