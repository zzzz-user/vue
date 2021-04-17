<template>
  <div>
    <el-tabs type="card" activeName="10" @tab-click="handleClick">
      <el-tab-pane label="8%" name="8"></el-tab-pane>
      <el-tab-pane label="10%" name="10"></el-tab-pane>
    </el-tabs>

    <el-input
      placeholder="Please input"
      maxlength="11"
      v-model="input"
    ></el-input>

    <el-input
      id="result"
      v-model="calc"
      readonly
    ></el-input>

    <el-row>
      <el-checkbox v-model="isComma" label="，" border></el-checkbox>
      <el-button type="" icon="el-icon-document-copy" @click="cc">Copy</el-button>
    </el-row>

    <el-row>
      <el-button @click="ck(1)">１</el-button>
      <el-button @click="ck(2)">２</el-button>
      <el-button @click="ck(3)">３</el-button>
      <el-button @click="ck(-1)"><i class="el-icon-back"></i></el-button>
    </el-row>

    <el-row>
      <el-button @click="ck(4)">４</el-button>
      <el-button @click="ck(5)">５</el-button>
      <el-button @click="ck(6)">６</el-button>
      <el-button @click="ck(-9)">Ｃ</el-button>
    </el-row>

    <el-row>
      <el-button @click="ck(7)">７</el-button>
      <el-button @click="ck(8)">８</el-button>
      <el-button @click="ck(9)">９</el-button>
      <el-button @click="ck(0)">０</el-button>
    </el-row>
    <i>小数点以下四捨五入</i>

  </div>
</template>

<script>
export default {
  name: 'Tax810',
  data() {
    return {
      input: '0',
      value: 0,
      result: '0',
      perTax: 10, // %
      isComma: true,
    }
  },
  computed: {
    calc: function () {
      let num = Math.round(this.value * (1 + this.perTax/100));
      if (this.isComma) {
        return this.ka(num);
      }
      return num;
    },
  },
  watch: {
    input: function (v) {
      // eslint-disable-next-line
      // console.log(typeof v);

      if (typeof v == 'string') {
        // 数字だけを取得
        v = v.replace(/[^0-9^]/g, '');
      }
      if (v == '') {
        v = 0;
      }

      this.value = Number(v);
    },
    value: function (v){
      this.input = v;
    },
  },
  methods: {
    // タブクリック
    handleClick(tab) {
      this.perTax = Number(tab.name);
    },
    // コピー
    cc() {
      const a = document.getElementById('result');
      a.select();

      document.execCommand('copy');
    },
    // 数値を返す  return int
    kd(v) {
      return (v.replace(/,/g, ''));
    },
    // カンマを付与 return str
    ka(v) {
      return String(Number(v)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    },
    // Click
    ck(v) {
      if (v < 0) {
        this.value = Number(String(this.value).slice(0, -1));

        if (v < -1) {
          this.value = 0;
        }
      } else {
        this.value = Number(String(this.value) + String(v));
      }
    },
  },
}
</script>

<style scoped>
  .el-input >>> .el-input__inner {
    text-align: right;
  }
</style>
