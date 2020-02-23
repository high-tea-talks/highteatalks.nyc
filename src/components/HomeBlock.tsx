import { ReactNode } from 'react';
import styled from 'styled-components';

interface HomeBlockProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  links?: ReactNode | any[];
  style?: any;
  id?: string;
}

export function HomeBlock({
  title,
  subtitle,
  children = null,
  links = [],
  ...props
}: HomeBlockProps) {
  return (
    <HomeBlockStyled {...props}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
      {Array.isArray(links)
        ? (links as any[]).map(({ href, name }, key) => (
            <a key={key} href={href}>
              {name} jobs
            </a>
          ))
        : links}
    </HomeBlockStyled>
  );
}

const HomeBlockStyled = styled.div`
  padding: 16rem 6rem;
  width: 50%;
  border-radius: 0.1875rem;
`;
