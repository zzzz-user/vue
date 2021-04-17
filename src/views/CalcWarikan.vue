<template>
  <div>
    <el-main>
      <p>
        わりかん
      </p>
      <el-input placeholder="Please input" v-model="input"
                @blur="calc" @clear="reset" type="number"
      ></el-input>

      <el-input-number v-model="member" @change="handleChange" :min="2" :max="10"></el-input-number>

      <div>
        <p>
          ひとりが少し多く払う：<br>
          {{ result[0] | comma }}円
        </p>
        <p>
          ほかのひと：<br>
          {{ result[1] | comma }}円
        </p>
        <p>
          （{{ zeroUp | viewZero }}）<br>
          <i style="font-size: 30px;" class="el-icon-caret-left" @click="zeroLeft"></i>
          <i style="font-size: 30px;" class="el-icon-caret-right" @click="zeroRight"></i><br>
          切り捨て回収
        </p>
      </div>

    </el-main>
  </div>
</template>

<script>
  export default {
    name: "CalcWarikan",
    data() {
      return {
        input: 333333,
        member: 2,
        result: [0, 0],
        zeroUp: 2,
      };
    },
    created() {
      this.calc();
    },
    // watch: {
    //   member: 'calc',
    // },
    filters: {
      comma: function(v) {
        return String(v).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      },
      viewZero: function(v) {
        if (v == 0) {
          return '#';
        }
        let z = '0'.repeat(v);
        return '#' + z.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      },
    },
    methods: {
      isNum(v) {
        if (v < this.member) {
          this.reset();
          return false;
        }
        return true;
      },
      reset() {
        this.input = 0;
        this.result = [0, 0];
      },
      calc() {
        if (! this.isNum(this.input)) {
          return;
        }
        // 切り捨て回収
        let zeroUnit = 1;
        for (let i = 0; i < this.zeroUp; i++) {
          zeroUnit = zeroUnit * 10;
        }

        const surplus = this.input % this.member;
        // const at = (this.input - surplus) / this.member;

        const at = Math.floor(((this.input - surplus) / this.member) / zeroUnit) * zeroUnit;

        // // eslint-disable-next-line
        // console.log(at);

        //  格納
        this.result = [
          this.input - (at * (this.member - 1)),
          at,
        ];
      },
      handleChange() {
        this.calc();
      },
      zeroLeft() {
        if (this.zeroUp > 5) {
          return;
        }
        this.zeroUp ++;
        this.calc();
      },
      zeroRight() {
        if (this.zeroUp <= 0) {
          return;
        }
        this.zeroUp --;
        this.calc();
      },
    },
  };
</script>

<style scoped>
  .el-input >>> .el-input__inner {
    text-align: right;
    width: 300px;
  }
</style>