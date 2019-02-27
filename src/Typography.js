import styled from 'styled-components';
import Colors from './Colors'
import { media } from './MediaQueries'

const typographyColor = (props) => {
    return props.primary ? Colors.darkest : props.white && Colors.light
}

export const SIZES = {
	XXL: '56px',
	XL: '34px',
    L: '32px',
    ML: '24px',
	M: '21px',
	S: '18px',
	XS: '16px',
	XXS: '12px',
};

export const LINE_HEIGHTS = {
    XXXXL: '2.24',
    XXXL: '2.22',
    XXL: '1.81',
	XL: '1.62',
	L: '1.38',
	M: '1.5',
	S: 'normal',
	XS: '1.05',
    XXS: '0.9'
};

export const H1 = styled.h1`
	font-size: ${SIZES.XXL};
    line-height: ${LINE_HEIGHTS.S};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`
        ${props => (props.max45 || props.max70) && "max-width: 80%;"}
        font-size: 42px;
    `}
`;

export const H2 = styled.h2`
	font-size: ${SIZES.XL};
    line-height: ${LINE_HEIGHTS.L};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;

export const H3 = styled.h3`
	font-size: ${SIZES.L};
    line-height: ${LINE_HEIGHTS.S};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;

export const H4 = styled.h4`
	font-size: ${SIZES.M};
    line-height: ${LINE_HEIGHTS.XXXXL};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;

export const LargeP = styled.p`
	font-size: ${SIZES.M};
    line-height: ${LINE_HEIGHTS.XL};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;

export const P = styled.p`
	font-size: ${SIZES.XS};
    line-height: ${LINE_HEIGHTS.M};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;