import { defineField, defineType } from "sanity";

export default defineType({
  type: 'document',
  name: 'banner',
  title: 'Banner',
  fields: [
    defineField({
      name: "title",
      title: "Banner",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Banner image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption'
        }
      }
    })
  ],
  preview: {
    select: {
      media: 'image',
      title: 'title'
    }
  }
})