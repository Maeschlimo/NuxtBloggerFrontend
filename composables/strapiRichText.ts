import type StrapiImage from "./image";

export enum RichTextBlockType {
  paragraph = 'paragraph',
  list = 'list',
  heading = 'heading',
  image = 'image',
  quote = 'quote',
  code = 'code',
}

export enum RichTextBlockFormat {
  unordered = 'unordered',
  ordered = 'ordered',
}

export enum RichTextBlockChildType {
  text = 'text',
  list_item = 'list-item',
  link = 'link',
}

export interface RichTextBlocks {
  type: RichTextBlockType;
  children: RichTextBlockChild[];
  format?: RichTextBlockFormat
  level?: number
  image?: StrapiImage
}

export interface RichTextBlockChild {
  text: string
  url: string
  type: RichTextBlockChildType
  children: RichTextBlockChild[]
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}