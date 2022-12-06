export default api => {
	api.Events = {
		login(userData) {
			return api.instance.request({
				method: 'post',
				url: `login`,
				data: userData,
				headers: {
					"X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
					"X-Device-OS": false
				}
			})
		},
		register(login = '+79523524317') {
			return api.instance.request({
				method: 'post',
				url: `register`,
				data: login,
				headers: {
					"X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
					"X-Device-OS": false
				}
			})
		},
		getUser(userId) {
			return api.instance.request({
				method: 'get',
				url: `user/${userId}`,
				headers: {
					"X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
					"X-User-Token": "26cadbe0-95fc-40a2-b2c8-8346942fac0f",
					"X-Device-OS": false,
				}
			})
		},
		setUser(userId, profileModel) {
			return api.instance.request({
				method: 'put',
				url: `user/${userId}`,
				data: profileModel,
				headers: {
					"X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
					"X-User-Token": "26cadbe0-95fc-40a2-b2c8-8346942fac0f",
					"X-Device-OS": false,
				}
			})
		},

	}
}