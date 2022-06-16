import './style.css'

	let canvas = document.querySelector("#canvas")
	// let ctx = canvas.getContext("2d")
	//绘制描边
	// ctx.strokeStyle = '#2a0f78'
	// ctx.lineWidth = 30
	// ctx.lineJoin = 'bevel'
	// ctx.strokeRect(0, 0, 500, 500)
	
	//绘制空心描边圆形
	// ctx.beginPath();
	// ctx.strokeStyle = 'red'
	// ctx.lineWidth = 20
	// ctx.arc(300, 300, 160, 0, 2 * Math.PI)
	// ctx.stroke()
	
	//绘制实心圆形
	// ctx.beginPath();
	// ctx.fillStyle = 'red'
	// ctx.arc(300, 300, 160, 0, 2 * Math.PI)
	// ctx.fill()
	
	//绘制带边实心圆形
	// ctx.beginPath();
	// ctx.fillStyle = "#4109e9"
	// ctx.strokeStyle = 'red'
	// ctx.lineWidth = 20
	// ctx.arc(300, 300, 160, 0, 2 * Math.PI)
	// ctx.fill()
	// ctx.stroke()
	
	//绘制自定义线条啦
	// ctx.beginPath();
	// ctx.fillStyle="#4109e9"
	// ctx.fillRect(0, 0, 500,500)
	// ctx.moveTo(0, 0)
	// ctx.lineTo(400, 200)
	// ctx.lineTo(0, 200)
	// ctx.closePath()
	// ctx.strokeStyle = 'red'
	// ctx.lineWidth = 10
	// ctx.stroke()
	
	//设置渐变createLinearGradient
	// ctx.beginPath();
	// let gradient = ctx.createLinearGradient(0, 0, 500, 500)
	// gradient.addColorStop(0,'#1abc9c')
	// gradient.addColorStop(0.5,'#9b59b6')
	// gradient.addColorStop(0,'#1abc9c')
	// ctx.strokeStyle = '#00ff00'
	// ctx.fillStyle = gradient
	// ctx.lineWidth = 30
	// ctx.rect(0,0,500,500);
	// ctx.fill();
	// ctx.stroke();
	
	//清除一块区域
	// ctx.beginPath();
	// let gradient = ctx.createLinearGradient(0, 0, 500, 500)
	// gradient.addColorStop(0,'#1abc9c')
	// gradient.addColorStop(0.5,'#9b59b6')
	// gradient.addColorStop(0,'#1abc9c')
	// ctx.strokeStyle = '#00ff00'
	// ctx.fillStyle = gradient
	// ctx.lineWidth = 30
	// ctx.rect(0,0,500,500);
	// ctx.fill();
	// ctx.stroke();
	// ctx.clearRect(50, 50, 100, 100)
	
	//写字
	// ctx.beginPath();
	// ctx.fillStyle = '#00ff00'
	// ctx.font = '30px CascadiaMono'
	// ctx.textBaseline = "top"
	// ctx.textAlign = "center"
	// ctx.fillText('houdunren.com@向军老师',200,20)
	
	//变色文字
	// ctx.beginPath();
	// let gradient = ctx.createLinearGradient(0, 0, 500, 500)
	// gradient.addColorStop(0,'#1abc9c')
	// gradient.addColorStop(0.5,'#9b59b6')
	// gradient.addColorStop(0,'#1abc9c')
	// ctx.fillStyle = '#00ff00'
	// ctx.strokeStyle = gradient
	// ctx.font = '30px CascadiaMono'
	// ctx.textBaseline = "top"
	// ctx.textAlign = "center"
	// ctx.strokeText('houdunren.com@向军老师',200,20)
	// ctx.fill()
	
	//填充一张图片吧
	// let img = new Image();
	// img.src= "../images/head.png"
	// console.log()
	// img.addEventListener('load',(e)=>{
	// 	console.log(img.naturalWidth)
	// 	ctx.beginPath();
	// 	const pat = ctx.createPattern(img, 'no-repeat')
	// 	ctx.fillStyle = pat
	// 	ctx.rect(0,0,500,500)
	// 	ctx.fill()
	// })
	
	//绘制一张图片
	// let img = new Image();
	// img.src= "../images/head.png"
	// console.log()
	// img.addEventListener('load',(e)=>{
	// 	canvas.width = img.naturalWidth * scale(img, canvas)
	// 	canvas.height = img.naturalHeight * scale(img, canvas)
	// 	ctx.drawImage(img, 0,0,canvas.width,canvas.height)
	// 	// ctx.rect(0,0,500,500)
	// 	// ctx.fill()
	// })
	
	// //取最小缩放比例
	// function scale(img: HTMLImageElement, ctx: HTMLCanvasElement): number {
	//   return Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
	// }
	
	//绘制二维码
	
	// ctx.beginPath();
	// ctx.fillStyle = '#ffffff'
	// ctx.strokeStyle = '#000000'
	// ctx.lineWidth = 10
	// ctx.rect(0,0,500,500)
	// ctx.fill();
	// ctx.stroke();
	// for(let i = 0;i<=300;i++){
	// 	let left = Math.floor(Math.random()*100)+200
	// 	let top = Math.floor(Math.random()*100)+200
	// 	console.log(left,top)
	// 	ctx.fillStyle = '#000000'
	// 	ctx.fillRect(left,top,5,5)
	// }

	// //绘制随机原型
	// for(let i = 0;i<=20;i++){
	// 	let left = Math.random() * canvas.width
	// 	let top = Math.random() * canvas.height
	// 	ctx.beginPath();
	// 	ctx.fillStyle = ['yellow', 'red', '#16a085','#0000ff', '#2ecc71', '#f1c40f', '#9b59b6'].sort(item=>{
	// 		return Math.floor(Math.random()*3)?1:-1
	// 	})[0]
	// 	ctx.arc(left, top, 5 + Math.floor(Math.random() * 100), 0, 2 * Math.PI)
	// 	ctx.fill()
	// }
	
	//自制一个画布
	class Draw{
		constructor(el:any,width:any,height:any){
			this.canvas = el
			this.ctx = this.canvas.getContext("2d")
			this.width = width
			this.height = height
			this.container = this.canvas.insertAdjacentElement('afterend',document.createElement('div'))
			this.img =  new Image()
			this.setBackGround()
			this.draw()
			this.handleCutPicture()
			this.clear()
			
		}
		//截图和后端交互
		private handleCutPicture(){		
			let btn = this.container.insertAdjacentElement('beforeend',document.createElement('button'))
			btn.style.width = 100 + 'px'
			btn.innerText = "截图"
			btn.addEventListener("click",()=>{
				this.img.style.cssText = "width:300px;border:1px solid #000000"
				this.img.src = this.canvas.toDataURL("image/png")
				this.container.insertAdjacentElement('afterend',this.img)
			})
		}
		//清屏
		clear(){
			let _this = this
			let btn = this.container.insertAdjacentElement('beforeend',document.createElement('button'))
			btn.style.width = 100 + 'px'
			btn.innerText = "清屏"
			btn.addEventListener("click",function(){
				_this.setBackGround()
			document.body.removeChild(_this.img)
			})
		}
		
		//设置画布背景
		private setBackGround(){
			let gradient = this.ctx.createLinearGradient(0, 0, 500, 500)
			gradient.addColorStop(0,'#1abc9c')
			gradient.addColorStop(0.5,'#9b59b6')
			gradient.addColorStop(0,'#1abc9c')
			this.ctx.fillStyle= gradient
			this.ctx.fillRect(0, 0, this.width,this.height)
			//如果用下面的方法，清除不干净
			// this.ctx.rect(0,0,this.width,this.height)
			// this.ctx.fill()
		}
		private draw(){
			let _this = this
			let callback = this.drawPicture.bind(this)
			this.canvas.addEventListener("mousedown",(e)=>{
				this.ctx.beginPath()
				this.canvas.addEventListener("mousemove",callback)	
			})
			this.canvas.addEventListener("mouseup",()=>{
				this.canvas.removeEventListener("mousemove",callback)
			})
		}
		private drawPicture(e){
			this.ctx.strokeStyle = 'red'
			this.ctx.lineWidth = 2
			this.ctx.lineTo(e.clientX,e.clientY)
			this.ctx.stroke()
		}
	}
	let draw = new Draw(canvas,500,500)