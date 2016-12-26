const api = 'locations'

export default router => {
  router.prefix(`/${api}`)

  router.get('/', async (ctx, next) =>
    ctx.body = await Location.find()
  )

  router.post('/', async (ctx, next) =>
    ctx.body = await new Location(ctx.request.body).save());
  // Routes to /locations/id.
  router.get('/:id', async (ctx, next) =>
    ctx.body = await Location.findById(ctx.params.id));
  // PUT to a single location.
  router.put('/:id', async (ctx, next) =>
    ctx.body = await Location.findByIdAndUpdate(ctx.params.id, ctx.body));
  // DELETE to a single location.
  router.delete('/:id', async (ctx, next) =>
    ctx.body = await Location.findByIdAndRemove(ctx.params.id));

  return router
}
