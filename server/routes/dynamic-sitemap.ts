import { type SitemapUrl } from 'nuxt-simple-sitemap/dist/runtime/types'
type Post = {
    _path: string,
    modifiedAt: Date,
}
export default defineSitemapEventHandler(async () => {
	const posts: Post[] = await Promise.all([
		/* Below is an example of how to generate dynamic sitemap links
         {
             _path: '/blog/post-a',
             modifiedAt: new Date(),
         },
         {
             _path: '/blog/post-b',
             modifiedAt: new Date(),
         },
         {
             _path: '/blog/post-c',
             modifiedAt: new Date(),
         },
        */
	])

	return posts.map((p) => {
		return {
			loc: p._path,
			lastmod: p.modifiedAt,
			images: [],
			_i18nTransform: true,
		} as SitemapUrl
	})
})
