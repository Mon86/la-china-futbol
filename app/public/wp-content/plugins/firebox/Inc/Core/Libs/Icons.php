<?php
/**
 * @package         FireBox
 * @version         2.0.15 Free
 * 
 * @author          FirePlugins <info@fireplugins.com>
 * @link            https://www.fireplugins.com
 * @copyright       Copyright © 2023 FirePlugins All Rights Reserved
 * @license         GNU GPLv3 <http://www.gnu.org/licenses/gpl.html> or later
*/

namespace FireBox\Core\Libs;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

class Icons
{
	/**
	 * Returns all icons.
	 * 
	 * @return  array
	 */
	public static function getAll()
	{
		$list = self::getList();

		$icons = [
			'none' => fpframework()->_('FPF_NONE')
		];

		foreach ($list as $item)
		{
			$icons[$item] = $item;
		}

        return $icons;
	}

	/**
	 * Holds all icons list.
	 * 
	 * @return  array
	 */
	public static function getList()
	{
		return ['address-book','address-card','align-center','align-justify','align-left','align-right','anchor','angle-down','angle-left','angle-right','angle-up','angles-down','angles-left','angles-right','angles-up','ankh','apple-whole','archway','arrow-down-long','arrow-down-short-wide','arrow-down-wide-short','arrow-down','arrow-left-long','arrow-left','arrow-pointer','arrow-right-arrow-left','arrow-right-from-bracket','arrow-right-long','arrow-right-to-bracket','arrow-right','arrow-rotate-left','arrow-rotate-right','arrow-trend-down','arrow-trend-up','arrow-turn-down','arrow-turn-up','arrow-up-from-bracket','arrow-up-long','arrow-up-right-from-square','arrow-up-short-wide','arrow-up-wide-short','arrow-up','arrows-left-right','arrows-rotate','arrows-up-down-left-right','arrows-up-down','asterisk','at','atom','audio-description','austral-sign','award','baby-carriage','baby','backward-fast','backward-step','backward','bacon','bacteria','bacterium','bag-shopping','bahai','baht-sign','ban-smoking','ban','bandage','bank','barcode','bars-progress','bars-staggered','bars','baseball','basket-shopping','basketball','bath','battery-empty','battery-full','battery-half','battery-quarter','battery-three-quarters','bed-pulse','bed','beer-mug-empty','bell-concierge','bell-slash','bell','bezier-curve','bicycle','binoculars','biohazard','bitcoin-sign','blender-phone','blender','blog','bold','bolt','bomb','bone','bong','book-atlas','book-bible','book-journal-whills','book-medical','book-open-reader','book-open','book-quran','book-skull','book','bookmark','border-all','border-none','border-top-left','bowling-ball','box-archive','box-open','box-tissue','box','boxes-stacked','braille','brain','brazilian-real-sign','bread-slice','briefcase-medical','briefcase','broom-ball','broom','brush','bug','building','bullhorn','bullseye','burger','bus-simple','bus','business-time','cake-candles','calculator','calendar-check','calendar-day','calendar-days','calendar-minus','calendar-plus','calendar-week','calendar-xmark','calendar','camera-retro','camera-rotate','camera','campground','candy-cane','cannabis','capsules','car-battery','car-crash','car-rear','car-side','car','caravan','caret-down','caret-left','caret-right','caret-up','carrot','cart-arrow-down','cart-flatbed-suitcase','cart-flatbed','cart-plus','cart-shopping','cash-register','cat','cedi-sign','cent-sign','certificate','chair','chalkboard-user','chalkboard','champagne-glasses','charging-station','chart-area','chart-bar','chart-column','chart-gantt','chart-line','chart-pie','check-double','check-to-slot','check','cheese','chess-bishop','chess-board','chess-king','chess-knight','chess-pawn','chess-queen','chess-rook','chess','chevron-down','chevron-left','chevron-right','chevron-up','child','church','circle-arrow-down','circle-arrow-left','circle-arrow-right','circle-arrow-up','circle-check','circle-chevron-down','circle-chevron-left','circle-chevron-right','circle-chevron-up','circle-dollar-to-slot','circle-dot','circle-down','circle-exclamation','circle-h','circle-half-stroke','circle-info','circle-left','circle-minus','circle-notch','circle-pause','circle-play','circle-plus','circle-question','circle-radiation','circle-right','circle-stop','circle-up','circle-user','circle-xmark','circle','city','clapperboard','clipboard-check','clipboard-list','clipboard','clock-rotate-left','clock','clone','closed-captioning','cloud-arrow-down','cloud-arrow-up','cloud-meatball','cloud-moon-rain','cloud-moon','cloud-rain','cloud-showers-heavy','cloud-sun-rain','cloud-sun','cloud','clover','code-branch','code-commit','code-compare','code-fork','code-merge','code-pull-request','code','coins','colon-sign','comment-dollar','comment-dots','comment-medical','comment-slash','comment-sms','comment','comments-dollar','comments','compact-disc','compass-drafting','compass','compress','computer-mouse','cookie-bite','cookie','copy','copyright','couch','credit-card','crop-simple','crop','cross','crosshairs','crow','crown','crutch','cruzeiro-sign','cube','cubes','database','delete-left','democrat','desktop','dharmachakra','diagram-project','diamond-turn-right','diamond','dice-d20','dice-d6','dice-five','dice-four','dice-one','dice-six','dice-three','dice-two','dice','disease','divide','dna','dog','dollar-sign','dolly','dong-sign','door-closed','door-open','dove','down-left-and-up-right-to-center','down-long','download','dragon','draw-polygon','droplet-slash','droplet','drum-steelpan','drum','drumstick-bite','dumbbell','dumpster-fire','dumpster','dungeon','ear-deaf','ear-listen','earth-africa','earth-americas','earth-asia','earth-europe','earth-oceania','egg','eject','elevator','ellipsis-vertical','ellipsis','envelope-open-text','envelope-open','envelope','envelopes-bulk','equals','eraser','ethernet','euro-sign','exclamation','expand','eye-dropper','eye-low-vision','eye-slash','eye','face-angry','face-dizzy','face-flushed','face-frown-open','face-frown','face-grimace','face-grin-beam-sweat','face-grin-beam','face-grin-hearts','face-grin-squint-tears','face-grin-squint','face-grin-stars','face-grin-tears','face-grin-tongue-squint','face-grin-tongue-wink','face-grin-tongue','face-grin-wide','face-grin-wink','face-grin','face-kiss-beam','face-kiss-wink-heart','face-kiss','face-laugh-beam','face-laugh-squint','face-laugh-wink','face-laugh','face-meh-blank','face-meh','face-rolling-eyes','face-sad-cry','face-sad-tear','face-smile-beam','face-smile-wink','face-smile','face-surprise','face-tired','fan','faucet','fax','feather-pointed','feather','file-arrow-down','file-arrow-up','file-audio','file-code','file-contract','file-csv','file-excel','file-export','file-image','file-import','file-invoice-dollar','file-invoice','file-lines','file-medical','file-pdf','file-powerpoint','file-prescription','file-signature','file-video','file-waveform','file-word','file-zipper','file','fill-drip','fill','film','filter-circle-dollar','filter-circle-xmark','filter','fingerprint','fire-extinguisher','fire-flame-curved','fire-flame-simple','fire','fish','flag-checkered','flag-usa','flag','flask','floppy-disk','florin-sign','folder-minus','folder-open','folder-plus','folder-tree','folder','font-awesome','font','football','forward-fast','forward-step','forward','franc-sign','frog','futbol','gamepad','gas-pump','gauge-simple','gauge','gavel','gear','gears','gem','genderless','ghost','gift','gifts','glasses','globe','golf-ball-tee','gopuram','graduation-cap','greater-than-equal','greater-than','grip-lines-vertical','grip-lines','grip-vertical','grip','guarani-sign','guitar','gun','hammer','hamsa','hand-back-fist','hand-dots','hand-fist','hand-holding-dollar','hand-holding-droplet','hand-holding-heart','hand-holding-medical','hand-holding','hand-lizard','hand-middle-finger','hand-peace','hand-point-down','hand-point-left','hand-point-right','hand-point-up','hand-pointer','hand-scissors','hand-sparkles','hand-spock','hand','hands-asl-interpreting','hands-bubbles','hands-clapping','hands-holding','hands-praying','hands','handshake-angle','handshake-simple-slash','handshake-slash','handshake','hanukiah','hard-drive','hashtag','hat-cowboy-side','hat-cowboy','hat-wizard','head-side-cough-slash','head-side-cough','head-side-mask','head-side-virus','heading','headphones-simple','headphones','headset','heart-crack','heart-pulse','heart','helicopter','helmet-safety','highlighter','hippo','hockey-puck','holly-berry','horse-head','horse','hospital-user','hospital','hot-tub-person','hotdog','hotel','hourglass-empty','hourglass-end','hourglass-start','hourglass','house-chimney-crack','house-chimney-medical','house-chimney-user','house-chimney','house-crack','house-laptop','house-medical','house-user','house','hryvnia-sign','i-cursor','ice-cream','icicles','icons','id-badge','id-card-clip','id-card','igloo','image-portrait','image','images','inbox','indent','indian-rupee-sign','industry','infinity','info','italic','jedi','jet-fighter','joint','kaaba','key','keyboard','khanda','kip-sign','kit-medical','kiwi-bird','landmark','language','laptop-code','laptop-medical','laptop','lari-sign','layer-group','leaf','left-long','left-right','lemon','less-than-equal','less-than','life-ring','lightbulb','link-slash','link','lira-sign','list-check','list-ol','list-ul','list','litecoin-sign','location-arrow','location-crosshairs','location-dot','location-pin','lock-open','lock','lungs-virus','lungs','magnet','magnifying-glass-dollar','magnifying-glass-location','magnifying-glass-minus','magnifying-glass-plus','magnifying-glass','manat-sign','map-location-dot','map-location','map-pin','map','marker','mars-and-venus','mars-double','mars-stroke-right','mars-stroke-up','mars-stroke','mars','martini-glass-citrus','martini-glass-empty','martini-glass','mask-face','mask','masks-theater','maximize','medal','memory','menorah','mercury','message','meteor','microchip','microphone-lines-slash','microphone-lines','microphone-slash','microphone','microscope','mill-sign','minimize','minus','mitten','mobile-button','mobile-screen-button','money-bill-1-wave','money-bill-1','money-bill-wave','money-bill','money-check-dollar','money-check','monument','moon','mortar-pestle','mosque','motorcycle','mountain','mug-hot','mug-saucer','music','naira-sign','network-wired','neuter','newspaper','not-equal','note-sticky','notes-medical','object-group','object-ungroup','oil-can','om','otter','outdent','pager','paint-brush','paint-roller','palette','pallet','panorama','paper-plane','paperclip','parachute-box','paragraph','passport','paste','pause','paw','peace','pen-clip','pen-fancy','pen-nib','pen-ruler','pen-to-square','pen','pencil','people-arrows-left-right','people-carry-box','pepper-hot','percent','person-biking','person-booth','person-dots-from-line','person-dress','person-hiking','person-praying','person-running','person-skating','person-skiing-nordic','person-skiing','person-snowboarding','person-swimming','person-walking-with-cane','person-walking','person','peseta-sign','peso-sign','phone-flip','phone-slash','phone-volume','phone','photo-film','piggy-bank','pills','pizza-slice','place-of-worship','plane-arrival','plane-departure','plane-slash','plane','play','plug','plus-minus','plus','podcast','poo-storm','poo','poop','power-off','prescription-bottle-medical','prescription-bottle','prescription','print','pump-medical','pump-soap','puzzle-piece','qrcode','question','quote-left','quote-right','radiation','rainbow','receipt','record-vinyl','rectangle-ad','rectangle-list','rectangle-xmark','recycle','registered','repeat','reply-all','reply','republican','restroom','retweet','ribbon','right-from-bracket','right-left','right-long','right-to-bracket','ring','road','robot','rocket','rotate-left','rotate-right','rotate','route','rss','ruble-sign','ruler-combined','ruler-horizontal','ruler-vertical','ruler','rupee-sign','rupiah-sign','sailboat','satellite-dish','satellite','scale-balanced','scale-unbalanced-flip','scale-unbalanced','school','scissors','screwdriver-wrench','screwdriver','scroll-torah','scroll','sd-card','section','seedling','server','shapes','share-from-square','share-nodes','share','shekel-sign','shield-blank','shield-virus','shield','ship','shirt','shoe-prints','shop-slash','shop','shower','shrimp','shuffle','shuttle-space','sign-hanging','signal','signature','signs-post','sim-card','sink','sitemap','skull-crossbones','skull','slash','sleigh','sliders','smog','smoking','snowflake','snowman','snowplow','soap','socks','solar-panel','sort-down','sort-up','sort','spa','spaghetti-monster-flying','spell-check','spider','spinner','splotch','spoon','spray-can-sparkles','spray-can','square-arrow-up-right','square-caret-down','square-caret-left','square-caret-right','square-caret-up','square-check','square-envelope','square-full','square-h','square-minus','square-parking','square-pen','square-phone-flip','square-phone','square-plus','square-poll-horizontal','square-poll-vertical','square-root-variable','square-rss','square-share-nodes','square-up-right','square-xmark','square','stairs','stamp','star-and-crescent','star-half-stroke','star-half','star-of-david','star-of-life','star','sterling-sign','stethoscope','stop','stopwatch-20','stopwatch','store-slash','store','street-view','strikethrough','stroopwafel','subscript','suitcase-medical','suitcase-rolling','suitcase','sun','superscript','swatchbook','synagogue','syringe','table-cells-large','table-cells','table-columns','table-list','table-tennis-paddle-ball','table','tablet-button','tablet-screen-button','tablets','tachograph-digital','tag','tags','tape','taxi','teeth-open','teeth','temperature-empty','temperature-full','temperature-half','temperature-high','temperature-low','temperature-quarter','temperature-three-quarters','tenge-sign','terminal','text-height','text-slash','text-width','thermometer','thumbs-down','thumbs-up','thumbtack','ticket-simple','ticket','timeline','toggle-off','toggle-on','toilet-paper-slash','toilet-paper','toilet','toolbox','tooth','torii-gate','tower-broadcast','tractor','trademark','traffic-light','trailer','train-subway','train-tram','train','transgender','trash-arrow-up','trash-can-arrow-up','trash-can','trash','tree','triangle-exclamation','trophy','truck-fast','truck-medical','truck-monster','truck-moving','truck-pickup','truck-ramp-box','truck','tty','turkish-lira-sign','turn-down','turn-up','tv','umbrella-beach','umbrella','underline','universal-access','unlock-keyhole','unlock','up-down-left-right','up-down','up-long','up-right-and-down-left-from-center','up-right-from-square','upload','user-astronaut','user-check','user-clock','user-doctor','user-gear','user-graduate','user-group','user-injured','user-large-slash','user-large','user-lock','user-minus','user-ninja','user-nurse','user-pen','user-plus','user-secret','user-shield','user-slash','user-tag','user-tie','user-xmark','user','users-gear','users-slash','users','utensils','van-shuttle','vault','vector-square','venus-double','venus-mars','venus','vest-patches','vest','vial','vials','video-slash','video','vihara','virus-slash','virus','viruses','voicemail','volleyball','volume-high','volume-low','volume-off','volume-xmark','vr-cardboard','wallet','wand-magic-sparkles','wand-magic','warehouse','water-ladder','water','wave-square','weight-hanging','weight-scale','wheelchair','whiskey-glass','wifi','wind','window-maximize','window-minimize','window-restore','wine-bottle','wine-glass-empty','wine-glass','won-sign','wrench','x-ray','xmark','yen-sign','yin-yang'];
	}
}