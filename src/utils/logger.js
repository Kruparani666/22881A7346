const logMiddleware = (event, data = {}) => {
  console.log(`[LOG] ${event}`, data);
  // You can also send this to a remote logging endpoint
};

export default logMiddleware;
