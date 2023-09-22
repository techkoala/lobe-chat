'use client';

import { StyleProvider, extractStaticStyle } from 'antd-style';
import { useServerInsertedHTML } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { renderToString } from 'react-dom/server';

const StyleRegistry = ({ children }: PropsWithChildren) => {
  const cache = extractStaticStyle.cache;

  const content = <StyleProvider cache={cache}>{children}</StyleProvider>;

  useServerInsertedHTML(() => {
    console.log(content);
    const html = renderToString(content);
    console.log('----');
    console.log(html);

    const styles = extractStaticStyle(html).map((item) => item.style);
    return styles;
  });

  return content;
};

export default StyleRegistry;
