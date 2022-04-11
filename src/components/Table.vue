<template>
  <el-card class="box-card mx-5">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" sortable label="Date" width="180" />
      <el-table-column prop="name" sortable label="Name" width="180" />
      <el-table-column prop="address" sortable label="Address" />
    </el-table>
    <el-pagination
      background
      class="mt-5 flex justify-end"
      :page-size="10"
      layout="prev, pager, next"
      :total="100"
    />
  </el-card>
  <el-card class="m-5">
    <div class="block">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
        value-format="YYYY-MM-DD"
        format="DD/MM/YYYY"
      >
      </el-date-picker>
    </div>
  </el-card>
  <el-card class="m-5 bg-gray-500 font-bold">
    <h2>hello</h2>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref('2022-02-04');

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 199, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 200, Grove St, Los Angeles'
  }
];
</script>
