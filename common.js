
$(document).ready(function(){
    var te = $(".timeline-example").timeline({
    	formatDate:{
    		status:true,
    		format:'yyyy/MM/dd'
    	},
    	data:[{
    		date:'23 march 1991',
    		event:'My Birthday'
    	},{
    		date:'27 january 1993',
    		event:'Monu Birthday'
    	},{
    		date:'22 november 1995',
    		event:'Chottu Birthday'
    	}]
    });
    
});