<template>
  <div>
    <el-main>
      <p>
        和暦表示：
        <el-switch v-model="isUnion">
        </el-switch>
      </p>

      <p>
        <el-select v-model="beginYear" placeholder="Select" @change="calc">
          <el-option

            v-for="item in year"
            :key="item.value"
            :label="item.value +'年' + (isUnion ? '（' + item.wa + '）' : '')"
            :value="item.value"
          >
            <span style="float: left">{{ item.value }}年</span>
            <span v-if="isUnion"
                  style="float: right; color: #8492a6; font-size: 13px">{{ item.wa }}</span>
          </el-option>
        </el-select>
        <el-select v-model="beginMonth" placeholder="Select"
                   style="width: 100px" @change="calc">
          <el-option
            v-for="n in 12"
            :key="n"
            :label="n +'月'"
            :value="n"
          >
            <span style="float: left">{{ n }}月</span>
          </el-option>
        </el-select>
      </p>
から
      <p>
        <el-select v-model="endYear" placeholder="Select" @change="calc">
          <el-option
            v-for="item in year"
            :key="item.value"
            :label="item.value +'年' + (isUnion ? '（' + item.wa + '）' : '')"
            :value="item.value"
          >
            <span style="float: left">{{ item.value }}年</span>
            <span v-if="isUnion"
                  style="float: right; color: #8492a6; font-size: 13px">{{ item.wa }}</span>
          </el-option>
        </el-select>
        <el-select v-model="endMonth" placeholder="Select"
                   style="width: 100px"
                   @change="calc"
        >
          <el-option
            v-for="n in 12"
            :key="n"
            :label="n +'月'"
            :value="n"
          >
            <span style="float: left">{{ n }}月</span>
          </el-option>
        </el-select>
      </p>


      <p>{{ result }}</p>


    </el-main>
  </div>
</template>

<script>
  export default {
    name: "CalcMonth",
    data() {
      return {
        isUnion: true,
        result: '',
        beginYear: 2018,
        beginMonth: 4,
        endYear: 2019,
        endMonth: 9,
        year: [
          {
            value: 2000,
            wa: '平成12年',
          },
          {
            value: 2001,
            wa: '平成13年',
          },
          {
            value: 2002,
            wa: '平成14年',
          },
          {
            value: 2003,
            wa: '平成15年',
          },
          {
            value: 2004,
            wa: '平成16年',
          },
          {
            value: 2005,
            wa: '平成17年',
          },
          {
            value: 2006,
            wa: '平成18年',
          },
          {
            value: 2007,
            wa: '平成19年',
          },
          {
            value: 2008,
            wa: '平成20年',
          },
          {
            value: 2009,
            wa: '平成21年',
          },
          {
            value: 2010,
            wa: '平成22年',
          },
          {
            value: 2011,
            wa: '平成23年',
          },
          {
            value: 2012,
            wa: '平成24年',
          },
          {
            value: 2013,
            wa: '平成25年',
          },
          {
            value: 2014,
            wa: '平成26年',
          },
          {
            value: 2015,
            wa: '平成27年',
          },
          {
            value: 2016,
            wa: '平成28年',
          },
          {
            value: 2017,
            wa: '平成29年',
          },
          {
            value: 2018,
            wa: '平成30年',
          },
          {
            value: 2019,
            wa: '平成31年/令和元年',
          },
          {
            value: 2020,
            wa: '令和 2年',
          },
          {
            value: 2021,
            wa: '令和 3年',
          },
          {
            value: 2022,
            wa: '令和 4年',
          },
          {
            value: 2023,
            wa: '令和 5年',
          },
          {
            value: 2024,
            wa: '令和 6年',
          },
          {
            value: 2025,
            wa: '令和 7年',
          },
          {
            value: 2026,
            wa: '令和 8年',
          },
        ],
      };
    },
    created() {
      this.calc();
    },
    methods: {
      calc(){
        if (this.beginYear > this.endYear) {
          this.result = 'fails';
          return;
        }

        let y = this.endYear - this.beginYear;
        let m = this.endMonth - this.beginMonth + 1;

        if ((y * 12) + m < 0) {
          this.result = 'fails';
          return;
        }

        if (m >12) {
          y ++;
          m = 0;
        }

        // 調整
        if (m < 0 && y > 0) {
          y--;
          m = m + 12;
        }

        this.result = String((y * 12) + m) + 'ヶ月' + '（' + String(y) + '年' + String(m) + 'ヶ月）';
      },
    },
  }
</script>

<style scoped>

</style>