import styled, { css } from 'styled-components';
import Colors from './Colors';
import * as t from './Typography';
import { media } from './MediaQueries';

export const center = css`
  display: block;
  margin: 0 auto;
`;

export const textCenter = css`
  text-align: center;
`;

export const bold = css`
  font-weight: bold;
`;

export const contentMixin = css`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const wideContentMixin = css`
  max-width: 1256px;
  margin: 0 auto;
`;

export const fullWidth = css`
  width: 100%;
`;

export const aboveFoldMixin = css`
  padding: 110px 0 180px 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top -70px;
  text-align: center;
  ${t.LargeP} {
    padding: 0 30px;
  }
`;

export const block = css`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  & > div {
    flex: 1;
    padding: 0 25px;
  }
`;

export const wrapper = css`
  position: relative;
  margin: auto;
  max-width: 1680px;
  overflow: hidden;
  background-color: #fff;
  z-index: 0;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);
`;
