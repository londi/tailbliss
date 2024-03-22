import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "2c8d8b94-5c46-4d05-8458-41056374a05a", // Get this from tina.io
  token: "35a34489c583624f076f65d5e099e0775c2ad361", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "authorimage",
            label: "Author Image",
            required: false,
          },
          {
            type: "image",
            name: "featured_image",
            label: "Cover",
            required: true,
          },
          {
            type: "string",
            name: "coverCredit",
            label: "Cover Alt Text",
            required: false,
          },
          {
            type: "string",
            name: "imgAuthor",
            label: "Author of image",
            required: false,
          },
          {
            type: "string",
            name: "imgAuthorUrl",
            label: "Link to image's author",
            required: false,
          },
          {
            type: "string",
            name: "imgSource",
            label: "Link to image's copyright (e.g. Unsplash copyright link)",
            required: false,
          },
          {
            type: "string",
            name: "imgSourceUrl",
            label: "Image ",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            list: true,
          },
          {
            type: "string",
            name: "keywords",
            label: "Keywords",
            required: true,
            list: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "boolean",
            name: "showFullContent",
            label: "showFullContent",
            required: true,
          },
          {
            type: "boolean",
            name: "hideComments",
            label: "hideComments",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "projects",
        label: "Projects",
        path: "content/projects",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "authorimage",
            label: "Author Image",
            required: false,
          },
          {
            type: "image",
            name: "featured_image",
            label: "Cover",
            required: true,
          },
          {
            type: "string",
            name: "coverCredit",
            label: "Cover Alt Text",
            required: false,
          },
          {
            type: "string",
            name: "imgAuthor",
            label: "Author of image",
            required: false,
          },
          {
            type: "string",
            name: "imgAuthorUrl",
            label: "Link to image's author",
            required: false,
          },
          {
            type: "string",
            name: "imgSource",
            label: "Link to image's copyright (e.g. Unsplash copyright link)",
            required: false,
          },
          {
            type: "string",
            name: "imgSourceUrl",
            label: "Image ",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            list: true,
          },
          {
            type: "string",
            name: "keywords",
            label: "Keywords",
            required: true,
            list: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "boolean",
            name: "showFullContent",
            label: "showFullContent",
            required: true,
          },
          {
            type: "boolean",
            name: "hideComments",
            label: "hideComments",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: false,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "image",
            name: "featured_image",
            label: "Cover",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
