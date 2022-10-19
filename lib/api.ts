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
  }
  limit: 1
  ){
    items{
     title
      featuredImage{
        url
      }
      slug
      amount
      details{
        json
        links {
                    assets {
                      block {
                        sys {
                          id
                        }
                        title
                        url
                        contentType
                        height
                        width
                      }
                      hyperlink {
                        sys {
                          id
                        }
                        title
                        url
                        contentType
                        height
                        width
                      }
                    }
                    entries {
                      inline {
                        sys {
                          id
                        }
            
                      }
                      hyperlink {
                        sys {
                          id
                        }
                      }
                      block {
                        sys {
                          id
                        }
              
                      }
                    }
                  }
      }
    }
  }
}`;
export const BANNER = `
query {
  bannerCollection{
    items{
      bannerTitle
      featuredBanner{
        url
      }
    }
  }
  # add your query
}`;

export const ABOUT = `
query {
  aboutMeCollection{
    items{
      aboutMe{
        json
      }
      profileImage{
        url
      }
      techStackCollection{
        items{
          url
        }
      }
        }
      }
    }
`;
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
