	window.onload=function(){
		var vm=new Vue({
			el:"#app",
			data:{
				cur:0,
				w:"300",
				ml:"0",
				btnw:"20",
				banners:[
					{name:"艾克斯奥特曼",url:"",img:"images/1.jpg"},
					{name:"昭和奥特曼",url:"",img:"images/2.jpg"},
					{name:"新生代奥特曼",url:"",img:"images/3.jpg"},
					{name:"泰迦奥特曼",url:"",img:"images/4.jpg"},
					{name:"终极赛罗警备队",url:"",img:"images/5.jpg"}
				],
				timer:""
			},
			methods:{
				num(){
					this.cur++;
					var num=this.banners.length
					if(this.cur>num-1){
						this.cur=0;
					};
					this.ml=300*(this.cur);
				},
				prve(){
					var curs=this.cur;
					var num=this.banners.length
					if(this.cur>0){
						curs=this.cur--;
					}else{
						this.cur=num-1;
						curs=0;
					}
					this.ml=300*(this.cur);
				},
				next(){
					var curs=this.cur;
					var num=this.banners.length;
					if(this.cur<num-1){
						curs=this.cur++;
					}else{
						this.cur=0;
						curs=0;
					}
					this.ml=300*(this.cur);
				}
			},
			mounted(){
				//此处的300为轮播图的宽
				this.w=this.banners.length*300;
				//此处的22位焦点图的总宽度,包括盒子宽度,内外边距以及边框的总宽度
				this.btnw=this.banners.length*22;
				//控制轮播图链接
				this.banners.forEach(function(item){
					var rel=item.url;
					rel==""?item.url="javascript:;":item.url=rel;
				});
				this.cur = setInterval(this.num, 3000);
			},		
		})	
	}