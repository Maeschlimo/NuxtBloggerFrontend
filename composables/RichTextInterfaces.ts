export interface TextBlock {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
  }
  
  export interface ParagraphBlock {
    type: 'paragraph';
    content: TextBlock[];
  }
  
  // Define interfaces for other block types such as heading, list, quote, etc.
  // For example:
  
  export interface HeadingBlock {
    type: 'heading';
    level: number;
    content: string;
  }
  
  export interface ListItem {
    content: TextBlock[];
  }
  
  export interface ListBlock {
    type: 'list';
    ordered: boolean;
    items: ListItem[];
  }
  
  export interface QuoteBlock {
    type: 'quote';
    content: string;
  }
  
  // A union type for all content block types
  export type ContentBlock = ParagraphBlock | HeadingBlock | ListBlock | QuoteBlock;
  
  // Optionally, you can define an interface for the overall structure
  export interface RichTextContent {
    blocks: ContentBlock[];
  }
  