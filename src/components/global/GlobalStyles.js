import { createGlobalStyle } from 'styled-components';
import { setColor, setFont } from '../../styles/Styles';

const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Courgette|Lato:400,700');


*,
*::after,
*::before {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   -o-user-select: none;
   user-select: none;
}

*::-moz-focus-inner {
   border: 0;
}

*:focus {
   outline: none;  
}

body{
   color: ${setColor.mainBlack};
   background: ${setColor.mainWhite};
   ${setFont.main};
   font-size:100%;

}

h1{
   margin-bottom:0.5em;
   font-size:3em;
   line-height:1.2;
   
}

h2{
   margin-bottom:0.75em;
   font-size:2em;
}

h3{
   font-size:1.5em;
   line-height:1;
   margin-bottom:1em;
}

h4{
   margin-bottom:1.25em;
   font-size:1.2em;
   font-weight:bold;
   line-height:1.2;
}

h5{
   margin-bottom:1.5em;
   font-size:1em;
   font-weight:bold;
}

h6{
   font-size:1em;
   font-weight:bold;
}

p{
   line-height:1.5;
   margin:0 0 1.5 0;
}

`;
export default Globals;
