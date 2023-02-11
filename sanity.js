import sanityClient from "@sanity/client"
import imageUrlBuilder  from "@sanity/image-url"

const Client = sanityClient({
    projectId: "8clgv5tc",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
})

const builder = imageUrlBuilder(Client)

export const urlFor = (source) => builder.image(source);

export default Client;