import * as $api from './localStorage'
import {
	hashHistory
} from 'react-router'

export var ajax = (args) => {

	var promise = new Promise((resolve, reject) => {
		$.ajax({
			type: args.type || 'post',

			url: `http://testchangcheng.milianjie.com/index.php/admin/${args.ctrl}/${args.fn}`,

			dataType: args.dataType || 'json',

			data: Object.assign({}, args.data, {
				sid: $api.getStorage('sid') || ''
			}), //args.data || '',

			success: function(data, status, xhr){
				// console.log($api.getStorage('sid'));
				console.log(data);
				switch(parseInt(data.status)){
					case 200:
						resolve(data.content, status, xhr);
						break;
					case 404:
						setTimeout(function() {
							swal(data.msg);
						},5)
						if(typeof args.action_404 === 'function'){
							args.action_404();
						}
						break;
					case 403:
						setTimeout(function() {
							swal(data.msg);
						},5)
						hashHistory.replace('/')
					default:
						// alert(data.msg);
						break;
				}
			},

			error: function(xhr, errorType, error){
				// console.log(error);
				reject(error)
			}

		});
	});

	return promise;
}

