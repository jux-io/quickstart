import * as React from 'react';
import { styled, css } from '@juxio/react-styled';
import { DemoImported1 } from './DemoImported1';

// ImportedButton Props
type ImportedButtonProps = React.ComponentPropsWithoutRef<'div'>;

const button_label_a76c1f79 = css({
  fontFamily: 'sans-serif',
  fontWeight: '500',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '20px',
  display: 'inline-block',
  color: '#FFFFFF',
});

const StyledImportedButton = styled<'div', ImportedButtonProps>('div', {
  root: {
    padding: 0,
    width: 'auto',
    height: 'auto',
    display: 'flex',
  },
  variants: [],
});

export const ImportedButton = React.forwardRef<
  HTMLDivElement,
  ImportedButtonProps
>(function ImportedButton({ children, ...otherProps }, ref) {
  return (
    <StyledImportedButton ref={ref} {...otherProps}>
      <DemoImported1
        hierarchy={'primary'}
        dynamicContent={
          <span className={button_label_a76c1f79}>{children}</span>
        }
      />
    </StyledImportedButton>
  );
});
