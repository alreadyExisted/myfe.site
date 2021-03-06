import styled, { css } from 'styled-components'
import { Github } from 'styled-icons/boxicons-logos/Github'
import { IdCard } from 'styled-icons/boxicons-regular/IdCard'

const commonCss = css`
  height: 1.5rem;
  margin-right: 0.2rem;
`

const Wrap = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;

    & p {
      margin-bottom: 1rem;
    }
  }
`

const P = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const GithubIcon = styled(Github)`
  ${commonCss}
`

const CVIcon = styled(IdCard)`
  ${commonCss}
`

export const styles = {
  Wrap,
  P,
  GithubIcon,
  CVIcon
}
