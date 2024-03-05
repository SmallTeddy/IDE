<script lang="ts" setup>
const fileTreeData = ref()
const fileTreeProps = {
  children: 'children',
  label: 'name',
}

const processHandle = async (handle) => {
  if (handle.kind == 'file') {
    return handle
  }
  handle.children = []
  const iter = handle.entries()
  for await (const item of iter) {
    handle.children.push(await processHandle(item[1]))
  }
  return handle
}

const selectDirectory = async () => {
  try {
    const handle = await window.showDirectoryPicker()
    fileTreeData.value = await processHandle(handle)
    console.log(fileTreeData.value)
  } catch (error) {
    console.log(error)
  }
}

const handleNodeClick = (item) => {
  console.log(item)
}
</script>

<template>
  <div h-full w-screen color-white flex>
    <el-container>
      <el-aside width="200px">
        <el-button class="select-file" @click="selectDirectory">选择文件夹</el-button>
        <el-tree v-if="fileTreeData" style="max-width: 200" :data="fileTreeData.children" :props="fileTreeProps"
          @node-click="handleNodeClick" />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.select-file {
  width: 100%;
  height: 40px;
  background: #222;
  border-radius: 0;
  border: 1px dashed #ccc;
}

::v-deep(.el-tree) {
  height: calc(100vh - 105px);
  overflow: auto;
  background: #222;

  .el-tree-node__content {
    height: 40px;
    font-size: 18px;

    &:hover {
      background: #ccc;
    }
  }

  .is-current {
    background: #ccc;
  }
}
</style>
