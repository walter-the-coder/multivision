'use strict';
angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function (mvToastr) {
	return {
		notify: function(msg, type){
			if(type === 'success'){
				mvToastr.success(msg);
			}
			else{
				mvToastr.error(msg);
			}
			
			console.log(msg);
		}
	};
})