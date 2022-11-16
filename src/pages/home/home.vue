<template>
	<div class="bg">
		<div class="bgHeader">
			<div class="mid-logo">
				<img src="../../assets/images/mid-logo.png" alt="">
			</div>
			<div class="mid-menu">
				<div @click="clicknoe">.meta Domains</div>
				<div @click="clicknoe">Community</div>
				<div @click="clicknoe">Learn More</div>
				<div @click="clicknoe">About Us</div>
			</div>
			<div class="mid-button">
				<button @click="clicknoe">Connect Wallet</button>
			</div>
		</div>
		<div class="searchLogo">
			<img src="../../assets/images/meta.png" alt="">
		</div>
		<div class="search">
			<div class="searchFun">
				<van-icon class="searchIcon" name="search" />
				<input class="searchInput" type="text" :value="value" placeholder="">
				<span class="searchplaceholder">.meta</span>
				<button @click="clicknoe" class="searchBtn">Search</button>
			</div>
		</div>
		<div class="Support">Support</div>
		<div class="supportList">
			<img src="../../assets/images/all-01.png" alt="" />
			<img src="../../assets/images/all-02.png" alt="" />
			<img src="../../assets/images/all-05.png" alt="" />
			<img src="../../assets/images/all-06.png" alt="" />
			<img src="../../assets/images/all-03.png" alt="" />
			<img src="../../assets/images/all-04.png" alt="" />
		</div>
		<div class="footer">
			<div class="footerLeft">
				<a href="https://twitter.com/metaiddomains"><img src="../../assets/images/twer.png" alt="" /></a>
				<a @click="clicknoe"><img src="../../assets/images/2g.png" alt="" /></a>
				<a @click="clicknoe"><img src="../../assets/images/2b.png" alt="" /></a>
				<a href="https://github.com/MetaidDomains"><img src="../../assets/images/2git.png" alt="" /></a>
			</div>
			<div class="footerCneter">
				<img src="../../assets/images/flogo.png" alt="">
				<span>© 2022 metaid.domains</span>
			</div>
			<div class="footerRight">Pravacy Policy</div>
		</div>
	</div>

	<div v-if="showstate" class="showTao">coming soon</div>
	
</template>
<script>
	import tabBar from '@/components/TabBar/TabBar.vue'
	import { Toast, Button, Tab, Tabs,List} from 'vant';
	import {
		ref,
		toRefs,
		reactive,
	} from "vue";
	import { pubilcUrlFun } from '@/utils/token.js'
	export default {
		name: "Home",
		components: {
			tabBar
		},
		setup() {
		
			const data = reactive({
				value:"",
				state:false,
				active: 0,
				list:[],
				loading:false,
				finished:false,
				showstate:false,
			});

			const clicknoe = ()=>{
				data.showstate=true;
				setTimeout(()=>{
					data.showstate=false;
				},1000)
			}
			
			return {
				...toRefs(data),
				clicknoe,
			};
		},
	};
</script>
<style lang="scss" scoped>
.bg{
	font-family:"Poppins-Medium" ;
	background-image: url("../../assets/images/bg.png");
	width: calc(100vw - 12%) ;
	height: calc(100vh - 40px) ;
	background-size: cover;
	background-repeat: no-repeat;
	padding:20px 6%;
}
.mid-logo{
	img{
		width: 100px;
	}
}
.bgHeader{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	justify-content: flex-start;
	align-items: center;
}
.mid-menu{
	display: flex;
	flex-direction: row;
	color: #ffffff;
	width: 50%;
    justify-content: space-between;
	margin-left: 100px;
	align-items: center;
	font-size: 8px;
	div{
		cursor: pointer;
	}
}
.mid-button{
	button{
		border: none;
		background-color: #AEAEAE;
		width: 80px;
		height: 20px;
		line-height: 20px;
		color: #FFFFFF;
		border-radius: 20px;
		font-size: 8px;
		margin-left: 40px;
		cursor: pointer;
	}
}
.searchLogo{
	text-align: center;
	img{
		width: 280px;
		margin-top: 46px;
	}
}
.searchFun{
	width: 280px;
	height:28px;
	background-color: #FFFFFF;
	margin: 0 auto;
	margin-top: 20px;
	border-radius: 28px;
	padding: 0 10px;
	display: flex;
	flex-direction: row;
	
	align-items: center;
}
.searchIcon{
	font-size: 14px;
	margin-top: 1px;
	color: #B92AF3;
}
.searchInput{
	height:20px;
	border: none;
	font-size: 12px;
	flex: 1;
	padding: 0 10px;
}
.searchplaceholder{
	font-size: 12px;
	color: #9F97A5;
}
.searchBtn{
	border: none;
	background-color: #AEAEAE;
	width: 60px;
	height: 20px;
	line-height: 20px;
	color: #FFFFFF;
	border-radius: 20px;
	font-size: 8px;
	margin-left: 10px;
	cursor: pointer;
}
.Support{
	font-size: 22px;
	color: #B92AF3;
	font-weight: 600;
	text-align: center;
	margin-top: 32px;
}
.supportList{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	img{
		width: 80px;
		margin: 0 10px;
	}
	margin-top: 20px;
}
.footer{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 32px;
	align-items: center;
}
.footerLeft{
	img{
		width: 10px;
		margin: 0 6px;
		cursor: pointer;
	}
	text-align: center;
}
.footerCneter{
	img{
		width: 10px;
		vertical-align: -2px;
		margin-right: 5px;
	}
	font-size: 8px;
	color: #FFFFFF;
	text-align: center;
	margin-right: 20px;
}
.footerRight{
	font-size: 8px;
	color: #FFFFFF;
}
.showTao{
	background-color: rgba(0, 0, 0, .7);
	width: 100px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	color: #ffffff;
	border-radius: 6px;
	font-size: 14px;
	top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
	position: absolute;
	z-index: 2004;
}
</style>


