/**
 * @overview    Vue Browser Update
 * @author      Richard Ayotte
 * @copyright   Copyright © 2017 Richard Ayotte
 * @license     GNU GPL-3.0
 * @flow
 */

import Vue from 'vue'
import VueBrowserUpdate from 'vue-browserupdate'
Vue.use(VueBrowserUpdate,  {
	options: {
		notify: {
			i: 11
			, f: -6
			, o: -6
			, s: -6
			, c: -6
		}
	}
	, test: false
})
