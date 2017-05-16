function getSearchResults(item) {
	var resultItems;
	$(".results").html("");

	$.ajax({
		type: 'GET',
		async: false,
		url: 'https://api.nutritionix.com/v1_1/search/'+item+'?fields=item_name' +
		'%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=91d21742&appKey=016757a1fa92455923691cf0fd341fc3',
		success: function(data) {
			resultItems = data.hits;
		}	
	});

	resultItems.map(function(i) {
		var item = i.fields
		console.log(item)
		$('.results').append(
			'<div class="itemBar">'+
				'<h2>' + item.item_name + '<h2>' +
				'<h3>Calories: ' + item.nf_calories + '<h3>' +
				'<h3>Serving Size: ' + item.nf_serving_size_qty + ' ' + item.nf_serving_size_unit +'<h3>' +
				'<h3>Total Fat: ' + item.nf_total_fat + '<h3>' +
			'</div>'
		 );
	});
}

function searchItem() {
	var formVal = document.getElementById('input').value;
	document.getElementById('searchForm').reset();
	getSearchResults(formVal);
}

$("#searchForm").submit(function(e) {
    e.preventDefault();
    searchItem();
});