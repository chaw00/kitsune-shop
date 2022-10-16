export const PRODUCTS = `
  query {
    sampleProductsCollection {
      items {
        title
        amount
        slug
        description
        featuredImage {
          url
        }
      }
    }
  }
`;

export const PRODUCT = (slug) => `query {
  sampleProductsCollection(where: {
    slug: "${slug}"
  }){
    items{
     title
      featuredImage{
        url
      }
      slug
      amount
      description
    }
  }
}`;

export async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
