interface PreviewProps {
  html: string | Promise<string>;
}

const Preview: React.FC<PreviewProps> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Preview;
