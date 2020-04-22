import Vuex from 'vuex'
import {filter, find, trimEnd} from 'lodash'

const dustControlItems = [
	{
		label: `Unpaved Roads`
		, route: `/services/dust-control/unpaved-roads`
		, imageHeader: {
			alt: `Da-Lee truck spraying calcium chloride on a long dusty country road`
			, src: `photos/services/unpaved-roads-header.jpg`
		}
	}
	, {
		label: `Industrial Sites`
		, route: `/services/dust-control/industrial-sites`
		, imageHeader: {
			alt: `Da-Lee truck spraying virgin oil on a dusty industrial road`
			, src: `photos/services/industrial-sites-header.jpg`
		}
	}
	, {
		label: `Full Depth Reclamation / Stabilization`
		, route: `/services/dust-control/full-depth-reclamation-stablization`
		, imageHeader: {
			alt: `Close-up of asphalt road that has been grind down to base level for new surface`
			, src: `photos/services/full-depth-reclamation-stabilization-header.jpg`
		}
	}
	, {
		label: `Indoor/Outdoor Horse Riding Arenas`
		, route: `/services/dust-control/indoor-outdoor-horse-riding-arenas`
		, imageHeader: {
			alt: `Girl riding a horse in large indoor horse riding arena treated with Liquidow calcium chloride for dust-free environment`
			, src: `photos/services/indoor-outdoor-horse-arenas-header.jpg`
		}
	}
]

const winterDeicerItems = [
	{
		label: `Dry Deicers`
		, route: `/services/winter-deicers/dry-deicers`
		, imageHeader: {
			alt: `Winter scene with a road that has  been deiced with Da-Lee calcium chloride`
			, src: 'photos/services/winter-deicers-header.jpg'
		}
	}
	, {
		label: `Liquid Deicers`
		, route: `/services/winter-deicers/liquid-deicers`
		, imageHeader: {
			alt: `Winter scene with a road that has  been deiced with Da-Lee calcium chloride`
			, src: 'photos/services/winter-deicers-header.jpg'
		}
	}
	, {
		label: `Blending Services`
		, route: `/services/winter-deicers/blending-services`
		, imageHeader: {
			alt: `Road salt and sand blending equipment making a large pile of treated road salt`
			, src: `photos/services/blending-services-header.jpg`
		}
	}
]

const pavementProductsItems = [
	{
		label: `Instarmac Permanent Pothole Repair&reg; Cold Lay Asphalt Concrete`
		, route: `/services/pavement-products/permanent-pothole-repair-cold-lay-asphalt`
		, imageHeader: {
			alt: `Da-Lee permanent pothole repair being added to a pothole and being tamped down to complete the repair`
			, src: `photos/services/permanent-pothole-repair-header.jpg`
		}
		, imageProduct: {
			alt: `Plastic tub of Da-Lee Instarmac Permanent Pothole repair`
			, src: 'photos/pavement-products/Permanent-Pothole-Repair.jpg'
		}
	}
	, {
		label: `Permanent Road Repair Cold Lay Asphalt Concrete`
		, route: `/services/pavement-products/instant-road-repair-6mm-cold-lay-asphalt`
		, imageHeader: {
			alt: `Da-Lee road repair added to damaged area of road with car tire driving over the quickly repaired area`
			, src: `photos/services/instant-road-repair-6mm-cold-lay-asphalt-header.jpg`
		}
		, imageProduct: {
			alt: `Plastic tub of Da-Lee Instarmac Instant Road repair`
			, src: 'photos/pavement-products/Instant-Road-Repair.jpg'
		}

	}
	, {
		label: `SCJ Seal &amp; Tack Coat Spray`
		, route: `/services/pavement-products/scj-seal-and-tack-coat-spray`
		, imageHeader: {
			alt: `Da-Lee pavement product crew worker spraying SCJ cold joint sealer to repaired road surface`
			, src: `photos/services/scj-seal-and-tack-spray-header.jpg`
		}
		, imageProduct: {
			alt: `Spray cans of Da-Lee SCJ Seal & Tack Coat spray`
			, src: 'photos/pavement-products/SCJ.jpg'
		}
	}
	, {
		label: `Instaband ECO&reg; - Thermoplastic Overbanding Tape`
		, route: `/services/pavement-products/instaband-eco-thermoplastic-overbanding`
		, imageHeader: {
			alt: `Da-Lee road crew worker heating Instaband ECO thermoplastic overbanding to repaired road to prevent water ingress`
			, src: `photos/services/instaband-eco-header.jpg`
		}
		, imageProduct: {
			alt: `Package and rolls of of Da-Lee Instaband ECO Thermoplastic Overbanding Tape`
			, src: 'photos/pavement-products/Instaband-ECO.jpg'
		}
	}
	, {
		label: `Envirobed HA104&reg; - High Performance Bedding Mortar`
		, route: `/services/pavement-products/envirobed-h-a104-high-performance-mortar`
		, imageHeader: {
			alt: `Da-Lee pavement product crew applying Envirobed HA104 high performance bedding mortar to a manhole reinstatement`
			, src: `photos/services/envirobed-ha104-header.jpg`
		}
		, imageProduct: {
			alt: `Da-Lee Envirobed HA104 high performance bedding mortar kit`
			, src: 'photos/pavement-products/Envirobed-HA104.jpg'
		}
	}
	, {
		label: `QC10 F - Rapid Set Flowable Concrete`
		, route: `/services/pavement-products/qc10-f-rapid-set-flowable-concrete`
		, imageHeader: {
			alt: `Da-Lee pavement product crew backfilling QC10F rapid set flowable concrete around manhole frame`
			, src: `photos/services/qc10f-rapid-set-header.jpg`
		}
		, imageProduct: {
			alt: `25KG bag of Da-Lee QC10F rapid set flowable concrete`
			, src: 'photos/pavement-products/QC10F.jpg'
		}
	}
	, {
		label: `Complete Manhole Reinstatement System`
		, route: `/services/pavement-products/complete-manhole-reinstatement-system`
		, imageHeader: {
			alt: `Da-Lee pavement product crew power tamping asphalt around final installation of a new manhole`
			, src: `photos/services/manhole-reinstatement-header.jpg`
		}
		, imageProduct: {
			alt: `Computer generated 3D illustration of the Da-Lee Manhole Reinstatement System`
			, src: 'photos/pavement-products/Manhole-Reinstatement-System.jpg'
		}
	}
]

const calciumChlorideItems = [
	{
		label: `Waste Water Treatment`
		, route: `/services/calcium-chloride-industrial-applications/waste-water-treatment`
		, imageHeader: {
			alt: `Da-Lee waste water treatment facility`
			, src: `photos/services/calcium-chloride-waste-water-treatement-header.jpg`
		}
	}
	, {
		label: `Concrete Acceleration`
		, route: `/services/calcium-chloride-industrial-applications/concrete-acceleration`
		, imageHeader: {
			alt: `Concrete being poured into industrial floor area`
			, src: `photos/services/concrete-acceleration-header.jpg`
		}
	}
	, {
		label: `Freeze Proofing`
		, route: `/services/calcium-chloride-industrial-applications/freeze-proofing`
		, imageHeader: {
			alt: `Winter scene with a road that has  been deiced with Da-Lee calcium chloride`
			, src: `photos/services/freezeproofing-header.jpg`
		}
	}
	, {
		label: `Tire Ballasting`
		, route: `/services/calcium-chloride-industrial-applications/tire-ballasting`
		, imageHeader: {
			alt: `Da-Lee service person checking tire pressure`
			, src: `photos/services/tire-ballasting-header.jpg`
		}
	}
	, {
		label: `Bulk`
		, route: `/services/calcium-chloride-industrial-applications/bulk`
		, imageHeader: {
			alt: `Da-Lee truck with bulk calcium chloride spraying a long dusty country road`
			, src: `photos/services/bulk-header.jpg`
		}
	}
]

const wasteDisposalItems = [
	{
		label: `Liquid/Solid Industrial Waste Transfer`
		, route: `/services/waste-disposal-recycling/liquid-industrial-waste-transfer-treatment`
		, imageHeader: {
			alt: `Fleet of Da-Lee industrial waste transport trucks in the waste and treatment area`
			, src: `photos/services/liquid-waste-transfer-&-treatment-header.jpg`
		}
	}
	, {
		label: `Wastewater Treatment`
		, route: `/services/waste-disposal-recycling/wastewater-treatment`
		, imageHeader: {
			alt: `Da-Lee state-of-the-art wastewater treatment facility`
			, src: `photos/services/waste-water-treatment-header.jpg`
		}
	}
	, {
		label: `Sludge &amp; Solids Processing`
		, route: `/services/waste-disposal-recycling/sludge-and-solids-processing`
		, imageHeader: {
			alt: `Da-Lee crew supervising non-hazardous sludge and slurry transfer`
			, src: `photos/services/sludge-&-solids-processing-header.jpg`
		}
	}
	, {
		label: `Industrial Services`
		, route: `/services/waste-disposal-recycling/industrial-services`
		, imageHeader: {
			alt: `Aerial view of Da-Lee industrial services area`
			, src: `photos/services/industrial-services-header.jpg`
		}
	}
	, {
		label: `Hydro-excavation/Slurry Dewatering & Recycling`
		, route: `/services/waste-disposal-recycling/hydro-excavation`
		, imageHeader: {
			alt: `Hydro excavation aerial view of the Da-Lee slurries and mud collection area`
			, src: `photos/services/hydro-excavation-header.jpg`
		}

	}
	, {
		label: `Drum/Containerized Waste Processing`
		, route: `/services/waste-disposal-recycling/container-waste-processing`
		, imageHeader: {
			alt: `Da-Lee area stacked with containers ready for waste processing`
			, src: `photos/services/container-waste-processing-header.jpg`
		}
	}
]

const wasteTransportationItems = [
	{
		label: `Vacuum Truck Services`
		, route: `/services/waste-transportation/vacuum-truck-services`
		, imageHeader: {
			alt: `Da-Lee crew person power vacuuming used industrial liquids into Da-Lee vacuum truck`
			, src: `photos/services/vacuum-truck-services-header.jpg`
		}
	}
	, {
		label: `Broker Services`
		, route: `/services/waste-transportation/broker-services`
		, imageHeader: {
			alt: `Fleet of Da-Lee Frac tank trucks`
			, src: `photos/services/broker-services-header.jpg`
		}
	}
]

const professionalServicesItems = [
	{
		label: `Waste Identification & Profiling`
		, route: `/services/professional-services/waste-identification-profiling`
		, imageHeader: {
			alt: `Aerial photo of Da-Lee employees at head office`
			, src: 'photos/services/professional-services-header.jpg'
		}
	}
	, {
		label: `HWIN Registration`
		, route: `/services/professional-services/hwin-registration`
		, imageHeader: {
			alt: `Aerial photo of Da-Lee employees at head office`
			, src: 'photos/services/professional-services-header.jpg'
		}
	}
]

const servicesItems = [
	{
		label: `Dust Control`
		, route: `/services/dust-control`
		, children: dustControlItems
		, imageLaunch: {
			alt: `Da-Lee truck spraying calcium chloride on a dusty country road`
			, src: 'photos/services/dust-control-launch.jpg'
		}
		, imageHeader: {
			alt: `Da-Lee truck spraying virgin oil on a long dusty country road`
			, src: 'photos/services/dust-control-header.jpg'
		}
	}
	, {
		label: `Winter Deicers`
		, route: `/services/winter-deicers`
		, children: winterDeicerItems
		, imageLaunch: {
			alt: `Winter scene with a road that has  been deiced with Da-Lee calcium chloride`
			, src: 'photos/services/winter-deicers-launch.jpg'
		}
		, imageHeader: {
			alt: `Winter scene with a road that has  been deiced with Da-Lee calcium chloride`
			, src: 'photos/services/winter-deicers-header.jpg'
		}
	}
	, {
		label: `Pavement Products`
		, route: `/services/pavement-products`
		, children: pavementProductsItems
		, imageLaunch: {
			alt: `Large pothole in asphalt that needs repairing`
			, src: 'photos/services/pavement-products-launch.jpg'
		}
		, imageHeader: {
			alt: `Long traffic-free highway through the country that is newly paved`
			, src: 'photos/services/pavement-products-header.jpg'
		}
	}
	, {
		label: `Calcium Chloride Industrial Applications`
		, route: `/services/calcium-chloride-industrial-applications`
		, children: calciumChlorideItems
		, imageLaunch: {
			alt: `Da-Lee calcium chloride manufacturing facility`
			, src: 'photos/services/calcium-chloride-industrial-applications-launch.jpg'
		}
		, imageHeader: {
			alt: `Da-Lee truck spraying calcium chloride on a long dusty country road`
			, src: 'photos/services/calcium-chloride-industrial-applications-header.jpg'
		}
	}
	, {
		label: `Waste Disposal & Recycling`
		, route: `/services/waste-disposal-recycling`
		, children: wasteDisposalItems
		, imageLaunch: {
			alt: `Hands holding a spouting green plant with beautiful blue sky in background`
			, src: 'photos/services/waste-disposal-recycling-launch.jpg'
		}
		, imageHeader: {
			alt: `Hands holding a spouting green plant with beautiful blue sky in background`
			, src: `photos/services/waste-disposal-&-recycling-header.jpg`
		}
	}
	, {
		label: `Waste Transportation`
		, route: `/services/waste-transportation`
		, children: wasteTransportationItems
		, imageLaunch: {
			alt: `Fleet of Da-Lee waste transportation service vehicles`
			, src: 'photos/services/waste-transportation-launch.jpg'
		}
		, imageHeader: {
			alt: `Aerial view of a fleet of Da-Lee waste transportation trucks in the truck yard`
			, src: 'photos/services/waste-transportation-header.jpg'
		}
	}
	, {
		label: `Laboratory Services`
		, route: `/services/professional-services`
		, children: professionalServicesItems
		, imageLaunch: {
			alt: `Da-Lee testing and development laboratory`
			, src: 'photos/services/professional-services-launch.jpg'
		}
		, imageHeader: {
			alt: `Aerial photo of Da-Lee employees at head office`
			, src: 'photos/services/professional-services-header.jpg'
		}
	}
]

const navigationItems = [
	{
		label: `Company`
		, route: `/company`
		, imageHeader: {
			alt: `Arial photo of the Da-Lee head office, manufacturing facility and truck yard`
			, src: `photos/company-header.jpg`
		}
	}
	, {
		label: `Services`
		, route: `/services`
		, children: servicesItems
		, imageHeader: {
			alt: `Fleet of Da-Lee transport trucks in the recycling plant area`
			, src: `photos/services-header.jpg`
		}
	}
	, {
		label: `Resources`
		, route: `/resources`
		, imageLaunch: {
			alt: `Index finger touching an interactive button to access Da-Lee resources and videos`
			, src: 'photos/resources-launch.jpg'
		}
		, imageHeader: {
			alt: `Index finger touching an interactive button to access Da-Lee resources and videos`
			, src: `photos/resources-header.jpg`
		}
	}
	, {
		label: `Careers`
		, route: `/careers`
		, imageLaunch: {
			alt: `Street sign that says Da-Lee careers against a blue sky background`
			, src: 'photos/careers-launch.jpg'
		}
		, imageHeader: {
			alt: `Street sign that says Da-Lee careers against a blue sky background`
			, src: `photos/careers-header.jpg`
		}
	}
	, {
		label: `Contact`
		, route: `/contact`
		, imageHeader: {
			alt: `Da-Lee dispatch operator taking a customer call`
			, src: `photos/contact-header.jpg`
		}
	}
	, {
		label: `The Da-Lee Group Website Privacy Policy`
		, route: `/privacy-policy`
		, isVisible: false
	}
	, {
		label: `The Da-Lee Group Website Usage Terms and Conditions Agreement`
		, route: `/terms-and-conditions`
		, isVisible: false
	}
]

const flattenItems = (items, key) => {
	return items.reduce((flattenedItems, item) => {
		flattenedItems.push(item)
		if (Array.isArray(item[key])) {
			flattenedItems = flattenedItems.concat(flattenItems(item[key], key))
		}
		return flattenedItems
	}, [])
}

const store = new Vuex.Store({
	state: {
		navigationItems
		, isMobileMenuVisible: false
	}
	, getters: {
		getItemByPath: state => path => {
			const flatItems = flattenItems(state.navigationItems, 'children')
			return find(flatItems, i => i.route === trimEnd(path, '/'))
		}
		, launchItems: state => {
			const flatItems = flattenItems(state.navigationItems, 'children')
			return filter(flatItems, 'imageLaunch')
		}
	}
})

export default () => store
