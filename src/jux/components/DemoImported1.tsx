import * as React from 'react';
import { styled, css } from '@juxio/react-styled';

// DemoImported1 Props
interface DemoImported1Props extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
  hierarchy?: 'primary';
  dynamicContent?: React.ReactNode;
}

const dynamic_content_cd437fad = css({
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  justifyContent: 'center',
  padding: '24px',
  width: 'auto',
});

const StyledDemoImported1 = styled<'button', DemoImported1Props>(
  'button',
  {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      height: '36px',
      fontFamily: 'sans-serif',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '20px',
      padding: '8px 16px',
      borderRadius: '4px',
      borderStyle: 'none',
      gap: '8px',
      cursor: 'pointer',
      outline: 'none',
      '&:active': {
        outline: 'none',
      },
    },
    variants: [
      {
        props: {
          hierarchy: 'primary',
          disabled: false,
        },
        style: {
          backgroundColor: '{color.fill_base.p2}',
          borderRadius: '2px',
          padding: '10px 10px 10px 10px',
          [`.${dynamic_content_cd437fad}`]: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            padding: '0px 0px 0px 0px',
          },
          '&:hover': {
            backgroundColor: '{color.fill_base.p4}',
          },
          '&:active': {
            backgroundColor: '{color.fill_base.p5}',
          },
        },
      },
      {
        props: {
          hierarchy: 'primary',
          disabled: true,
        },
        style: {
          backgroundColor: '{color.fill_base.p1}',
          cursor: 'default',
          borderRadius: '2px',
          [`.${dynamic_content_cd437fad}`]: {
            padding: '0px 0px 0px 0px',
            backgroundColor: 'transparent',
          },
        },
      },
    ],
  },
  {
    // Prevent non-valid HTML props from being passed to the DOM
    shouldForwardProp: (propName) =>
      !['hierarchy', 'dynamicContent'].includes(propName),
  }
);

export const DemoImported1 = React.forwardRef<
  HTMLButtonElement,
  DemoImported1Props
>(function DemoImported1(
  {
    disabled = false,
    hierarchy = 'primary',
    dynamicContent = undefined,
    ...otherProps
  },
  ref
) {
  return (
    <StyledDemoImported1
      disabled={disabled}
      hierarchy={hierarchy}
      ref={ref}
      {...otherProps}
    >
      {dynamicContent ? (
        <div className={dynamic_content_cd437fad}>{dynamicContent}</div>
      ) : null}
    </StyledDemoImported1>
  );
});
