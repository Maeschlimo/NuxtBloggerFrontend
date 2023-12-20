import { TextBlock } from '~/interfaces/RichTextInterfaces';

export default function useRenderStyledText() {
  const renderStyledText = (textBlock: TextBlock): string => {
    let html = textBlock.text;

    if (textBlock.bold) {
      html = `<strong>${html}</strong>`;
    }
    if (textBlock.italic) {
      html = `<em>${html}</em>`;
    }
    if (textBlock.underline) {
      html = `<u>${html}</u>`;
    }
    if (textBlock.strikethrough) {
      html = `<s>${html}</s>`;
    }
    if (textBlock.code) {
      html = `<code>${html}</code>`;
    }

    // Additional styles can be added here as needed.

    return html;
  };

  return { renderStyledText };
}
