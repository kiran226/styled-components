import styled from 'styled-components';

export const StyledButton = styled.button`
      border : 2px solid #4caf50;
      background-color : ${(props)=> props.variant=== 'outline' ?  "#4caf50" : '#fff' } ;
      color: ${(props)=> props.variant==="outline" ? "#fff" :"#4caf50" };
      padding : 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size:16px;
      cursor: pointer;
      transition: 0.5s all ease-out;
      &:hover{
            background-color : ${(props)=> props.variant!== 'outline' ?  "#4caf50" : '#fff' } ;
            color : ${(props)=> props.variant!=="outline" ? "#fff" :"#4caf50" };
      }`

export const FancyButton = styled(StyledButton)`
      background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%  );
      border:none
`
