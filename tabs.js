(function(){
    //constructor
    this.Tabs = function(){

        //from param
        var data = [];
        if(arguments[0] && arguments[0].constructor === Object){
            this.params = arguments[0];
            data = this.params.data;
            this.domId = this.params.domId;
        }   

        this.$tabs = null;
        this.$list = [];
        this.data = data;
        console.log(this.data)
        this.suffix = Math.floor((Math.random() * 1000) + 1);
          init.call(this);
      /*
            [{
                label: "newyork",
                items: [{
                    link: "newyork edge",
                    rating: 3

                },{
                    link: "newyork edge",
                    rating: 3
                }]
            }, {}]
        */
    }
    //public
    Tabs.prototype.addTab = function(item){
        
    }

    Tabs.prototype.removeTab = function(index){

    }

    Tabs.prototype.setTabs = function(items){

    }

    //private 

    function init(){
        console.log(this.data)
        this.$tabs = document.createElement("div");
        this.$tabs.className = "container";
        setTabs.call(this);
    }

    function setTabs(){
        console.log(this.data);
        var _that = this, $temp = null, $html = "";
        this.$list = [];
        for(var i=0, len=this.data.length; i<len; i ++){
            $temp = null;
            $temp = _getItemTemplate();
            $temp = $temp.replace(new RegExp('{{ID}}', 'g'), _that.suffix + "-" + i);
            $temp = $temp.replace(new RegExp('{{TITLE}}', 'g'), this.data[i].title);
            $temp = $temp.replace(new RegExp('{{CONTENT}}', 'g'), this.data[i].content);
            this.$list.push($temp);
        }

        $html = this.$list.join("");
        this.$tabs.innerHTML = $html;
        //document.getElementById(this.domId).innerHTML = $html
        document.getElementById(this.domId).append(this.$tabs)

    }

    function _getItemTemplate(){
        var template = '<div class="tab">'
            + '<input id="{{ID}}" type="checkbox" name="tabs">'
            + '<label for="{{ID}}">{{TITLE}}</label>'
            + '<div class="tab-content">'
            + '{{CONTENT}}'
            + '</div>'
            + '</div>';

        return template;
    }

    //event listeners

})()
