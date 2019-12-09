
//counter
function counter() {
    if ($('.skill .count').size()) {
        $c = $('.skill .count');

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 5000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $t.data('counted', true);

                    $t.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function (now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        easing: 'easeInOutQuart'
                    });
					
					$('.sk01').easyPieChart({
                        barColor: '#d4c1a2',
						trackColor: '#eaedef',
						scaleColor: false,
						lineWidth: 10,
						size: 250,
						lineCap: 'round',
						animate: { duration: speed, enabled: true }
					});
                    
                    $('.sk02').easyPieChart({
                        barColor: '#b9b2a6',
                        trackColor: '#eaedef',
                        scaleColor: false,
                        lineWidth: 10,
                        size: 250,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
                    
                    $('.sk03').easyPieChart({
                        barColor: '#d4c1a2',
                        trackColor: '#eaedef',
                        scaleColor: false,
                        lineWidth: 10,
                        size: 250,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
                    
                    $('.sk04').easyPieChart({
                        barColor: '#b9b2a6',
                        trackColor: '#eaedef',
                        scaleColor: false,
                        lineWidth: 10,
                        size: 250,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
					
                }
            });
			
        }).triggerHandler('scroll');
    }
}



//imageProgress
function imagesProgress(){
    var $container = $('#progress'),
        $progressBar = $container.find('.progress-bar'),
        $progressText = $container.find('.progress-text'),
        imgLoad = imagesLoaded('body'),	
        imgTotal = imgLoad.images.length,	
        imgLoaded = 0,										
        current = 0,							
        progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on('progress', function(){
        imgLoaded++;
    });

    function updateProgress(){
        var target = ( imgLoaded / imgTotal) * 100;

        current += ( target - current) * 0.1;
        $progressBar.css({ width: current + '%' });
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            $container.addClass('progress-complete');
            $progressBar.add($progressText)
                .delay(1000)
                .animate({opacity: 0},function(){
                    $container.fadeOut();
                });
                $('body').addClass('active');
        }
        if(current > 99.9){
            current = 100;
        }
    }	
}