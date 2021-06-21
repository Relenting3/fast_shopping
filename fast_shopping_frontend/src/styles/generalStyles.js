import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { hexToRgba } from '../scripts/data';

/*------------------> Text <-------------------*/
export const TextXl = styled.p`
	color: ${props => props.first ? props.theme.fastShopping.first : props.second ? props.theme.fastShopping.second : props.white ? 'white' : props.theme.fastShopping.text};
	font-size: calc(1.75rem + 0.5vw);
`
export const TextLg = styled.p`
	color: ${props => props.first ? props.theme.fastShopping.first : props.second ? props.theme.fastShopping.second : props.white ? 'white' : props.theme.fastShopping.text};
	font-size: calc(1.5rem + 0.5vw);
`
export const TextMd = styled.p`
	color: ${props => props.first ? props.theme.fastShopping.first : props.second ? props.theme.fastShopping.second : props.white ? 'white' : props.theme.fastShopping.text};
	font-size: calc(1.5rem + 0.4vw);
`
export const TextSm = styled.p`
	color: ${props => props.first ? props.theme.fastShopping.first : props.second ? props.theme.fastShopping.second : props.white ? 'white' : props.theme.fastShopping.text};
	font-size: calc(1rem + 0.3vw);
`
export const TextXs = styled.p`
	color: ${props => props.first ? props.theme.fastShopping.first : props.second ? props.theme.fastShopping.second : props.white ? 'white' : props.theme.fastShopping.text};
	font-size: calc(0.7rem + 0.2vw);
`
export const Badge = styled.span`
	font-size: 1.25rem;
	padding: .18rem .5rem;
	border-radius: 50%;
	color: white;
	background-color: ${props => props.theme.fastShopping.first};
	${props => props.cart ? `
		margin-left: -15px;
		position: absolute;
		cursor: pointer
	`:''}
`
/*----------------------------------------------*/

/*---------------------> Layout <-------------- */
export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
  width: 100%;
`
export const ColumnCenterXY = styled.div`
	width: ${props => props.w ? props.w : '100'}%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const Row100 = styled.div`
	width: 100%;
	display: flex;
	margin: 0.5rem 0;
`
export const Column100 = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0.5rem 0;
`
export const RowCenterXY = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.5rem 0;
`
export const Surface = styled.div`
	display: flex;
	height: min-content;
	flex-direction: column;
	background-color: white;
	padding: 1.5rem;
	border-radius: 7px;
	box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
	${props => props.w ? `width: ${props.w};`:''}
	${props => props.wSm ? `
		@media(min-width: 576px){
			width: ${props.wSm};
		}
	`:''}
`
export const WrapperItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: ${props => props.w ? props.w : '100'}%;
`
export const FlexRelative = styled.div`
	width: ${props => props.widthXs ? props.widthXs : '100'}%;
	display: flex;
	background-color: ${props => props.bgFirst ? props.theme.patty.colors.first : 'transparent'};
	${props => props.br ? 'border-radius: 7px;':''}
	${props => props.shadow ? 'box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);':''}
	${props => (props.center || props.centerXs) ? `
		justify-content: center;
		align-items: center;
	`:''}
	flex-direction: ${props => (props.column || props.breakSm) ? 'column':'row'};
	@media(min-width: 576px){
		width: ${props => props.width ? props.width:'100'}%;
		${props => props.breakSm ? 'flex-direction: row;':''}
		${props => props.rowReverse ? 'flex-direction: row-reverse;':''}
		${props => props.centerXs ? `
			justify-content: flex-start;
			align-items: flex-start;
		`:''}
	}
`
/*----------------------------------------------*/

/*------------------> Buttons <-----------------*/
/**
 * Button used for text with or without icons. If an icon it's required at the beginning, add it into the startIcon prop. 
 * If an icon it's required at the end, add it into the endIcon.
 *
 * There are 6 types of buttons:
 *
 * 	1) Filled with primary color: call prop first to apply the style.
 *
 * 	2) Filled with secondary color: call prop second to apply the style.
 *
 * 	3) Outlined with primary color: call prop outlinedfirst to apply the style.
 *
 * 	4) Outlined with secondary color: call prop outlineSecond to apply the style.
 *
 * 	5) No background and no outline with first color: call prop nobgfirst to apply the style.
 *
 * 	6) No background and no outline with second color: call prop nobgsecond to apply the style.
 */
 export const ButtonGeneral = styled(Button)`
 font-family: "Roboto-Medium";
 height: min-content;
 background-color: ${props => props.first ? props.theme.fastShopping.first : props.second ? props.theme.fastShopping.second : 'transparent'};
 color: ${props => (props.first || props.second) ? 'white' : (props.outlinedfirst || props.nobgfirst) ? props.theme.fastShopping.first : (props.nobgsecond || props.outlinedsecond) ? props.theme.fastShopping.second : 'black'};
 border: 1px solid ${props => (props.first || props.second) ? 'transparent' : props.outlinedfirst ? props.theme.fastShopping.first : props.outlinedsecond ? props.theme.fastShopping.second : 'transparent'};
 outline: 0;
 svg{
	 fill: ${props => (props.first || props.second) ? 'white' : (props.nobgfirst || props.outlinedfirst) ? props.theme.fastShopping.first : (props.nobgsecond || props.outlinedsecond) ? props.theme.fastShopping.second : 'black'};
	 width: 1rem;
	 height: 1rem;
 }
 &:hover{
	 background-color: ${props => props.first ? props.theme.fastShopping.buttons.hoverFirst : props.second ? props.theme.fastShopping.buttons.hoverSecond : (props.nobgfirst || props.outlinedfirst) ?  props.theme.fastShopping.buttons.hoverOutFirst : (props.nobgsecond || props.outlinedsecond) ? props.theme.fastShopping.buttons.hoverOutSecond : props.theme.fastShopping.lightGray};
 }
 &:focus{
	 outline: 0;
 } 
 &:disabled{
	 background-color: ${props => props.first ? props.theme.fastShopping.first : props.second ? props.theme.fastShopping.second : 'transparent'};
	 color: ${props => (props.first || props.second) ? 'white' : (props.outlinedfirst || props.nobgfirst) ? props.theme.fastShopping.first : (props.nobgsecond || props.outlinedsecond) ? props.theme.fastShopping.second : 'black'};
	 border: 1px solid ${props => (props.first || props.second) ? 'transparent' : props.outlinedfirst ? props.theme.fastShopping.first : props.outlinedsecond ? props.theme.fastShopping.second : 'transparent'};
	 outline: 0;
	 opacity: 0.5;
	 svg{
		 fill: ${props => (props.first || props.second) ? 'white' : (props.nobgfirst || props.outlinedfirst) ? props.theme.fastShopping.first : (props.nobgsecond || props.outlinedsecond) ? props.theme.fastShopping.second : 'black'};
		 width: 1rem;
		 height: 1rem;
	 }
 }
`
/**
* Button used only to contain one icon
* Send prop filled if the button it's required with a background with the primary color and the icon filled with white
* If not, send nothing.
* There are 3 types of buttons:
*
* 	1) Background with primary color: call prop filled to apply the style.
*
* 	2) Background with red color and white svg: call prop danger to apply the style
*
* 	3) No background and icon with primary color. Default
*
*/
export const IconBtn = styled(IconButton)`
 background-color: ${props => props.filled ? props.theme.fastShopping.first : props.danger ? '#e20000' : 'transparent'};
 outline: 0;
 padding: 6px;
 svg{
	 fill: ${props => (props.filled || props.danger) ? 'white' : props.theme.fastShopping.first};
	 width: ${props => props.bg ? '3rem': '1.5rem'};
	 height: ${props => props.bg ? '3rem': '1.5rem'};
 }
 &:hover{
	 background-color: ${props => props.filled ? props.theme.fastShopping.buttons.hoverFirst : props.danger ? `${hexToRgba('#e20000','0.5')}` : props.theme.fastShopping.buttons.hoverOutFirst};
 }
 &:focus{
	 outline: 0;
 }
 &:disabled{
	 background-color: ${props => props.theme.fastShopping.strongGray}
 }
`
/*----------------------------------------------*/
