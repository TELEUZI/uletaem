import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }: any) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles.markdown}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
