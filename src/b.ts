const isDevelopment = process.env.NODE_ENV === 'development';

export function getEnvironmentName() {
	return isDevelopment ? 'development' : 'production';
}

export default {
	getEnvironmentName,
};
