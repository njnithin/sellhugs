<template>
	<!-- Site Loader -->
            <div class="site-loader" v-if="loaderFlag">
                <svg height="38" viewbox="0 0 38 38" width="38" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <lineargradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
                            <stop offset="0%" stop-color="#fff" stop-opacity="0">
                            </stop>
                            <stop offset="63.146%" stop-color="#fff" stop-opacity=".631">
                            </stop>
                            <stop offset="100%" stop-color="#fff">
                            </stop>
                        </lineargradient>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)">
                            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                                <animatetransform attributename="transform" dur="0.9s" from="0 18 18" repeatcount="indefinite" to="360 18 18" type="rotate">
                                </animatetransform>
                            </path>
                            <circle cx="36" cy="18" fill="#fff" r="1">
                                <animatetransform attributename="transform" dur="0.9s" from="0 18 18" repeatcount="indefinite" to="360 18 18" type="rotate">
                                </animatetransform>
                            </circle>
                        </g>
                    </g>
                </svg>
            </div>
    <!-- End of Site Loader -->
</template>
<script>
	export default {
		props:{
			loaderFlag: Boolean
		}
	}

</script>