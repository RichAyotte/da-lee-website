/**
 * @overview    Nuxt configuration
 * @author      Richard Ayotte
 * @copyright   Copyright © 2017 Richard Ayotte
 * @date        2017-06-10 10:56:34
 * @license     GNU GPL-3.0
 * @flow
 */

const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const LoaderOptionsPlugin = require('webpack').LoaderOptionsPlugin
const path = require('path')
const responsiveLoaderAdapter = require('responsive-loader/sharp')
const rucksackCss = require('rucksack-css')

const getImageSizes = () => {
	if (process.env.NODE_ENV !== 'production') {
		return [540]
	}

	const sizes = [
		540
		, 720
		, 960
		, 1140
	]

	return [
		...sizes
		, ...sizes.map(x => x * 2)
	]
}

const getBuildPlugins = () => {
	if (process.env.NODE_ENV !== 'production') {
		return []
	}

	return [
		new ImageminPlugin({
			plugins: [
				imageminMozjpeg({
					quality: 75
					, progressive: false
				})
			]
			, pngquant: {
				quality: '95-100'
			}
			, test: /\.(jpg|png)$/
		})
	]
}

const getProxy = () => {
	if (process.env.NODE_ENV !== 'production') {
		return [
			'http://localhost:3001/*.php'
		]
	}

	return []
}

module.exports = {

	/**
	 * Build
	 * @type {Object}
	 */
	build: {
		extend(config, {dev, isClient}) {
			if (dev && isClient) {
				config.module.rules.push({
					enforce: `pre`
					, exclude: /(node_modules)/
					, loader: `eslint-loader`
					, test: /\.(js|vue)$/
				})
			}

			// Load this one last because it returns the srcset
			config.module.rules.unshift({
				test: /\.(jpe?g|png)$/i
				, loader: 'responsive-loader'
				, options: {
					adapter: responsiveLoaderAdapter
					, disable: false
					, placeholder: true
					, placeholderSize: 50
					, quality: 100
					, sizes: getImageSizes()
				}
			})
		}
		, extractCSS: false
		, plugins: getBuildPlugins()
		, postcss: [
			rucksackCss
		]
		, vendor: [
			'axios'
			, 'vue-recaptcha'
		]
	}

	/**
	 * CSS
	 * @type {Array}
	 */
	, css: [
		{
			lang: 'stylus'
			, src: 'assets/css/global.styl'
		}
	]

	/**
	 * Page header
	 * @type {Object}
	 */
	, head: {
		htmlAttrs: {
			lang: 'en'
		}
		, link: [
			{
				href: `favicon.ico`
				, rel: `icon`
				, type: `image/x-icon`
			}
			, {
				href: `/apple-touch-icon.png`
				, rel: `apple-touch-icon`
				, sizes: `180x180`
			}
			, {
				href: `/favicon-32x32.png`
				, rel: `icon`
				, sizes: `32x32`
				, type: `image/png`
			}
			, {
				href: `/favicon-16x16.png`
				, rel: `icon`
				, sizes: `16x16`
				, type: `image/png`
			}
			, {
				href: `/manifest.json`
				, rel: `manifest`
			}
			, {
				color: `#5bbad5`
				, href: `/safari-pinned-tab.svg`
				, rel: `mask-icon`
			}
			, {
				href: `https://fonts.googleapis.com/css?family=Lato`
				, rel: `stylesheet`
			}
		]
		, meta: [
			{
				charset: `utf-8`
			}
			, {
				content: `width=device-width, initial-scale=1`
				, name: `viewport`
			}
			, {
				content: `Da-Lee dust control, Da-Lee, road dust control, road dust suppression, parking lots, dust control, road dust solution, dust suppressants, virgin oil, dowflake, liquidow, dow chemical, oxychem, occidental chemical corporation, road base stabilization products, gravel road dust, industrial dust control, municipal roads, municipal dust control, indoor riding arena, outdoor ring dust control, horse arenas and rings, water treatment, waste water treatment, freeze proofing, tire ballasting, bulk liquid transfer, calcium chloride, liquid calcium chloride, concrete accelerant, winter deicers, deicing, mobile treated salt and sand, salt & sand mixing, pugmill, flake and liquid deicers, permanent pothole repair, instant road repair, pavement products, manhole reinstatement system, instarmac, premium asphalt road repair solutions, road maintenance, environmental services,  waste disposal, waste transportation, liquid industrial waste, sludges and solids processing, drum disposal, oil recovery, oil recycling, tank truck services, vacuum truck services, roll off truck, roll off boxes, generator M.O.E. registration, Ministry of environment, environmental services, analytical services, waste profiling, hazardous waste, hazardous waste disposal, waste disposal and recycling, waste audits, environmental consulting, Niagara, Stoney Creek, Hamilton, Burlington, Toronto, GTA, Ontario, Canada`
				, name: 'keywords'
			}
			, {
				content: `Da-Lee`
				, name: `description`
			}
			, {
				content: `#ffffff`
				, name: `theme-color`
			}
		]
		, title: `Da-Lee`
	}

	/**
	 * Generate Options
	 * @type {Object}
	 */
	// , generate: {}

	/**
	 * Loading colour
	 * @type {Object}
	 */
	, loading: {
		color: `#3B8070`
	}

	/**
	 * Modules
	 * @type {Array}
	 */
	, modules: [
		'@nuxtjs/bootstrap-vue'
		// www.daleegroup.com
		// 'UA-102818455-1'
		// www.daleedustcontrol.com
		// 'UA-102818455-2'
		, [
			'@nuxtjs/google-analytics'
			, {
				ua: 'UA-102818455-2'
			}
		]
		, [
			'@nuxtjs/google-tag-manager'
			, {
				id: 'GTM-N3P4VKR'
			}
		]
		, '@nuxtjs/proxy'
	]

	/**
	 * Performance
	 * @type {Object}
	 */
	, performance: {
		gzip: false
		, prefetch: true
	}

	/**
	 * Plugins
	 */
	, plugins: [
		{
			src:'~plugins/smooth-scroll'
			, ssr: false
		}
		, {
			src: '~/plugins/vuelidate'
			, ssr: true
		}
		, {
			src: '~/plugins/browserupdate'
			, ssr: false
		}
	]

	/**
	 * Proxy
	 * @type {Object}
	 */
	, proxy: getProxy()

	/**
	 * Router
	 * @type {Object}
	 */
	, router: {
		base: '/'
	}
}
