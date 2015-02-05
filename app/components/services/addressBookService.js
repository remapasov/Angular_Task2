var module = angular.module("myapp");
module.service('addressBookService', function() {
	var addressBook = [];
	this.setDatas = function(datas) {
		// console.log("Service log: " + datas.address);
		addressBook.push(datas); 
		// console.log(addressBook);
	}

	this.getDatas = function() {
		// console.log("service -> datas: " + this.datas);
		return addressBook;
	}
})
