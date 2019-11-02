<i18n>
{
  "en": {
    "th1": "Size of snow wash tank",
    "th2": "Number of scoops of ORI-SHINZ ECO / GOLD",
    "th3": "Water in pail for ORI-SHINZ ECO / GOLD dilution",
    "liter": "L",
    "noLiter": " "
  },
  "my": {
    "th1": "Saiz tangki snow wash",
    "th2": "Bilangan sudu ORI-SHINZ ECO / GOLD",
    "th3": "Jumlah air di dalam baldi yang sesuai untuk mencairkan ORI-SHINZ ECO / GOLD",
    "liter": "L",
    "noLiter": " "
  },
  "cn": {
    "th1": "洗车泡沫机容量 ",
    "th2": "ORI-SHINZ ECO/ GOLD匙的数量",
    "th3": "适于ORI-SHINZ ECO/ GOLD 溶解在桶中的水量",
    "liter": "公升",
    "noLiter": "匙"
  }
}
</i18n>

<template>
  <table width="93%" class="mb-2">
    <thead>
      <tr>
        <th width="20%" class="table-step-heading mx-5" scope="col">{{ $t('th1') }}</th>
        <th width="30%" class="table-step-heading" scope="col">{{ $t('th2') }}</th>
        <th width="60%" class="table-step-heading" scope="col">{{ $t('th3') }}</th>
      </tr>
    </thead>
    <tbody class="table-content text-left">
      <tr>
        <td>60 {{ $t('liter') }}</td>
        <td>1.0 {{ $t('noLiter') }}</td>
        <td>≥ 8 {{ $t('liter') }}</td>
      </tr>
      <tr>
        <td>70 {{ $t('liter') }}</td>
        <td>1.2 {{ $t('noLiter') }}</td>
        <td>≥ 9 {{ $t('liter') }}</td>
      </tr>
      <tr>
        <td>80 {{ $t('liter') }}</td>
        <td>1.4 {{ $t('noLiter') }}</td>
        <td>≥ 10 {{ $t('liter') }}</td>
      </tr>
      <tr>
        <td>200 {{ $t('liter') }}</td>
        <td>3.4 {{ $t('noLiter') }}</td>
        <td>≥ 27 {{ $t('liter') }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {

}
</script>

<style scoped>
.table-step-heading {
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffca65;
}
.table-content {
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #e7e7e7;
}
</style>
