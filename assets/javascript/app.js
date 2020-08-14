var _app = function () {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.12;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "C / C++ Enthusiast", 
        "Rosery On Top B)", 
        "There's no Obfuscator or Protector", 
        "That offers any real Protection",
        "They just slow down the inevitable haha",
        "Nothing is uncrackable",
        "The Rosery Reverse Engineering Team"
    ];

    this.titleChanger = function (text, delay) {
        text = text ||
            ['Rosery', 'Urban Legend', 'The Moe Loli King', 'Rosery', 'Wanna be 1337'];
        delay = delay || 2000;

        var counter = 0;

        setInterval(function () {
            if(counter < text.length) 
                document.title = text[counter++]; 
            else 
                document.title = text[counter = 0];
        }, delay);
    }
};

var app = new _app();
