
module.exports = () => {
  return async (ctx, next) => {
    await next();

    if (ctx.method === 'GET' && ctx.url.startsWith('/api/')) {
      console.log("test test")
      ctx.set('Cache-Control', 'max-age=86300');
    }
  };
};
