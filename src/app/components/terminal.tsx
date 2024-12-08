'use client';

import { css } from '@juxio/react-styled';

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-copy"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const terminalWindowStyles = css({
  width: '100%',
  maxWidth: '36rem',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
});

const terminalHeaderStyles = css({
  backgroundColor: '#f0f0f0',
  padding: '0.5rem 1rem',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

const windowControlsStyles = css({
  display: 'flex',
  gap: '0.5rem',
});

const controlStyles = css({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
});

const controlRedStyles = css({
  backgroundColor: '#ff5f56',
});

const controlYellowStyles = css({
  backgroundColor: '#ffbd2e',
});

const controlGreenStyles = css({
  backgroundColor: '#27c93f',
});

const windowTitleStyles = css({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '0.875rem',
  color: '#4a4a4a',
});

const terminalContentStyles = css({
  backgroundColor: '#f8f8f8',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const commandStyles = css({
  fontFamily: 'monospace',
  color: '#2563eb',
});

const copyButtonStyles = css({
  padding: '0.5rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  borderRadius: '0.375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#e5e5e5',
  },
  '& svg': {
    width: '16px',
    height: '16px',
    color: '#666',
  },
});

// Use the styles in your component
export const TerminalWindow = ({ command = 'npx jux login' }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div
      className={terminalWindowStyles}
      role="region"
      aria-label="Terminal window"
    >
      <header className={terminalHeaderStyles}>
        <div className={windowControlsStyles} role="presentation">
          <div
            className={`${controlStyles} ${controlRedStyles}`}
            role="presentation"
          ></div>
          <div
            className={`${controlStyles} ${controlYellowStyles}`}
            role="presentation"
          ></div>
          <div
            className={`${controlStyles} ${controlGreenStyles}`}
            role="presentation"
          ></div>
        </div>
        <div className={windowTitleStyles}>Terminal</div>
      </header>
      <article className={terminalContentStyles}>
        <code className={commandStyles}>{command}</code>
        <button
          onClick={handleCopy}
          className={copyButtonStyles}
          aria-label="Copy command"
        >
          <CopyIcon />
        </button>
      </article>
    </div>
  );
};

export default TerminalWindow;
