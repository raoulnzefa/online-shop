export default {

	ADD_TO_CART({
		commit
	}, product) {
		commit('SET_CART', product)
	},

	DELITE_FROM_CART({
		commit
	}, index) {
		commit('DELITE_ITEM_FROM_CART', index)
	},

	INCREMENT_CART_ITEM({
		commit
	}, index) {
		commit('INCREMENT', index)
	},

	DECREMENT_CART_ITEM({
		commit
	}, index) {
		commit('DECREMENT', index)
	}

}