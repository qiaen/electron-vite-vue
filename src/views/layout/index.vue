<template>
	<div class="contain">
		<menu>
			<input placeholder="搜索"></input>
			<div class="menu-ul">
				<div @click="curt = item.src" :class="{curt: curt === item.src}" v-for="item in menus" :key="item.href">{{ item.label }}</div>
			</div>
		</menu>
		<main>
			<div class="main-container">
				<h2>File</h2>
				<button @click="readFiles">读取文件</button>
				<br />
				<br />
				<button @click="writeFiles">写入文件</button>
			</div>
		</main>
	</div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
let menus = [{
	icon: "",
	src: "/file",
	label: "File"
}]
let curt = ref("/file")
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
menu input {
	width: 210px;
	box-sizing: border-box;
	padding: 7px 10px;
	border-radius: 5px;
	background-color: #ddd;
	border: none;
	margin-bottom: 20px;
}
.menu-ul>div {
	width: 210px;
	padding: 8px;
	border-radius: 6px;
	box-sizing: border-box;
	font-weight: bold;
}
.menu-ul>div.curt {
	background-color: #ccc;
	
}
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
	padding: 20px 15px;
	width: 210px;
	height: 100%;
	background-color: #f0f0f0;
}
.contain main {
	flex: 1;
	height: 100%;
	background-color: #fff;
}
</style>
