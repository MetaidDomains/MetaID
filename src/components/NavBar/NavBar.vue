<template>
	<div>
		<van-nav-bar :title="pageTitle" :leftText="leftText" :rightText="rightText" :leftArrow="leftArrow"
			:border="border" :fixed="fixed" :placeholder="placeholder" :safeAreaInsetTop="safeAreaInsetTop"
			:zIndex="zIndex" @click-left="onClickLeft" @click-right="onClickRight">
			<template v-if='leftSlot' #left>
				<slot name="left"></slot>
			</template>
			<template v-if='titleSlot' #title>
				<slot name="title"></slot>
			</template>
			<template v-if='rightSlot' #right>
				<slot name="right"></slot>
			</template>
		</van-nav-bar>
	</div>
</template>

<script>
	import {
		Toast,
		Dialog
	} from "vant";
	import {
		useRoute,
		useRouter
	} from "vue-router";
	import {
		toRefs,
		reactive,
		computed
	} from "vue";
	export default {
		name: "navBar",
		props: {
			title: {
				type: String,
				default: "",
			},
			leftText: {
				type: String,
				default: "",
			},
			rightText: {
				type: String,
				default: "",
			},

			leftArrow: {
				type: Boolean,
				default: true,
			},
			border: {
				type: Boolean,
				default: true,
			},

			fixed: {
				type: Boolean,
				default: true,
			},

			placeholder: {
				type: Boolean,
				default: true,
			},

			zIndex: {
				type: [String, Number],
				default: 1,
			},

			safeAreaInsetTop: {
				type: Boolean,
				default: false,
			},
			leftSlot: {
				type: Boolean,
				default: false,
			},

			titleSlot: {
				type: Boolean,
				default: false,
			},

			rightSlot: {
				type: Boolean,
				default: false,
			},

			leavePage: {
				type: Boolean,
				default: false,
			},
		},
		setup(props, {
			emit
		}) {
			const data = reactive({

			});
			console.log(props)
			const route = useRoute();
			const router = useRouter();
			const pageTitle = computed(() => {
				return data.pageTitle = props.title ? props.title : route.meta.title;
			})

			function onClickLeft() {
				emit("clickLeft");
				if (props.leavePage) {
					Dialog.confirm({
							title: "alert",
							message: "do",
							confirmButtonColor: "#15bb5b",
						})
						.then(() => {
							router.go(-1);
						})
						.catch(() => {});
					return;
				}
				router.go(-1);
			}

			function onClickRight() {
				emit("clickRight");
			}
			return {
				...toRefs(data),
				onClickLeft,
				onClickRight,
				pageTitle
			};
		},
	};
</script>
<style lang="scss" scoped>
	:deep(.van-nav-bar .van-icon) {
		color: #000;
	}

	:deep(.van-nav-bar__title) {
		font-size: 17px;
		color: #222;
	}
	
	.bar-box :deep(.van-nav-bar__content) {
		background: #0D6CD6;
	}
</style>
