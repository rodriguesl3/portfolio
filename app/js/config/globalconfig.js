var globalConfig = function (slickCarouselConfig, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
};

globalConfig.$inject = ['slickCarouselConfig', '$compileProvider'];