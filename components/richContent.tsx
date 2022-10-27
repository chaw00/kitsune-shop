import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";
import { MARKS } from "@contentful/rich-text-types";
import styled from "styled-components";

const Heading1 = styled.h1`
  display: block;
  font-size: 26px;
  font-weight: 600;
`;

const Heading2 = styled.h2`
  display: block;
  font-size: 24px;
  font-weight: 600;
`;
const Heading3 = styled.h3`
  display: block;
  font-size: 22px;
  font-weight: 600;
`;
const Heading4 = styled.h4`
  display: block;
  font-size: 20px;
  font-weight: 600;
`;
const Heading5 = styled.h5`
  display: block;
  font-size: 18px;
  font-weight: 600;
`;
const Heading6 = styled.h6`
  display: block;
  font-size: 16px;
  font-weight: 600;
`;

const NormalText = styled.p`
  font-size: 16px;
  font-weight: normal;
`;
const UnorderedList = styled.ul`
  font-size: 16px;
  font-weight: normal;
`;
const OrderedList = styled.ol`
  font-size: 16px;
  font-weight: normal;
`;
const ListItem = styled.li`
  font-size: 16px;
  font-weight: normal;
`;
const BlockQuote = styled.blockquote`
  font-size: 16px;
  font-weight: normal;
`;
export const richContentOptions = (link) => {
  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (_node: ReactNode, children: ReactNode) => {
        return <Heading1>{children}</Heading1>;
      },
      [BLOCKS.HEADING_2]: (_node: ReactNode, children: ReactNode) => {
        return <Heading2>{children}</Heading2>;
      },
      [BLOCKS.HEADING_3]: (_node: ReactNode, children: ReactNode) => {
        return <Heading3>{children}</Heading3>;
      },
      [BLOCKS.HEADING_4]: (_node: ReactNode, children: ReactNode) => {
        return <Heading4>{children}</Heading4>;
      },
      [BLOCKS.HEADING_5]: (_node: ReactNode, children: ReactNode) => {
        return <Heading5>{children}</Heading5>;
      },
      [BLOCKS.HEADING_6]: (_node: ReactNode, children: ReactNode) => {
        return <Heading6>{children}</Heading6>;
      },
      [BLOCKS.PARAGRAPH]: (_node: ReactNode, children: ReactNode) => {
        return <NormalText>{children}</NormalText>;
      },
      [BLOCKS.UL_LIST]: (_node: ReactNode, children: ReactNode) => {
        return <UnorderedList>{children}</UnorderedList>;
      },
      [BLOCKS.OL_LIST]: (_node: ReactNode, children: ReactNode) => {
        return <OrderedList>{children}</OrderedList>;
      },
      [BLOCKS.LIST_ITEM]: (_node: ReactNode, children: ReactNode) => {
        return <ListItem>{children}</ListItem>;
      },
      [BLOCKS.QUOTE]: (_node: ReactNode, children: ReactNode) => {
        return <BlockQuote>{children}</BlockQuote>;
      },
      [BLOCKS.HR]: () => {
        return <hr />;
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => {
        return <b>{text}</b>;
      },
    },
  };
};
// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked entries e.g. videoEmbed)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)
