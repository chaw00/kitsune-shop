import { gql } from "@apollo/client";

export const PRODUCTS = gql`
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

export const PRODUCT = (slug) => gql`query {
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
export const BANNER = gql`
  query {
    bannerCollection {
      items {
        bannerTitle
        featuredBanner {
          url
        }
      }
    }
    # add your query
  }
`;

export const ABOUT = gql`
  query {
    aboutMeCollection {
      items {
        aboutMe {
          json
        }
        profileImage {
          url
        }
        techStackCollection {
          items {
            url
          }
        }
      }
    }
  }
`;

export const SOCIAL = gql`
  query {
    footerLinksCollection(limit: 1) {
      items {
        footerLinksCollection {
          items {
            socialMediaUrl
            socialMediaAlt
            socialMediaImage {
              url
            }
          }
        }
      }
    }
  }
`;
