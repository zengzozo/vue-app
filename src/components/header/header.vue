<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img v-blid:src="seller.avatar" width="64" height="64" alt="">
			</div>
		</div>
		<div class="bulletin-warpper"></div>
	</div>

</template>

<script tpye="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
