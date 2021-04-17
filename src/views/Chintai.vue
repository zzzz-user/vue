<template>
  <div>
    <el-main>
        <h2>賃貸費用計算</h2>
<!-- 24 -->
<!-- 8, 16 -->
<!-- 8, 4, 12 el-col :offset="4" :span="12"  -->
<el-row class="bk">
  <el-col :span="8" class="l" >
    建物名
  </el-col>
  <el-col :span="16">
    <el-input type="text" placeholder="Please input" v-model="bukken"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    家賃
  </el-col>
  <el-col :span="1">
    <i class="el-icon-star-off"></i>
  </el-col>
  <el-col :span="15">
    <el-input type="number" placeholder="Please input" v-model="yachin" min="0" minlength="1"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    駐車場代
  </el-col>
  <el-col :span="1">
    <i class="el-icon-star-off"></i>
  </el-col>
  <el-col :span="15">
    <el-input type="number" placeholder="Please input" v-model="chusyazyou" min="0"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    駐輪場代
  </el-col>
  <el-col :span="1">
    <i class="el-icon-star-off"></i>
  </el-col>
  <el-col :span="15" class="r">
    <el-input type="number" placeholder="Please input" v-model="churinzyo" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    管理費
  </el-col>
  <el-col :span="15" class="r" :offset="1">
    <el-input type="number" placeholder="Please input" v-model="kanrihi" min="0"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    町内会費
  </el-col>
  <el-col :span="15" class="r" :offset="1">
    <el-input type="number" placeholder="Please input" v-model="chonaikaihi" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    家賃保証手数料
  </el-col>
  <el-col :span="15" class="r" :offset="1">
    <!-- <span v-if="yachinhosyo_my == 'm'">
      毎月払い：{{yachinhosyo_tesuryo}}
    </span>
    <span v-else>
      -
    </span> -->
    <el-input type="number" :value="(yachinhosyo_my == 'm')? yachinhosyo_tesuryo : 0" disabled></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    支払手数料
  </el-col>
  <el-col :span="15" class="r" :offset="1">
    <el-input type="number" placeholder="Please input" v-model="shiharaitesuryo" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    ほか月費用
  </el-col>
  <el-col :span="15" class="r" :offset="1">
    <el-input type="number" placeholder="Please input" v-model="othermonth"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="24" class="r">
    毎月の支払い合計：{{total_yachin | comma}} 円
  </el-col>
</el-row>

<el-row >
  <el-col :span="24" class="l">
    以下、1ヶ月分は<i class="el-icon-star-off"></i>印の合計<small>（{{ hoshi | comma}}）</small>から算出
  </el-col>
</el-row>

<br>

<el-row class="bk">
  <el-col :span="8" class="l">
    消毒料
  </el-col>
  <el-col :span="16" class="r">
    <el-input type="number" placeholder="Please input" v-model="shodokuhi" min="0"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    清掃費用
    <el-tooltip class="item" effect="dark" content="退去時精算でも初期分として加算" placement="top-start">
      <i class="el-icon-question"></i>
    </el-tooltip>
  </el-col>
  <el-col :span="16" class="r">
    <el-input type="number" placeholder="Please input" v-model="seisouhiyou" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    鍵交換費
  </el-col>
  <el-col :span="16" class="r">
    <el-input type="number" placeholder="Please input" v-model="kagikoukan" min="0"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    敷金
  </el-col>
  <el-col :span="16" class="r">
    <el-select v-model="shikikin_model" placeholder="Select">
      <el-option
        v-for="item in selectes_m"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-input type="number" placeholder="Please input" v-model="shikikin" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    礼金
  </el-col>
  <el-col :span="16" class="r">
    <el-select v-model="reikin_model" placeholder="Select">
      <el-option
        v-for="item in selectes_m"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-input type="number" placeholder="Please input" v-model="reikin" min="0"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    仲介手数料
  </el-col>
  <el-col :span="16" class="r">
    <el-checkbox v-model="chukaitesuryo_tax">税込</el-checkbox>

    <el-select v-model="chukaitesuryo_model" placeholder="Select">
      <el-option
        v-for="item in selectes_ms"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-input type="number" placeholder="Please input" v-model="chukaitesuryo" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    ほか契約時費用
  </el-col>
  <el-col :span="16" class="r">
    <el-input type="number" placeholder="Please input" v-model="otherkeiyaku"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    住宅保険
  </el-col>
  <el-col :span="16" class="r">
    <el-radio v-model="jutakuhoken_m" label="1">1年契約</el-radio>
    <el-radio v-model="jutakuhoken_m" label="2">2年契約</el-radio>
    <el-input type="number" placeholder="Please input" v-model="jutakuhoken" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    セキュリティ
  </el-col>
  <el-col :span="16" class="r">
    <el-radio v-model="security_m" label="1">1年契約</el-radio>
    <el-radio v-model="security_m" label="2">2年契約</el-radio>
    <el-input type="number" placeholder="Please input" v-model="security" min="0"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    家賃保証契約費用
  </el-col>
  <el-col :span="16" class="r">
    <el-input type="number" placeholder="Please input" v-model="yachinhosyo" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    家賃保証手数料
  </el-col>
  <el-col :span="16" class="r">
    <el-radio v-model="yachinhosyo_my" label="m">毎月</el-radio>
    <el-radio v-model="yachinhosyo_my" label="y">毎年</el-radio>
    <el-input type="number" placeholder="Please input" v-model="yachinhosyo_tesuryo" min="0"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    更新手数料
  </el-col>
  <el-col :span="16" class="r">
    <el-select v-model="koushintesuryo_model" placeholder="Select">
      <el-option
        v-for="item in selectes_m"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-input type="number" placeholder="Please input" v-model="koushintesuryo" min="0"></el-input>
  </el-col>
</el-row>

<el-row class="bk">
  <el-col :span="8" class="l">
    更新事務手数料
  </el-col>
  <el-col :span="16" class="r">
    <el-input type="number" placeholder="Please input" v-model="koushinjimutesuryo" min="0"></el-input>
  </el-col>
</el-row>

<el-row >
  <el-col :span="8" class="l">
    ほか更新費用
  </el-col>
  <el-col :span="16" class="r">
    <el-input type="number" placeholder="Please input" v-model="otherkoshin"></el-input>
  </el-col>
</el-row>

<br>
<br>
<br>

<el-row class="bk">
  <el-col :span="24">
    <i class="el-icon-s-home"></i> {{bukken}}
  </el-col>
</el-row>



<el-row>
  <el-col :span="24" class="l">
    A：毎月の支払い家賃
  </el-col>
  <el-col :span="14" class="money">
    {{total_yachin | comma}} 円
  </el-col>
  <el-col :span="10" class="r">

    <el-collapse class="r">
      <el-collapse-item title="内訳" name="1">
        家賃: {{this.yachin | comma}} <br>
        駐車場: {{this.chusyazyou | comma}} <br>
        駐輪場: {{this.churinzyo | comma}} <br>
        管理費: {{this.kanrihi | comma}} <br>
        町内会費: {{this.chonaikaihi | comma}} <br>
        支払い手数料：{{this.shiharaitesuryo | comma}} <br>
        ほか: {{this.othermonth | comma}} <br>
        <span v-if="this.yachinhosyo_my == 'm'">家賃保証手数料: {{this.yachinhosyo_tesuryo | comma}} <br></span>
      </el-collapse-item>
    </el-collapse>

  </el-col>
</el-row>


<el-row>
  <el-col :span="24" class="l">
    B：契約するときに必要なお金
  </el-col>
  <el-col :span="14" class="money">
    {{total_shoki | comma}} 円
  </el-col>
  <el-col :span="10" class="r">

    <el-collapse class="r">
      <el-collapse-item title="内訳" name="1">
        消毒費: {{this.shodokuhi | comma}} <br>
        清掃費: {{this.seisouhiyou | comma}} <br>
        鍵交換費: {{this.kagikoukan | comma}} <br>
        敷金: {{this.shikikin | comma}} <br>
        礼金: {{this.reikin | comma}} <br>
        仲介手数料: {{this.chukaitesuryo | comma}} <br>
        ほか契約費: {{this.otherkeiyaku | comma}} <br>
        住宅保険: {{this.jutakuhoken | comma}} <br>
        セキュリティ: {{this.security | comma}} <br>
        家賃保証契約: {{this.yachinhosyo | comma}} <br>
        <!-- 前払家賃 -->
      </el-collapse-item>
    </el-collapse>

  </el-col>
</el-row>


<el-row>
  <el-col :span="24" class="l">
    C：１年ごとに必要なお金
  </el-col>
  <el-col :span="14" class="money">
    {{total_y1 | comma}} 円
  </el-col>
  <el-col :span="10" class="r">

    <el-collapse class="r">
      <el-collapse-item title="内訳" name="1">
        <span v-if="this.jutakuhoken_m == 1">住宅保険: {{this.jutakuhoken | comma}} <br></span>
        <span v-if="this.security_m == 1">セキュリティ: {{this.security | comma}} <br></span>
        <span v-if="this.yachinhosyo_my == 'y'">家賃保証手数料: {{this.yachinhosyo_tesuryo | comma}} <br></span>
      </el-collapse-item>
    </el-collapse>

  </el-col>
</el-row>


<el-row class="bk">
  <el-col :span="24">
    ２年住んだ場合のひと月平均
  </el-col>
  <el-col :span="24">
    <strong>
    {{ Math.round(total_yachin + ((total_shoki + total_y1) / 24)) | comma}} 円
    </strong>
  </el-col>
  <el-col :span="24">
    <small>（ A + ((B + C) / 24) ）</small>
  </el-col>
</el-row>

<br>
<br>

<el-row>
  <el-col :span="24" class="l">
    D：2年で更新する場合の更新費
  </el-col>
  <el-col :span="14" class="money">
    {{total_y2 | comma}} 円<br>
  </el-col>
  <el-col :span="10" class="r">

    <el-collapse class="r">
      <el-collapse-item title="内訳" name="1">
        住宅保険: {{this.jutakuhoken | comma}} <br>
        セキュリティ: {{this.security | comma}} <br>
        <span v-if="this.yachinhosyo_my == 'y'">家賃保証手数料: {{this.yachinhosyo_tesuryo | comma}} <br></span>
        更新手数料: {{this.koushintesuryo | comma}} <br>
        更新事務手数料: {{this.koushinjimutesuryo | comma}} <br>
        ほか更新費用: {{this.otherkoshin | comma}} <br>
      </el-collapse-item>
    </el-collapse>

  </el-col>
</el-row>



<br><br><br>

<el-row class="bk">
  <el-col :span="24">
    ４年住んだ場合のひと月平均
  </el-col>
  <el-col :span="24">
    <strong>
    {{ Math.round(total_yachin + ((total_shoki + total_y1 + total_y2 + total_y1) / 48)) | comma}} 円
    </strong>
  </el-col>
  <el-col :span="24">
    <small>（ A + ((B + C + D + C) / 48) ）</small>
  </el-col>
</el-row>

<br>

    </el-main>
  </div>
</template>

<script>
export default {
  name: 'Chintai',
  data() {
    return {
      selectes_m: [
        {
          value: '0',
          label: 'なし'
        }, {
          value: '999',
          label: '入力固定'
        }, {
          value: '5',
          label: '0.5ヶ月分'
        }, {
          value: '10',
          label: '1ヶ月分'
        }, {
          value: '11',
          label: '1.1ヶ月分'
        }, {
          value: '15',
          label: '1.5ヶ月分'
        }, {
          value: '20',
          label: '2ヶ月分'
        }, {
          value: '40',
          label: '4ヶ月分'
        },
      ], // ヶ月分選択

      selectes_ms: [
        {
          value: '0',
          label: 'なし'
        }, {
          value: '999',
          label: '入力固定'
        }, {
          value: '5',
          label: '0.5ヶ月分'
        }, {
          value: '9',
          label: '0.9ヶ月分'
        }, {
          value: '10',
          label: '1ヶ月分'
        },
      ], // 仲介手数料用

      bukken: '', // 建物名

      yachin: 85000, // 家賃
      chusyazyou: 0, // 駐車場
      churinzyo: 1050, // 駐輪場
      kanrihi: 10000, // 管理費
      chonaikaihi: 300, // 町内会費
      shiharaitesuryo: 550, // 支払手数料
      othermonth: 0, // ほか月費用

      shodokuhi: 19800, // 消毒費
      seisouhiyou: 50000, // 清掃費用
      kagikoukan: 0, // 鍵交換費

      shikikin: 0, // 敷金
      shikikin_model: '',
      reikin: 0, // 礼金
      reikin_model: '',
      chukaitesuryo: 0, // 仲介手数料
      chukaitesuryo_model: '',
      chukaitesuryo_tax: true,
      otherkeiyaku: 0, // ほか契約時費用

      jutakuhoken: 20000, // 住宅保険
      jutakuhoken_m: '2',
      security: 19800, // セキュリティ
      security_m: '2',

      yachinhosyo: 80000, // 家賃保証初期費用
      yachinhosyo_my: 'y', // m|y
      yachinhosyo_tesuryo: 10000, // 家賃保証手数料

      koushintesuryo: 0, // 更新手数料
      koushintesuryo_model: '',
      koushinjimutesuryo: 5000, // 更新事務手数料
      otherkoshin: 0, // ほか更新費

    }
  },

  created() {
    this.reset();
  },

  watch: {
    hoshi: function() {
      // プルダウン系を再計算
      // 敷金
      if (this.shikikin_model != 999) this.shikikin = this.m_calc(this.shikikin_model);
      // 礼金
      if (this.reikin_model != 999) this.reikin = this.m_calc(this.reikin_model);
      // 仲介手数料
      if (this.chukaitesuryo_model != 999) {
        let cal = this.m_calc(this.chukaitesuryo_model);

        if (this.chukaitesuryo_tax) {
          cal = Math.round( cal * 1.1 );
        }

        this.chukaitesuryo = cal;
      }
      // 更新手数料
      if (this.koushintesuryo_model != 999) this.koushintesuryo = this.m_calc(this.koushintesuryo_model);
    },

    shikikin_model: function (v) {
      if (v == 999) return;

      this.shikikin = this.m_calc(v);
    },
    reikin_model: function (v) {
      if (v == 999) return;

      this.reikin = this.m_calc(v);
    },
    chukaitesuryo_model: function (v) {
      if (v == 999) {
        // 税込のオフと非活性化 ?
        this.chukaitesuryo_tax = false;
        return;
      }

      let cal = this.m_calc(v);

      if (this.chukaitesuryo_tax) {
        cal = Math.round( cal * 1.1 );
      }

      this.chukaitesuryo = cal;
    },
    koushintesuryo_model: function(v) {
      if (v == 999) return;

      this.koushintesuryo = this.m_calc(v);
    },
    // 税込のチェック対応
    chukaitesuryo_tax: function (c) {
      const v = this.chukaitesuryo_model;
      if (v == 999 || v == 0 || Number.isNaN(parseInt(v))) {
        return;
      }

      let cal = this.m_calc(v);

      if (c) {
        cal = Math.round( cal * 1.1 );
      }

      this.chukaitesuryo = cal;
    },
  },

  computed: {
    hoshi: function() {
      return ( isNaN(parseInt(this.yachin, 10)) ? 0 : parseInt(this.yachin, 10) )
        + ( isNaN(parseInt(this.chusyazyou, 10)) ? 0 : parseInt(this.chusyazyou, 10) )
        + ( isNaN(parseInt(this.churinzyo, 10)) ? 0 : parseInt(this.churinzyo, 10) )
        ;
    },
    total_yachin: function () {
      let plus = 0;
      if (this.yachinhosyo_my == 'm') {
        // plus = parseInt(this.yachinhosyo_tesuryo, 10);
        plus = isNaN(parseInt(this.yachinhosyo_tesuryo, 10)) ? 0 : parseInt(this.yachinhosyo_tesuryo, 10);
      }
// /* eslint-disable */ console.log('---------');
      // return parseInt(this.yachin, 10)
      //   + parseInt(this.kanrihi, 10)
      //   + parseInt(this.chusyazyou, 10)
      //   + parseInt(this.churinzyo, 10)
      //   + parseInt(this.chonaikaihi, 10)
      //   + parseInt(this.shiharaitesuryo, 10)
      //   + parseInt(this.othermonth, 10)
      //   + plus
      // ;
      return ( isNaN(parseInt(this.yachin, 10)) ? 0 : parseInt(this.yachin, 10) )
        + ( isNaN(parseInt(this.kanrihi, 10)) ? 0 : parseInt(this.kanrihi, 10) )
        + ( isNaN(parseInt(this.chusyazyou, 10)) ? 0 : parseInt(this.chusyazyou, 10) )
        + ( isNaN(parseInt(this.churinzyo, 10)) ? 0 : parseInt(this.churinzyo, 10) )
        + ( isNaN(parseInt(this.chonaikaihi, 10)) ? 0 : parseInt(this.chonaikaihi, 10) )
        + ( isNaN(parseInt(this.shiharaitesuryo, 10)) ? 0 : parseInt(this.shiharaitesuryo, 10) )
        + ( isNaN(parseInt(this.othermonth, 10)) ? 0 : parseInt(this.othermonth, 10) )
        + plus
      ;
    },
    total_shoki() {
      let sum = 0;

      // 消毒費
      // sum += parseInt(this.shodokuhi);
      sum += isNaN(parseInt(this.shodokuhi, 10)) ? 0 : parseInt(this.shodokuhi, 10);
      // 清掃費
      // sum += parseInt(this.seisouhiyou);
      sum += isNaN(parseInt(this.seisouhiyou, 10)) ? 0 : parseInt(this.seisouhiyou, 10);
      // 鍵交換費
      // sum += parseInt(this.kagikoukan);
      sum += isNaN(parseInt(this.kagikoukan, 10)) ? 0 : parseInt(this.kagikoukan, 10);

      // 敷金
      // sum += parseInt(this.shikikin);
      sum += isNaN(parseInt(this.shikikin, 10)) ? 0 : parseInt(this.shikikin, 10);
      // 礼金
      // sum += parseInt(this.reikin);
      sum += isNaN(parseInt(this.reikin, 10)) ? 0 : parseInt(this.reikin, 10);
      // 仲介手数料
      // sum += parseInt(this.chukaitesuryo);
      sum += isNaN(parseInt(this.chukaitesuryo, 10)) ? 0 : parseInt(this.chukaitesuryo, 10);

      // ほか契約費
      // sum += parseInt(this.otherkeiyaku);
      sum += isNaN(parseInt(this.otherkeiyaku, 10)) ? 0 : parseInt(this.otherkeiyaku, 10);

      // 住宅保険
      // sum += parseInt(this.jutakuhoken);
      sum += isNaN(parseInt(this.jutakuhoken, 10)) ? 0 : parseInt(this.jutakuhoken, 10);
      // セキュリティ
      // sum += parseInt(this.security);
      sum += isNaN(parseInt(this.security, 10)) ? 0 : parseInt(this.security, 10);

      // 家賃保証契約
      // sum += parseInt(this.yachinhosyo);
      sum += isNaN(parseInt(this.yachinhosyo, 10)) ? 0 : parseInt(this.yachinhosyo, 10);

      return sum;
    },
    total_y1() {
      let sum = 0;
      // 住宅保険
      if (this.jutakuhoken_m == 1) {
        // sum += parseInt(this.jutakuhoken);
        sum += isNaN(parseInt(this.jutakuhoken, 10)) ? 0 : parseInt(this.jutakuhoken, 10);
      }
      // セキュリティ
      if (this.security_m == 1) {
        // sum += parseInt(this.security);
        sum += isNaN(parseInt(this.security, 10)) ? 0 : parseInt(this.security, 10);
      }
      // 家賃保証手数料
      if (this.yachinhosyo_my == 'y') {
        // sum += parseInt(this.yachinhosyo_tesuryo);
        sum += isNaN(parseInt(this.yachinhosyo_tesuryo, 10)) ? 0 : parseInt(this.yachinhosyo_tesuryo, 10);
      }

      return sum;
    },
    total_y2() {
      let sum = 0;
      // 住宅保険
      // sum += parseInt(this.jutakuhoken);
      sum += isNaN(parseInt(this.jutakuhoken, 10)) ? 0 : parseInt(this.jutakuhoken, 10);
      // セキュリティ
      // sum += parseInt(this.security);
      sum += isNaN(parseInt(this.security, 10)) ? 0 : parseInt(this.security, 10);

      // 家賃保証手数料
      if (this.yachinhosyo_my == 'y') {
        // sum += parseInt(this.yachinhosyo_tesuryo);
        sum += isNaN(parseInt(this.yachinhosyo_tesuryo, 10)) ? 0 : parseInt(this.yachinhosyo_tesuryo, 10);
      }

      // 更新費
      // sum += parseInt(this.koushintesuryo);
      sum += isNaN(parseInt(this.koushintesuryo, 10)) ? 0 : parseInt(this.koushintesuryo, 10);
      // sum += parseInt(this.koushinjimutesuryo);
      sum += isNaN(parseInt(this.koushinjimutesuryo, 10)) ? 0 : parseInt(this.koushinjimutesuryo, 10);

      // ほか更新費用
      // sum += parseInt(this.otherkoshin);
      sum += isNaN(parseInt(this.otherkoshin, 10)) ? 0 : parseInt(this.otherkoshin, 10);

      return sum;
    },
  },

  filters: {
    comma: function(v) {
      return String(v).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    },
  },

  methods: {
    reset() {
      // 保証契約費
      this.yachinhosyo = this.yachin;
      // 敷金
      this.shikikin_model = this.selectes_m[6].value;
      // 礼金
      this.reikin_model = this.selectes_m[3].value;
      // 仲介手数料
      this.chukaitesuryo_model = this.selectes_ms[4].value;
      // 更新手数料
      this.koushintesuryo_model = this.selectes_m[5].value;
    },

    // 選択した月分の結果を返す
    m_calc(v) {
      if (v == 0) {
        return 0;
      }

      // const sum = parseInt(this.yachin)
      //   + parseInt(this.chusyazyou)
      //   + parseInt(this.churinzyo);
      const sum = ( isNaN(parseInt(this.yachin, 10)) ? 0 : parseInt(this.yachin, 10) )
        + ( isNaN(parseInt(this.chusyazyou, 10)) ? 0 : parseInt(this.chusyazyou, 10) )
        + ( isNaN(parseInt(this.churinzyo, 10)) ? 0 : parseInt(this.churinzyo, 10) )
        ;

      return Math.round( sum * (parseInt(v) / 10) );
    }
  },
}
</script>

<style scoped>
  .el-row{
    /* border: solid 1px  green; */
    padding: 3px;
  }
  /* .el-col{
    border: solid 1px orange;
  } */
  .r {
    text-align: right;
  }
  .l {
    text-align: left;
  }
  .bk {
    background-color: #dff5f0;
  }
  .money {
    padding:15px;
    font-weight: bold;
  }
</style>