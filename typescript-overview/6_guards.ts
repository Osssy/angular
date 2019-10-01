function strip(x: string | number) {
	if (typeOf x === 'number') {
		return x.toFixed(2)
	}
	return x.trim()
}

class MyResponce {
	header = 'response header'
	result = 'responce result'
}

class MyError { 
	header = 'error header'
	message = 'error message'
}

function handle(res: MyResponce | MyError) {
	if (res instanceOf MyResponce) {
		return {
			info: res.header + res.result
		}
	}	else {
		return {
			info: res.header + res.message
		}
	}
}

// ==============

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
	//....
}

setAlertType('success')
setAlertType('warning')

// setAlertType('default')