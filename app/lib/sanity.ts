import imageUrlBuilder from '@sanity/image-url/lib/types/builder'
import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: "uog1zts5",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}