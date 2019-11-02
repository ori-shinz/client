<i18n>
{
  "en": {
    "header": "ORI-SHINZ Key Benefits",
    "benefit1": {
      "title": "Saves Costs",
      "desc1": "In Powder form, saves shipping costs",
      "desc2": "Easy to ship with Global reach"
    },
    "benefit2": {
      "title": "Perfect Shine",
      "desc1": "Natural Shine results on car’s body, windscreen, rims, headlights, mirrors & windows"
    },
    "benefit3": {
      "title": "Ultra Clean",
      "desc1": "Easily removes toughest dirt, road grime, tar, grease, bugs & bird droppings"
    },
    "benefit4": {
      "title": "Gentle on Hands & Car Paint",
      "desc1": "Protects car paint"
    },
    "benefit5": {
      "title": "No Water Spots",
      "desc1": "Leaves no water spots on car"
    }
  },
  "my": {
    "header": "Faedah Utama ORI-SHINZ",
    "benefit1": {
      "title": "Menjimatkan Kos",
      "desc1": "Dalam bentuk Serbuk, menjimatkan kos penghantaran",
      "desc2": "Senang untuk dihantar dengan jangkauan Global"
    },
    "benefit2": {
      "title": "Kilauan Sempurna",
      "desc1": "Kilauan yang asli pada badan kereta, cermin depan, rims, lampu depan, cermin & tingkap kereta"
    },
    "benefit3": {
      "title": "Ultra Bersih",
      "desc1": "Mudah menanggalkan kotoran degil, kotoran jalan, tar, gris, kesan serangga dan najis burung"
    },
    "benefit4": {
      "title": "Lembut untuk Tangan & Cat Kereta",
      "desc1": "Melindungi cat kereta"
    },
    "benefit5": {
      "title": "Tidak Meninggalkan Kesan Air",
      "desc1": "Tidak Meninggalkan Kesan Air pada kereta"
    }
  },
  "cn": {
    "header": "ORI-SHINZ 的主要优点",
    "benefit1": {
      "title": "节省成本",
      "desc1": "呈粉状, 节省运输成本",
      "desc2": "易於全球范围内运输"
    },
    "benefit2": {
      "title": "完美光泽",
      "desc1": "为汽车的车身，挡风玻璃，轮辋，前大灯，车窗 & 汽车后视镜带来自然光泽"
    },
    "benefit3": {
      "title": "超级洁净",
      "desc1": "容易去除顽固污垢，道路污迹，柏油，油渍，虫渍和鸟粪"
    },
    "benefit4": {
      "title": "对双手 & 车漆温和",
      "desc1": "保护车漆"
    },
    "benefit5": {
      "title": "不留水渍",
      "desc1": "车身不留水渍"
    }
  }
}
</i18n>

<template>
  <Fragment>
    <Heading :message="$t('header')"></Heading>
    <!-- key list component -->
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-saves-costs.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">{{ $t('benefit1.title') }}</p>
        <ul>
          <li class="benefit-content">{{ $t('benefit1.desc1') }}</li>
          <li class="benefit-content">{{ $t('benefit1.desc2') }}</li>
        </ul>
      </div>
    </div>
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-perfect-shine.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">{{ $t('benefit2.title') }}</p>
        <ul>
          <li class="benefit-content">{{ $t('benefit2.desc1') }}</li>
        </ul>
      </div>
    </div>
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-ultra-clean.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">{{ $t('benefit3.title') }}</p>
        <ul>
          <li class="benefit-content">{{ $t('benefit3.desc1') }}</li>
        </ul>
      </div>
    </div>
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-gentle-on-hands.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">{{ $t('benefit4.title') }}</p>
        <ul>
          <li class="benefit-content">{{ $t('benefit4.desc1') }}</li>
        </ul>
      </div>
    </div>
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-no-water-spot.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">{{ $t('benefit5.title') }}</p>
        <ul>
          <li class="benefit-content">{{ $t('benefit5.desc1') }}</li>
        </ul>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Heading from '@/components/general/Heading'

export default {
  name: 'KeyBenefits',
  components: {
    Fragment,
    Heading
  }
}
</script>

<style scoped>
.benefit-title {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffca65;
}
.benefit-content {
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}
ul li::before {
  content: '\2022';
  color: #ffca65;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
