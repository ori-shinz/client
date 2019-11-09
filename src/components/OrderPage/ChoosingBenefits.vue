<i18n>
{
  "en": {
    "benefit1": "Why Choose ORI-SHINZ?",
    "desc11": "Top Notch Quality at Competitive Price",
    "desc12": "Saves Shipping Costs & Global Reach",
    "desc13": "100% Original Foam",
    "benefit2": "ORI-SHINZ Key Benefits",
    "desc21": "Saves Costs",
    "desc22": "Perfect Shine",
    "desc23": "Ultra Clean",
    "desc24": "Gentle on Hands & Car Paint",
    "desc25": "No Water Spots"
  },
  "my": {
    "benefit1": "Kenapa Pilih ORI-SHINZ?",
    "desc11": "Kualiti Handal pada Harga yang Kompetitif",
    "desc12": "Menjimatkan Kos Penghantaran & Jangkauan Global",
    "desc13": "100% Buih Asli",
    "benefit2": "Faedah Utama ORI-SHINZ",
    "desc21": "Menjimatkan Kos",
    "desc22": "Kilauan Sempurna",
    "desc23": "Ultra Bersih",
    "desc24": "Lembut untuk Tangan & Cat Kereta",
    "desc25": "Tidak Meninggalkan Kesan Air"
  },
  "cn": {
    "benefit1": "为何选择 ORI-SHINZ?",
    "desc11": "顶级质量和具竞争力的价格",
    "desc12": "全球范围内节省运输成本",
    "desc13": "100％原装泡沫",
    "benefit2": "ORI-SHINZ 的主要优点",
    "desc21": "节省成本",
    "desc22": "完美光泽",
    "desc23": "超级洁净",
    "desc24": "对双手 & 车漆温和",
    "desc25": "不留水渍"
  }
}
</i18n>

<template>
  <div class="container mbc-lg-150">
    <div class="row justify-content-around">
      <div class="col-sm-12 col-md-5 text-left flex-column">
        <p class="choosing-title">
          {{ $t('benefit1') }}
        </p>
        <ul>
          <li class="choosing-list">{{ $t('desc11') }}</li>
          <li class="choosing-list">{{ $t('desc12') }}</li>
          <li class="choosing-list">{{ $t('desc13') }}</li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-5 text-left flex-column">
        <p class="choosing-title">
          {{ $t('benefit2') }}
        </p>
        <ul>
          <li class="choosing-list">{{ $t('desc21') }}</li>
          <li class="choosing-list">{{ $t('desc22') }}</li>
          <li class="choosing-list">{{ $t('desc23') }}</li>
          <li class="choosing-list">{{ $t('desc24') }}</li>
          <li class="choosing-list">{{ $t('desc25') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChoosingBenefits'
}
</script>

<style scoped>
.choosing-title {
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffca65;
}
.choosing-list {
  font-size: 24px;
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
