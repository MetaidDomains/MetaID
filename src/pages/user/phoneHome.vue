<template>
	<div class="bg">
		<div class="bgHeader">
			<div class="mid-logo">
				<img src="../../assets/images/mid-logo.png" alt="">
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
				<input class="searchInput" type="text" :value="value">
				<span class="searchplaceholder">.meta</span>
				<button @click="clicknoe" class="searchBtn">Search</button>
			</div>
		</div>
		<div class="Support">Support</div>
		<div class="supportList">
			<img src="../../assets/images/all-01.png" alt="" />
			<img src="../../assets/images/all-02.png" alt="" />
			<img src="../../assets/images/all-03.png" alt="" />
		</div>
		<div class="supportList supportLists">
			<img src="../../assets/images/all-06.png" alt="" />
			<img src="../../assets/images/all-03.png" alt="" />
			<img src="../../assets/images/all-04.png" alt="" />
		</div>
		<div class="Support_more">more...</div>

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
				
			});
			const clicknoe = ()=>{
				Toast("coming soon")
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
	width: calc(100vw - 1.6rem) ;
	// height: calc(100vh - 1.6rem) ;
	background-size: cover;
	background-repeat: no-repeat;
	padding:.8rem;
}
.mid-logo{
	img{
		width: 4rem;
		vertical-align: -0.43rem;
	}
}
.bgHeader{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
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
		width: 3rem;
		height: 1rem;
		line-height: 20px;
		color: #FFFFFF;
		border-radius: 1rem;
		font-size: .3rem;
		margin-left: 40px;
		cursor: pointer;
	}
}
.searchLogo{
	text-align: center;
	img{
		width: 8.4rem;
		margin-top: 2.2rem;
	}
}
.search{
	margin-top: 1.4rem;
}
.searchFun{
	width: 8rem;
	height:1rem;
	background-color: #FFFFFF;
	margin: 0 auto;
	margin-top: 1rem;
	border-radius: .3rem;
	padding: 0 10px;
	display: flex;
	flex-direction: row;
	
	align-items: center;
}
.searchIcon{
	font-size: .6rem;
	margin-top: 1px;
	color: #B92AF3;
}
.searchInput{
	// height:1rem;
	border: none;
	font-size:.4rem;
	// padding: 0 .3rem;
	width: 3.5rem;
}
.searchplaceholder{
	font-size: .4rem;
	color: #9F97A5;
}
.searchBtn{
	border: none;
	background-color: #AEAEAE;
	width: 3rem;	
	height: .74rem;
	color: #FFFFFF;
	font-size: .4rem;
	border-radius:.3rem;
	margin-left: 10px;
	cursor: pointer;
}
.Support{
	font-size: .8rem;
	color: #B92AF3;
	font-weight: 600;
	text-align: center;
	margin-top: 1.8rem;
	margin-bottom: .8rem;
}
.Support_more{
	font-size: .4rem;
	color: #B92AF3;
	font-weight: 600;
	text-align: center;
	margin-top: .8rem;
	margin-bottom: .8rem;
}
.supportLists{
	margin-top: 1rem!important;
}
.supportList{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	img{
		width: 2.6rem;
		margin: 0 .2rem;
	}
	margin-top: 20px;
}
.footer{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 32px;
	align-items: center;
}
.footerLeft{
	img{
		width: .8rem;
		margin: 0 .3rem;
		cursor: pointer;
	}
	text-align: center;
}
.footerCneter{
	img{
		width: .6rem;
		vertical-align: -.2rem;
		margin-right: .3rem;
	}
	font-size: .3rem;
	color: #FFFFFF;
	text-align: center;
	margin-top: .8rem;
}
.footerRight{
	font-size: .3rem;
	color: #FFFFFF;
	margin-top: .8rem;
	margin-bottom: .6rem;
}
</style>


