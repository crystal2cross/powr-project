function PricingPlan(config) {
	this.name = config.name;
	this.price = config.price;
	this.features = config.features;
}

var plan1 = new PricingPlan({
	name: "Basic",
	price: "$12",
	features: ["3", "25", "10 mb"]
});

var plan2 = new PricingPlan({
	name: "Pro",
	price: "$24",
	features: ["10", "100", "100 mb"]
});

var plan3 = new PricingPlan({
	name: "Business",
	price: "$36",
	features: ["Unlimited", "Unlimited", "1 gb"]
});

var data = [plan1, plan2, plan3];

$(document).ready(function(){

	for( var i = 0; i < data.length; ++i ) {

		$(".plan-name:eq( " + i + " )").prepend(data[i].name);
		$(".plan-price:eq( " + i + " )").prepend(data[i].price);
	    $(".plan-features:eq( " + i + " ) > .feature-1").prepend("<b>" + data[i].features[0] + "</b> ");
	    $(".plan-features:eq( " + i + " ) > .feature-2").prepend("<b>" + data[i].features[1] + "</b> ");
	    $(".plan-features:eq( " + i + " ) > .feature-3").prepend("<b>" + data[i].features[2] + "</b> ");
	    
	}

});
