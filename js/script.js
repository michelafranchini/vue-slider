var app = new Vue(
    {
        el: "#root", 
        data: {
            images: [
                "https://giochipertutti.org/wp-content/uploads/2020/05/Aggiornamento-CSGO-05042020-v1100-rilasciato-miglioramenti-e-correzioni.jpg", 
                "https://paladins.it/wp-content/uploads/2021/03/R6_Siege.jpeg", 
                "https://www.outplayed.it/wp-content/uploads/2020/10/Valorant-3.jpg", 
                "https://rhw.coop/sites/default/files/hearthstone_fxgu.jpg", 
                "https://xboxplay.games/uploadStream/7818.jpg", 
                "https://www.gameower.it/wp-content/uploads/2018/04/maxresdefault.jpg"
            ],
            indexImages: 0, 
            heartIndex: 0
        }, 
        methods:  {
            prevImage: function() {
                this.indexImages--; 
                if (this.indexImages < 0) {
                    this.indexImages = this.images.length - 1; 
                }
            }, 
            nextImage: function() {
                this.indexImages++;
                if (this.indexImages == this.images.length) {
                    this.indexImages = 0; 
                }
            }, 
            
        }
    }
)


// Bonus:
// 1) Gestire il cambio dell'immagine al click sui pallini in basso (nav);

// 2) Applicare l' autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.