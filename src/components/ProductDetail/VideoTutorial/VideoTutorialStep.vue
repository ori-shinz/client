<i18n>
{
  "en": {
    "step1": {
      "title": "Step 1",
      "desc1": "Add ORI-SHINZ ECO / GOLD into a pail of water as instructed below. Important usage instruction:",
      "desc2": "Note: You may add more ORI-SHINZ ECO / GOLD for more foam. For other sizes of snow wash tank/machine, you may adjust the usage and dilution ratio of ORI-SHINZ ECO / GOLD that are suitable for you."
    },
    "step2": {
      "title": "Step 2",
      "desc1": "Stir ORI-SHINZ ECO / GOLD and water mixture until ORI-SHINZ ECO / GOLD is fully dissolved in the water.",
      "desc2": "Note: Please make sure that ORI-SHINZ ECO / GOLD is fully dissolved in the water to avoid blockage in the shampoo delivery pipe of snow wash tank/machine.",
      "desc3": "Do not mix ORI-SHINZ ECO / GOLD with other shampoos/chemicals to avoid spoiling of ORI-SHINZ ECO / GOLD quality."
    },
    "step3": {
      "title": "Step 3",
      "desc1": "Pour the fully dissolved mixture into snow wash tank and fill the tank with water until it is full."
    },
    "step4": {
      "title": "Step 4",
      "desc1": "Ready for use.",
      "desc2": "OR:",
      "desc3": "STIR AND DISSOLVE A DRUM OF 2.5 KG ORI-SHINZ ECO / 2.7 KG ORI-SHINZ GOLD IN WATER. THEN, POUR INTO A 20-LITRE PLASTIC DRUM AND FILL THE DRUM WITH WATER UNTIL IT IS FULL. MIX 300ML TO 500ML MIXTURE WITH WATER FOR 60L – 80L SNOW WASH TANK."
    }
  },
  "my": {
    "step1": {
      "title": "Langkah 1",
      "desc1": "Tambahkan ORI-SHINZ ECO / GOLD ke dalam baldi yang mengandungi air seperti yang diarahkan di bawah.",
      "desc2": "Nota: Anda boleh menambah lebih ORI-SHINZ ECO / GOLD untuk mendapatkan lebih buih. Untuk tangka/mesin snow wash yang lain, anda boleh menyesuaikan penggunaan dan nisbah pencairan ORI-SHINZ ECO / GOLD yang sesuai untuk anda. "
    },
    "step2": {
      "title": "Langkah 2",
      "desc1": "Kacaukan campuran ORI-SHINZ ECO / GOLD dan air sehingga ORI-SHINZ ECO / GOLD dilarutkan sepenuhnya di dalam air.",
      "desc2": "PERHATIAN: Sila pastikan ORI-SHINZ ECO / GOLD dilarutkan sepenuhnya di dalam air untuk mengelakkan penyumbatan paip penghantaran syampu tangki snow wash/mesin.",
      "desc3": "Jangan campur ORI-SHINZ ECO / GOLD dengan syampu/bahan kimia yang lain untuk mengelakkan kerosakkan kualiti ORI-SHINZ ECO / GOLD."
    },
    "step3": {
      "title": "Langkah 3",
      "desc1": "Tuangkan campuran yang telah larut sepenuhnya ke dalam tangki snow wash dan penuhkan tangki snow wash dengan air."
    },
    "step4": {
      "title": "Langkah 4",
      "desc1": "Sedia untuk diguna.",
      "desc2": "ATAU:",
      "desc3": "KACAU DAN LARUTKAN SATU DRAM 2.5 KG ORI-SHINZ ECO / 2.7 KG ORI-SHINZ GOLD DENGAN AIR. KEMUDIAN, TUANG KE DALAM DRAM PLASTIK 20 LITER DAN PENUHKAN DRAM DENGAN AIR. CAMPURKAN 300ML SEHINGGA 500ML CAMPURAN DENGAN AIR UNTUK TANGKI SNOW WASH 60L – 80L."
    }
  },
  "cn": {
    "step1": {
      "title": "步骤 1",
      "desc1": "按照以下说明，将ORI-SHINZ ECO / GOLD加入拥有清水的桶中。:",
      "desc2": "注意：您可以增加ORI-SHINZ ECO / GOLD以获得更多泡沫。给与其他的汽车泡沫机/机器，您可以调整适合您的 ORI-SHINZ ECO / GOLD 的用量和稀释比例。"
    },
    "step2": {
      "title": "步骤 2",
      "desc1": "搅拌ORI-SHINZ ECO / GOLD和清水，直到ORI-SHINZ ECO / GOLD完全溶解在水中。",
      "desc2": "注意：请确保ORI-SHINZ ECO / GOLD完全溶解在水中，以免洗车泡沫机/机器的洗车剂输送管阻塞。",
      "desc3": "勿将ORI-SHINZ ECO / GOLD与其他洗车剂/化学品混合，以免损坏ORI-SHINZ ECO / GOLD的品质。"
    },
    "step3": {
      "title": "步骤 3",
      "desc1": "将完全溶解的混合物倒入洗车泡沫机中，并将清水加入洗车泡沫机直到盛满为止。"
    },
    "step4": {
      "title": "步骤 4",
      "desc1": "准备好使用。",
      "desc2": "或:",
      "desc3": "将一桶 2.5 公斤的 ORI-SHINZ ECO / 2.7 公斤的 ORI-SHINZ GOLD 搅拌并溶解在水中。然后，倒入 20 公升的塑料桶中，并将清水加入桶直到盛满为止。将 300 毫升至 500 毫升的混合物与清水混合，即可适用于 60 公升 – 80 公升的洗车泡沫机。"
    }
  }
}
</i18n>

<template>
  <Fragment>
    <div class="row justify-content-center mbc-lg-80">
      <div class="col-sm-12 col-md-2">
        <img src="~@/assets/images/icons/step1.svg" alt="step-1" />
      </div>
      <div class="col-sm-12 col-md-7 d-flex flex-column text-left">
        <h3 class="step-title">{{ $t('step1.title') }}</h3>
        <p class="step-text-md">
          {{ $t('step1.desc1') }}
        </p>
        <TutorialTable />
        <p class="step-note">
          {{ $t('step1.desc2') }}
        </p>
      </div>
    </div>
    <div class="row justify-content-center mbc-lg-80">
      <div class="col-sm-12 col-md-2">
        <img src="~@/assets/images/icons/step2.svg" alt="step-2" />
      </div>
      <div class="col-sm-12 col-md-7 d-flex flex-column text-left">
        <h3 class="step-title">{{ $t('step2.title') }}</h3>
        <p class="step-text-md">
          {{ $t('step2.desc1') }}
        </p>
        <p class="step-note">
          {{ $t('step2.desc2') }}
        </p>
        <p class="step-note">
          {{ $t('step2.desc3') }}
        </p>
      </div>
    </div>
    <div class="row justify-content-center mbc-lg-80">
      <div class="col-sm-12 col-md-2">
        <img src="~@/assets/images/icons/step3.svg" alt="step-4" />
      </div>
      <div class="col-sm-12 col-md-7 d-flex flex-column text-left">
        <h3 class="step-title">{{ $t('step3.title') }}</h3>
        <p class="step-text-md">
          {{ $t('step3.desc1') }}
        </p>
      </div>
    </div>
    <div class="row justify-content-center mbc-lg-80">
      <div class="col-sm-12 col-md-2">
        <img src="~@/assets/images/icons/step4.svg" alt="step-3" />
      </div>
      <div class="col-sm-12 col-md-7 d-flex flex-column text-left">
        <h3 class="step-title">{{ $t('step4.title') }}</h3>
        <p class="step-text-md">{{ $t('step4.desc1') }}</p>
      </div>
    </div>
    <!-- <div class="row justify-content-center mbc-lg-100 text-left">
      <div class="or-contain mx-auto">
        <p class="or-stir">
          <span class="content">{{ $t('step4.desc2') }}</span> <br/>
          {{ $t('step4.desc3') }}
        </p>
      </div>
    </div> -->
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import TutorialTable from '@/components/ProductDetail/VideoTutorial/TutorialTable'

export default {
  name: 'VideoTutorialStep',
  components: {
    Fragment,
    TutorialTable
  }
}
</script>

<style scoped>
.step-title {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffca65;
}
.step-text-md {
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}

.step-note {
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}

.or-contain {
  max-width: 936px;
}
.or-stir{
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}

.or-stir .content {
  font-size: 50px;
  color: #ffca65;
}
</style>
