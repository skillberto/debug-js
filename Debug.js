var Debug = {
    data : [],
    add : function(d) {
        this.data.push(d);
        
        return this;
    },
    set : function(d) {
        if (typeof d == 'array') {
            this.data = d;
        } else {
            this.clear().add(d);
        }
        
        return this;
    },
    clear : function() {
        this.data = [];
        
        return this;
    },
    get : function(i) {
        if (typeof i != 'undefined') {
            return this.data[i];
        }
        
        return this.data;
    },
    save: function(d) {
        (function(console){
            
            console.save = function(data, filename){

                if(!data) {
                    console.error('Console.save: No data')
                    return;
                }

                if(!filename) filename = 'console.json'

                if(typeof data === "object"){
                    data = JSON.stringify(data, undefined, 4)
                }

                var blob = new Blob([data], {type: 'text/json'}),
                    e    = document.createEvent('MouseEvents'),
                    a    = document.createElement('a')

                a.download = filename
                a.href = window.URL.createObjectURL(blob)
                a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
                e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
                a.dispatchEvent(e)
            }
        })(console);
        
        if (typeof d == 'undefined') {
            d = this.data;
        }
        
        console.save(d);
    }
};