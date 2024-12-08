import Image from 'next/image';
import styles from './page.module.css';

import { css, styled } from '@juxio/react-styled';
import { TerminalWindow } from './components/terminal';
import { ImportedButton as ImportedJuxButton } from '@/jux/components/ImportedButton';

const titleStyles = css({
  color: '#058FF2',
  cursor: 'pointer',
  '&:hover': {
    color: '#0A4BCD',
  },
});

const List = styled('ul', {
  root: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'inside',
    '& li': {
      color: '#616161',
    },
  },
});

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Jux.io logo"
          width={180}
          height={38}
          priority
        />
        <p>
          <span className={titleStyles}>
            Hello from Jux! See code in <code>src/app/page.tsx</code>
            {` `}
          </span>
          <span
            className={css({
              color: '#474747',
            })}
          >
            to change the styles...
          </span>
        </p>
        <List>
          <li>
            Write CSS in JS, with zero runtime - all styles are extracted and
            calculated at build time
          </li>
          <li>
            Full support for design tokens and themes, using
            @juxio/design-tokens
          </li>
          <li>
            Utility first - write utilities which can then be used to style your
            components
          </li>
          <li>
            CLI for easy management of your design tokens, themes, utilities and
            styles
          </li>
          <li>
            Type-safe - autocompletion for your design tokens, breakpoints, and
            utilities
          </li>
          <li>Full interpolation support when generating styles</li>
        </List>
        <p>Not registered with Jux yet?</p>
        <a
          className={css({
            display: 'inline-block',
            width: 'fit-content',
            fontFamily: 'sans-serif',
          })}
          href="https://app.jux.io/"
        >
          <ImportedJuxButton>Sign up</ImportedJuxButton>
        </a>
        <TerminalWindow />
        <TerminalWindow command="npx jux pull components" />
      </main>
    </div>
  );
}
