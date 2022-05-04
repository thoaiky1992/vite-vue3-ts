<template>
  <el-card class="box-card mx-5 dark:border-0 dark:bg-slate-600 dark:!shadow dark:!shadow-white">
    <el-table
      row-class-name="dark:bg-slate-600 dark:text-white"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        class-name="dark:!bg-slate-600 dark:text-white"
        prop="date"
        sortable
        label="Date"
        width="180"
      />
      <el-table-column
        class-name="dark:!bg-slate-600 dark:text-white"
        prop="name"
        sortable
        label="Name"
        width="180"
      />
      <el-table-column
        class-name="dark:!bg-slate-600 dark:text-white"
        prop="address"
        sortable
        label="Address"
      />
      <el-table-column align="right" class-name="dark:!bg-slate-600 dark:text-white">
        <template #default="scope">
          <el-button size="small" @click="handleAction(scope.$index, scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click="handleAction(scope.$index, scope.row)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      class="mt-5 flex justify-end dark:!bg-slate-600 dark:text-white"
      :page-size="10"
      layout="prev, pager, next"
      :total="100"
    />
  </el-card>
  <el-card
    class="box-card m-5 mx-5 dark:border-0 dark:bg-slate-600 dark:!shadow dark:!shadow-white"
  >
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
  <el-card class="mx-5 animate-pulse duration-200 dark:bg-slate-600">
    <div class="h-24 w-full rounded bg-gray-300 dark:bg-white"></div>
    <div class="mt-5 flex h-5 w-full rounded bg-gray-300 dark:bg-white">
      <div class="h-24 flex-1"></div>
      <div class="h-24 flex-1"></div>
    </div>
    <div class="mt-5 flex h-5 w-full rounded bg-gray-300 dark:bg-white">
      <div class="h-24 flex-1"></div>
      <div class="h-24 flex-1"></div>
    </div>
  </el-card>
  <dialog-app />
</template>

<script setup lang="ts">
import DialogApp from '@/components/Dialog.vue';

import { ref } from 'vue';

const date = ref('2022-02-04');
const show = ref<boolean>(true);

interface ITableItem {
  date: string;
  name: string;
  address: string;
}
const handleAction = (index: number, row: ITableItem) => {
  console.log(index);
  console.log(row);
};

const handleSelectionChange = (val: ITableItem[]) => {
  console.log(val);
};

const tableData: Array<ITableItem> = [
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
