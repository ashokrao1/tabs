Reusable Tab control

DEMO links below: 
http://jsbin.com/hefeyulili
http://jsbin.com/hefeyulili/4/edit?html,css,js,output


1. JS Module pattern used
2. contructor takes DOM Id where tabs to be plcaed and the content (title and content)
3. Todo
	public methods: addTab, removeTab
	event handlers: onOpen, onClose


Usage:

1. include tabs.js and tabs.css
2. instantiate tabs as below 

var tabs = new Tabs({
domId : "test",
data: [{title: "hotels in newyork", content:hotelList },{title: "hotels in UK", content:hotelList },{title: "hotels iangalore", content:hotelList }]
});


var tabs1 = new Tabs({
domId : "test1",
data: [{title: "hotels in newyork", content:hotelList },{title: "hotels in UK", content:hotelList },{title: "hotels iangalore", content:hotelList }]
});

var tabs = new Tabs({
domId : "test2",
data: [{title: "hotels in newyork", content:hotelList },{title: "hotels in UK", content:hotelList },{title: "hotels iangalore", content:hotelList }]
});

var hotelList = `<ul class="hotel-list">
            <li> 
                <span class='left'>The May Fair</span>
                <span class='right'>From <strike>£232</strike> <span class='price'>£192<span> 4<span class='star'>&#9733;<span> </span>
            </li><li > 
                <span class='left'>Grand Plaza Serviced Apartments</span>
                <span class='right'>From <span class='price'>£78</span> 3<span class='star'>&#9733;<span> </span>
            </li><li > 
                <span class='left'>Lancaster Gate Hotel</span>
                <span class='right'>From <strike>£68</strike> <span class='price'>£64</span> 5<span class='star'>&#9733;<span> </span>
            </li><li > 
                <span class='left'>Radisson Edwardian Grafton Hotel</span>
                <span class='right'>From <span class='price'>£102</span> 2<span class='star'>&#9733;<span> </span>
            </li><li > 
                <span class='left'>The Rembrandt</span>
                <span class='right'>From <strike> £150</strike> <span class='price'>£122</span> 3<span class='star'>&#9733;<span> </span>
            </li>
        </ul>`;

