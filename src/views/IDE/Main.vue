<script lang="ts" setup>
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
    const root = await processHandle(handle)
    console.log(root)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div h-full w-screen color-white flex>
    <el-container>
      <el-aside width="200px">
        <el-button @click="selectDirectory">选择文件夹</el-button>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
</style>
