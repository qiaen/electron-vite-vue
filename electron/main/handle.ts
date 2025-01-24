import { ipcMain } from 'electron'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

export const __dirname = path.dirname(fileURLToPath(import.meta.url))
// 读取文件
ipcMain.handle('readFiles', () => {
	console.log('electron: 进程被调用')
	const currentDir = __dirname
	const files = fs.readdirSync(currentDir).filter(item => {
		const itemPath = path.join(currentDir, item)
		return fs.statSync(itemPath).isFile()
	})
	console.log('当前文件夹下的文件:', files)
	return {
		code: 200,
		message: "",
		data: files
	}
})

ipcMain.handle('writeFiles', () => {
	console.log('electron: 写入文件进程被调用')
	const text = '这是要写入文件的文本内容。'
	const filePath = 'example.txt'

	fs.writeFile(filePath, text, 'utf8', err => {
		if (err) {
			console.log("elextron: 写入文件成功")
			return {
				message: `写入文件时出错: ${err}`,
				code: 400
			}
		}
		console.log("elextron: 写入文件成功")
		
	})
	return {
		message: `写入文件成功`,
		code: 200
	}
})
