<template>
	<div class="contain">
		<menu></menu>
		<main>
			<div class="main-container">
				<h2>File</h2>
				<button @click="readFiles">读取文件</button>
				<br>
				<br>
				<button @click="writeFiles">写入文件</button>
			</div>
		</main>
	</div>
</template>
<script setup lang="ts">
async function readFiles() {
	console.log('读取文件开始～')
	let files = await window.ipcRenderer.invoke("readFiles")
	console.log('方式2:--', files)
}
async function writeFiles() {
	console.log('写入文件开始～')
	let data = await window.ipcRenderer.invoke("writeFiles")
	console.log(data)
}
</script>
<style>
.main-container {
	padding: 30px;
}
.main-container > h2 {
	margin-bottom: 20px;
}
.contain {
	display: flex;
	width: 100%;
	height: 100%;
}
.contain menu {
	width: 240px;
	height: 100%;
	background-color: #f0f0f0;
}
.contain main {
	flex: 1;
	height: 100%;
	background-color: #fff;
}
</style>
