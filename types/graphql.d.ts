import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/aboutMe) */
export type AboutMe = Entry & {
  __typename?: 'AboutMe';
  aboutMe?: Maybe<AboutMeAboutMe>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AboutMeLinkingCollections>;
  profileImage?: Maybe<Asset>;
  sys: Sys;
  techStackCollection?: Maybe<AssetCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/aboutMe) */
export type AboutMeAboutMeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/aboutMe) */
export type AboutMeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/aboutMe) */
export type AboutMeProfileImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/aboutMe) */
export type AboutMeTechStackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AboutMeAboutMe = {
  __typename?: 'AboutMeAboutMe';
  json: Scalars['JSON'];
  links: AboutMeAboutMeLinks;
};

export type AboutMeAboutMeAssets = {
  __typename?: 'AboutMeAboutMeAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AboutMeAboutMeEntries = {
  __typename?: 'AboutMeAboutMeEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AboutMeAboutMeLinks = {
  __typename?: 'AboutMeAboutMeLinks';
  assets: AboutMeAboutMeAssets;
  entries: AboutMeAboutMeEntries;
};

export type AboutMeCollection = {
  __typename?: 'AboutMeCollection';
  items: Array<Maybe<AboutMe>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AboutMeFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutMeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutMeFilter>>>;
  aboutMe_contains?: InputMaybe<Scalars['String']>;
  aboutMe_exists?: InputMaybe<Scalars['Boolean']>;
  aboutMe_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  profileImage_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  techStackCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type AboutMeLinkingCollections = {
  __typename?: 'AboutMeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AboutMeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AboutMeOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  aboutMeCollection?: Maybe<AboutMeCollection>;
  bannerCollection?: Maybe<BannerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  sampleProductsCollection?: Maybe<SampleProductsCollection>;
  socialMediaCollection?: Maybe<SocialMediaCollection>;
};


export type AssetLinkingCollectionsAboutMeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSampleProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/banner) */
export type Banner = Entry & {
  __typename?: 'Banner';
  bannerTitle?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  featuredBanner?: Maybe<Asset>;
  linkedFrom?: Maybe<BannerLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/banner) */
export type BannerBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/banner) */
export type BannerFeaturedBannerArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/banner) */
export type BannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BannerCollection = {
  __typename?: 'BannerCollection';
  items: Array<Maybe<Banner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<BannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BannerFilter>>>;
  bannerTitle?: InputMaybe<Scalars['String']>;
  bannerTitle_contains?: InputMaybe<Scalars['String']>;
  bannerTitle_exists?: InputMaybe<Scalars['Boolean']>;
  bannerTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bannerTitle_not?: InputMaybe<Scalars['String']>;
  bannerTitle_not_contains?: InputMaybe<Scalars['String']>;
  bannerTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredBanner_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type BannerLinkingCollections = {
  __typename?: 'BannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BannerOrder {
  BannerTitleAsc = 'bannerTitle_ASC',
  BannerTitleDesc = 'bannerTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/footerLinks) */
export type FooterLinks = Entry & {
  __typename?: 'FooterLinks';
  contentfulMetadata: ContentfulMetadata;
  footerLinksCollection?: Maybe<FooterLinksFooterLinksCollection>;
  linkedFrom?: Maybe<FooterLinksLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/footerLinks) */
export type FooterLinksFooterLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/footerLinks) */
export type FooterLinksLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterLinksCollection = {
  __typename?: 'FooterLinksCollection';
  items: Array<Maybe<FooterLinks>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterLinksFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterLinksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterLinksFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footerLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterLinksFooterLinksCollection = {
  __typename?: 'FooterLinksFooterLinksCollection';
  items: Array<Maybe<SocialMedia>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterLinksLinkingCollections = {
  __typename?: 'FooterLinksLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterLinksLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterLinksOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

export type Query = {
  __typename?: 'Query';
  aboutMe?: Maybe<AboutMe>;
  aboutMeCollection?: Maybe<AboutMeCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  banner?: Maybe<Banner>;
  bannerCollection?: Maybe<BannerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerLinks?: Maybe<FooterLinks>;
  footerLinksCollection?: Maybe<FooterLinksCollection>;
  sampleProducts?: Maybe<SampleProducts>;
  sampleProductsCollection?: Maybe<SampleProductsCollection>;
  socialMedia?: Maybe<SocialMedia>;
  socialMediaCollection?: Maybe<SocialMediaCollection>;
};


export type QueryAboutMeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAboutMeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AboutMeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AboutMeFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BannerFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterLinksArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterLinksOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterLinksFilter>;
};


export type QuerySampleProductsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySampleProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SampleProductsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SampleProductsFilter>;
};


export type QuerySocialMediaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialMediaFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProducts = Entry & {
  __typename?: 'SampleProducts';
  amount?: Maybe<Scalars['Float']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<SampleProductsDetails>;
  featuredImage?: Maybe<Asset>;
  linkedFrom?: Maybe<SampleProductsLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProductsAmountArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProductsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProductsDetailsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProductsFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProductsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProductsSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProductsThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/sampleProducts) */
export type SampleProductsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SampleProductsCollection = {
  __typename?: 'SampleProductsCollection';
  items: Array<Maybe<SampleProducts>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SampleProductsDetails = {
  __typename?: 'SampleProductsDetails';
  json: Scalars['JSON'];
  links: SampleProductsDetailsLinks;
};

export type SampleProductsDetailsAssets = {
  __typename?: 'SampleProductsDetailsAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SampleProductsDetailsEntries = {
  __typename?: 'SampleProductsDetailsEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SampleProductsDetailsLinks = {
  __typename?: 'SampleProductsDetailsLinks';
  assets: SampleProductsDetailsAssets;
  entries: SampleProductsDetailsEntries;
};

export type SampleProductsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SampleProductsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SampleProductsFilter>>>;
  amount?: InputMaybe<Scalars['Float']>;
  amount_exists?: InputMaybe<Scalars['Boolean']>;
  amount_gt?: InputMaybe<Scalars['Float']>;
  amount_gte?: InputMaybe<Scalars['Float']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  amount_lt?: InputMaybe<Scalars['Float']>;
  amount_lte?: InputMaybe<Scalars['Float']>;
  amount_not?: InputMaybe<Scalars['Float']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  details_contains?: InputMaybe<Scalars['String']>;
  details_exists?: InputMaybe<Scalars['Boolean']>;
  details_not_contains?: InputMaybe<Scalars['String']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SampleProductsLinkingCollections = {
  __typename?: 'SampleProductsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SampleProductsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SampleProductsOrder {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/socialMedia) */
export type SocialMedia = Entry & {
  __typename?: 'SocialMedia';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SocialMediaLinkingCollections>;
  socialMediaAlt?: Maybe<Scalars['String']>;
  socialMediaImage?: Maybe<Asset>;
  socialMediaUrl?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/socialMedia) */
export type SocialMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/socialMedia) */
export type SocialMediaSocialMediaAltArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/socialMedia) */
export type SocialMediaSocialMediaImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ldcdkc14ex30/content_types/socialMedia) */
export type SocialMediaSocialMediaUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SocialMediaCollection = {
  __typename?: 'SocialMediaCollection';
  items: Array<Maybe<SocialMedia>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SocialMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialMediaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  socialMediaAlt?: InputMaybe<Scalars['String']>;
  socialMediaAlt_contains?: InputMaybe<Scalars['String']>;
  socialMediaAlt_exists?: InputMaybe<Scalars['Boolean']>;
  socialMediaAlt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialMediaAlt_not?: InputMaybe<Scalars['String']>;
  socialMediaAlt_not_contains?: InputMaybe<Scalars['String']>;
  socialMediaAlt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialMediaImage_exists?: InputMaybe<Scalars['Boolean']>;
  socialMediaUrl?: InputMaybe<Scalars['String']>;
  socialMediaUrl_contains?: InputMaybe<Scalars['String']>;
  socialMediaUrl_exists?: InputMaybe<Scalars['Boolean']>;
  socialMediaUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialMediaUrl_not?: InputMaybe<Scalars['String']>;
  socialMediaUrl_not_contains?: InputMaybe<Scalars['String']>;
  socialMediaUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SocialMediaLinkingCollections = {
  __typename?: 'SocialMediaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerLinksCollection?: Maybe<FooterLinksCollection>;
};


export type SocialMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SocialMediaLinkingCollectionsFooterLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SocialMediaOrder {
  SocialMediaAltAsc = 'socialMediaAlt_ASC',
  SocialMediaAltDesc = 'socialMediaAlt_DESC',
  SocialMediaUrlAsc = 'socialMediaUrl_ASC',
  SocialMediaUrlDesc = 'socialMediaUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AboutMe: ResolverTypeWrapper<AboutMe>;
  AboutMeAboutMe: ResolverTypeWrapper<AboutMeAboutMe>;
  AboutMeAboutMeAssets: ResolverTypeWrapper<AboutMeAboutMeAssets>;
  AboutMeAboutMeEntries: ResolverTypeWrapper<AboutMeAboutMeEntries>;
  AboutMeAboutMeLinks: ResolverTypeWrapper<AboutMeAboutMeLinks>;
  AboutMeCollection: ResolverTypeWrapper<AboutMeCollection>;
  AboutMeFilter: AboutMeFilter;
  AboutMeLinkingCollections: ResolverTypeWrapper<AboutMeLinkingCollections>;
  AboutMeOrder: AboutMeOrder;
  Asset: ResolverTypeWrapper<Asset>;
  AssetCollection: ResolverTypeWrapper<AssetCollection>;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: ResolverTypeWrapper<AssetLinkingCollections>;
  AssetOrder: AssetOrder;
  Banner: ResolverTypeWrapper<Banner>;
  BannerCollection: ResolverTypeWrapper<BannerCollection>;
  BannerFilter: BannerFilter;
  BannerLinkingCollections: ResolverTypeWrapper<BannerLinkingCollections>;
  BannerOrder: BannerOrder;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ResolverTypeWrapper<ContentfulTag>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Dimension: ResolverTypeWrapper<Scalars['Dimension']>;
  Entry: ResolversTypes['AboutMe'] | ResolversTypes['Banner'] | ResolversTypes['FooterLinks'] | ResolversTypes['SampleProducts'] | ResolversTypes['SocialMedia'];
  EntryCollection: ResolverTypeWrapper<EntryCollection>;
  EntryFilter: EntryFilter;
  EntryOrder: EntryOrder;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FooterLinks: ResolverTypeWrapper<FooterLinks>;
  FooterLinksCollection: ResolverTypeWrapper<FooterLinksCollection>;
  FooterLinksFilter: FooterLinksFilter;
  FooterLinksFooterLinksCollection: ResolverTypeWrapper<FooterLinksFooterLinksCollection>;
  FooterLinksLinkingCollections: ResolverTypeWrapper<FooterLinksLinkingCollections>;
  FooterLinksOrder: FooterLinksOrder;
  HexColor: ResolverTypeWrapper<Scalars['HexColor']>;
  ImageFormat: ImageFormat;
  ImageResizeFocus: ImageResizeFocus;
  ImageResizeStrategy: ImageResizeStrategy;
  ImageTransformOptions: ImageTransformOptions;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Quality: ResolverTypeWrapper<Scalars['Quality']>;
  Query: ResolverTypeWrapper<{}>;
  SampleProducts: ResolverTypeWrapper<SampleProducts>;
  SampleProductsCollection: ResolverTypeWrapper<SampleProductsCollection>;
  SampleProductsDetails: ResolverTypeWrapper<SampleProductsDetails>;
  SampleProductsDetailsAssets: ResolverTypeWrapper<SampleProductsDetailsAssets>;
  SampleProductsDetailsEntries: ResolverTypeWrapper<SampleProductsDetailsEntries>;
  SampleProductsDetailsLinks: ResolverTypeWrapper<SampleProductsDetailsLinks>;
  SampleProductsFilter: SampleProductsFilter;
  SampleProductsLinkingCollections: ResolverTypeWrapper<SampleProductsLinkingCollections>;
  SampleProductsOrder: SampleProductsOrder;
  SocialMedia: ResolverTypeWrapper<SocialMedia>;
  SocialMediaCollection: ResolverTypeWrapper<SocialMediaCollection>;
  SocialMediaFilter: SocialMediaFilter;
  SocialMediaLinkingCollections: ResolverTypeWrapper<SocialMediaLinkingCollections>;
  SocialMediaOrder: SocialMediaOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
  Sys: ResolverTypeWrapper<Sys>;
  SysFilter: SysFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AboutMe: AboutMe;
  AboutMeAboutMe: AboutMeAboutMe;
  AboutMeAboutMeAssets: AboutMeAboutMeAssets;
  AboutMeAboutMeEntries: AboutMeAboutMeEntries;
  AboutMeAboutMeLinks: AboutMeAboutMeLinks;
  AboutMeCollection: AboutMeCollection;
  AboutMeFilter: AboutMeFilter;
  AboutMeLinkingCollections: AboutMeLinkingCollections;
  Asset: Asset;
  AssetCollection: AssetCollection;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: AssetLinkingCollections;
  Banner: Banner;
  BannerCollection: BannerCollection;
  BannerFilter: BannerFilter;
  BannerLinkingCollections: BannerLinkingCollections;
  Boolean: Scalars['Boolean'];
  ContentfulMetadata: ContentfulMetadata;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ContentfulTag;
  DateTime: Scalars['DateTime'];
  Dimension: Scalars['Dimension'];
  Entry: ResolversParentTypes['AboutMe'] | ResolversParentTypes['Banner'] | ResolversParentTypes['FooterLinks'] | ResolversParentTypes['SampleProducts'] | ResolversParentTypes['SocialMedia'];
  EntryCollection: EntryCollection;
  EntryFilter: EntryFilter;
  Float: Scalars['Float'];
  FooterLinks: FooterLinks;
  FooterLinksCollection: FooterLinksCollection;
  FooterLinksFilter: FooterLinksFilter;
  FooterLinksFooterLinksCollection: FooterLinksFooterLinksCollection;
  FooterLinksLinkingCollections: FooterLinksLinkingCollections;
  HexColor: Scalars['HexColor'];
  ImageTransformOptions: ImageTransformOptions;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Quality: Scalars['Quality'];
  Query: {};
  SampleProducts: SampleProducts;
  SampleProductsCollection: SampleProductsCollection;
  SampleProductsDetails: SampleProductsDetails;
  SampleProductsDetailsAssets: SampleProductsDetailsAssets;
  SampleProductsDetailsEntries: SampleProductsDetailsEntries;
  SampleProductsDetailsLinks: SampleProductsDetailsLinks;
  SampleProductsFilter: SampleProductsFilter;
  SampleProductsLinkingCollections: SampleProductsLinkingCollections;
  SocialMedia: SocialMedia;
  SocialMediaCollection: SocialMediaCollection;
  SocialMediaFilter: SocialMediaFilter;
  SocialMediaLinkingCollections: SocialMediaLinkingCollections;
  String: Scalars['String'];
  Sys: Sys;
  SysFilter: SysFilter;
};

export type AboutMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AboutMe'] = ResolversParentTypes['AboutMe']> = {
  aboutMe?: Resolver<Maybe<ResolversTypes['AboutMeAboutMe']>, ParentType, ContextType, Partial<AboutMeAboutMeArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['AboutMeLinkingCollections']>, ParentType, ContextType, Partial<AboutMeLinkedFromArgs>>;
  profileImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<AboutMeProfileImageArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  techStackCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<AboutMeTechStackCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AboutMeAboutMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AboutMeAboutMe'] = ResolversParentTypes['AboutMeAboutMe']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['AboutMeAboutMeLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AboutMeAboutMeAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AboutMeAboutMeAssets'] = ResolversParentTypes['AboutMeAboutMeAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AboutMeAboutMeEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['AboutMeAboutMeEntries'] = ResolversParentTypes['AboutMeAboutMeEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AboutMeAboutMeLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['AboutMeAboutMeLinks'] = ResolversParentTypes['AboutMeAboutMeLinks']> = {
  assets?: Resolver<ResolversTypes['AboutMeAboutMeAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['AboutMeAboutMeEntries'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AboutMeCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AboutMeCollection'] = ResolversParentTypes['AboutMeCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['AboutMe']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AboutMeLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AboutMeLinkingCollections'] = ResolversParentTypes['AboutMeLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<AboutMeLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetContentTypeArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetDescriptionArgs>>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetFileNameArgs>>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetHeightArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['AssetLinkingCollections']>, ParentType, ContextType, Partial<AssetLinkedFromArgs>>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetSizeArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetTitleArgs>>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetUrlArgs>>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetWidthArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetCollection'] = ResolversParentTypes['AssetCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetLinkingCollections'] = ResolversParentTypes['AssetLinkingCollections']> = {
  aboutMeCollection?: Resolver<Maybe<ResolversTypes['AboutMeCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsAboutMeCollectionArgs, 'limit' | 'skip'>>;
  bannerCollection?: Resolver<Maybe<ResolversTypes['BannerCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsBannerCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  sampleProductsCollection?: Resolver<Maybe<ResolversTypes['SampleProductsCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsSampleProductsCollectionArgs, 'limit' | 'skip'>>;
  socialMediaCollection?: Resolver<Maybe<ResolversTypes['SocialMediaCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsSocialMediaCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BannerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Banner'] = ResolversParentTypes['Banner']> = {
  bannerTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BannerBannerTitleArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  featuredBanner?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<BannerFeaturedBannerArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['BannerLinkingCollections']>, ParentType, ContextType, Partial<BannerLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BannerCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BannerCollection'] = ResolversParentTypes['BannerCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Banner']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BannerLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BannerLinkingCollections'] = ResolversParentTypes['BannerLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<BannerLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulMetadata'] = ResolversParentTypes['ContentfulMetadata']> = {
  tags?: Resolver<Array<Maybe<ResolversTypes['ContentfulTag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulTag'] = ResolversParentTypes['ContentfulTag']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DimensionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Dimension'], any> {
  name: 'Dimension';
}

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  __resolveType: TypeResolveFn<'AboutMe' | 'Banner' | 'FooterLinks' | 'SampleProducts' | 'SocialMedia', ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
};

export type EntryCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCollection'] = ResolversParentTypes['EntryCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['FooterLinks'] = ResolversParentTypes['FooterLinks']> = {
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  footerLinksCollection?: Resolver<Maybe<ResolversTypes['FooterLinksFooterLinksCollection']>, ParentType, ContextType, RequireFields<FooterLinksFooterLinksCollectionArgs, 'limit' | 'skip'>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['FooterLinksLinkingCollections']>, ParentType, ContextType, Partial<FooterLinksLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterLinksCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FooterLinksCollection'] = ResolversParentTypes['FooterLinksCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['FooterLinks']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterLinksFooterLinksCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FooterLinksFooterLinksCollection'] = ResolversParentTypes['FooterLinksFooterLinksCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['SocialMedia']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterLinksLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FooterLinksLinkingCollections'] = ResolversParentTypes['FooterLinksLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<FooterLinksLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexColorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
  name: 'HexColor';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface QualityScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Quality'], any> {
  name: 'Quality';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  aboutMe?: Resolver<Maybe<ResolversTypes['AboutMe']>, ParentType, ContextType, RequireFields<QueryAboutMeArgs, 'id'>>;
  aboutMeCollection?: Resolver<Maybe<ResolversTypes['AboutMeCollection']>, ParentType, ContextType, RequireFields<QueryAboutMeCollectionArgs, 'limit' | 'skip'>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assetCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>>;
  banner?: Resolver<Maybe<ResolversTypes['Banner']>, ParentType, ContextType, RequireFields<QueryBannerArgs, 'id'>>;
  bannerCollection?: Resolver<Maybe<ResolversTypes['BannerCollection']>, ParentType, ContextType, RequireFields<QueryBannerCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>>;
  footerLinks?: Resolver<Maybe<ResolversTypes['FooterLinks']>, ParentType, ContextType, RequireFields<QueryFooterLinksArgs, 'id'>>;
  footerLinksCollection?: Resolver<Maybe<ResolversTypes['FooterLinksCollection']>, ParentType, ContextType, RequireFields<QueryFooterLinksCollectionArgs, 'limit' | 'skip'>>;
  sampleProducts?: Resolver<Maybe<ResolversTypes['SampleProducts']>, ParentType, ContextType, RequireFields<QuerySampleProductsArgs, 'id'>>;
  sampleProductsCollection?: Resolver<Maybe<ResolversTypes['SampleProductsCollection']>, ParentType, ContextType, RequireFields<QuerySampleProductsCollectionArgs, 'limit' | 'skip'>>;
  socialMedia?: Resolver<Maybe<ResolversTypes['SocialMedia']>, ParentType, ContextType, RequireFields<QuerySocialMediaArgs, 'id'>>;
  socialMediaCollection?: Resolver<Maybe<ResolversTypes['SocialMediaCollection']>, ParentType, ContextType, RequireFields<QuerySocialMediaCollectionArgs, 'limit' | 'skip'>>;
};

export type SampleProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SampleProducts'] = ResolversParentTypes['SampleProducts']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, Partial<SampleProductsAmountArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SampleProductsDescriptionArgs>>;
  details?: Resolver<Maybe<ResolversTypes['SampleProductsDetails']>, ParentType, ContextType, Partial<SampleProductsDetailsArgs>>;
  featuredImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SampleProductsFeaturedImageArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['SampleProductsLinkingCollections']>, ParentType, ContextType, Partial<SampleProductsLinkedFromArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SampleProductsSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SampleProductsThumbnailArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SampleProductsTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SampleProductsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SampleProductsCollection'] = ResolversParentTypes['SampleProductsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['SampleProducts']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SampleProductsDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SampleProductsDetails'] = ResolversParentTypes['SampleProductsDetails']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['SampleProductsDetailsLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SampleProductsDetailsAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SampleProductsDetailsAssets'] = ResolversParentTypes['SampleProductsDetailsAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SampleProductsDetailsEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SampleProductsDetailsEntries'] = ResolversParentTypes['SampleProductsDetailsEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SampleProductsDetailsLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['SampleProductsDetailsLinks'] = ResolversParentTypes['SampleProductsDetailsLinks']> = {
  assets?: Resolver<ResolversTypes['SampleProductsDetailsAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['SampleProductsDetailsEntries'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SampleProductsLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SampleProductsLinkingCollections'] = ResolversParentTypes['SampleProductsLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<SampleProductsLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialMediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialMedia'] = ResolversParentTypes['SocialMedia']> = {
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['SocialMediaLinkingCollections']>, ParentType, ContextType, Partial<SocialMediaLinkedFromArgs>>;
  socialMediaAlt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SocialMediaSocialMediaAltArgs>>;
  socialMediaImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SocialMediaSocialMediaImageArgs>>;
  socialMediaUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SocialMediaSocialMediaUrlArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialMediaCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialMediaCollection'] = ResolversParentTypes['SocialMediaCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['SocialMedia']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialMediaLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialMediaLinkingCollections'] = ResolversParentTypes['SocialMediaLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<SocialMediaLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  footerLinksCollection?: Resolver<Maybe<ResolversTypes['FooterLinksCollection']>, ParentType, ContextType, RequireFields<SocialMediaLinkingCollectionsFooterLinksCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SysResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sys'] = ResolversParentTypes['Sys']> = {
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstPublishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spaceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AboutMe?: AboutMeResolvers<ContextType>;
  AboutMeAboutMe?: AboutMeAboutMeResolvers<ContextType>;
  AboutMeAboutMeAssets?: AboutMeAboutMeAssetsResolvers<ContextType>;
  AboutMeAboutMeEntries?: AboutMeAboutMeEntriesResolvers<ContextType>;
  AboutMeAboutMeLinks?: AboutMeAboutMeLinksResolvers<ContextType>;
  AboutMeCollection?: AboutMeCollectionResolvers<ContextType>;
  AboutMeLinkingCollections?: AboutMeLinkingCollectionsResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetCollection?: AssetCollectionResolvers<ContextType>;
  AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
  Banner?: BannerResolvers<ContextType>;
  BannerCollection?: BannerCollectionResolvers<ContextType>;
  BannerLinkingCollections?: BannerLinkingCollectionsResolvers<ContextType>;
  ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>;
  ContentfulTag?: ContentfulTagResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Dimension?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryCollection?: EntryCollectionResolvers<ContextType>;
  FooterLinks?: FooterLinksResolvers<ContextType>;
  FooterLinksCollection?: FooterLinksCollectionResolvers<ContextType>;
  FooterLinksFooterLinksCollection?: FooterLinksFooterLinksCollectionResolvers<ContextType>;
  FooterLinksLinkingCollections?: FooterLinksLinkingCollectionsResolvers<ContextType>;
  HexColor?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Quality?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  SampleProducts?: SampleProductsResolvers<ContextType>;
  SampleProductsCollection?: SampleProductsCollectionResolvers<ContextType>;
  SampleProductsDetails?: SampleProductsDetailsResolvers<ContextType>;
  SampleProductsDetailsAssets?: SampleProductsDetailsAssetsResolvers<ContextType>;
  SampleProductsDetailsEntries?: SampleProductsDetailsEntriesResolvers<ContextType>;
  SampleProductsDetailsLinks?: SampleProductsDetailsLinksResolvers<ContextType>;
  SampleProductsLinkingCollections?: SampleProductsLinkingCollectionsResolvers<ContextType>;
  SocialMedia?: SocialMediaResolvers<ContextType>;
  SocialMediaCollection?: SocialMediaCollectionResolvers<ContextType>;
  SocialMediaLinkingCollections?: SocialMediaLinkingCollectionsResolvers<ContextType>;
  Sys?: SysResolvers<ContextType>;
};

