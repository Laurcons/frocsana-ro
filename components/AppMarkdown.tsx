import { PropsWithChildren } from 'react';

import Markdown from 'react-markdown';

import AppLink from './AppLink';

export default function AppMarkdown({ children }: { children: string }) {
  return (
    <>
      <Markdown
        components={{
          a: props => {
            const external = props.href?.startsWith('https');
            return (
              <AppLink
                {...props}
                href={props.href ?? ''}
                target={external ? '_blank' : undefined}
                external={external}
              ></AppLink>
            );
          },
        }}
      >
        {children}
      </Markdown>
    </>
  );
}
