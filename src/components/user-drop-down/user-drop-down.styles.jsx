import styled from 'styled-components'

export const UserDropContainer = styled.div`
    position: absolute;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items:center;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: ${props => props.theme.sixth};
    top: 50px;
    right: 30px;

    h2 {
        color:${props => props.theme.third};
        margin-right: 15px;
    }
    z-index: 10;
    `

export const UserDiv = styled.div`
    width : 50px;
    height : 50px;
    border-radius : 25px;
    background-color: #dc9ae3;
    margin: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #e3e3e3; 
    }
`

export const ContactDiv = styled.div`
    height: 150px;
    border-radius: 30px;
    margin: 10px;
    padding: 15px;
    background-color: ${props => props.theme.fifth};
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: stretch;
    
    p{
        margin: 2px;
        color: ${props => props.theme.third};
    }
    b{
        color: ${props => props.theme.third};
    }

`

export const SignOutDiv = styled.div`
    height: 75px;
    display: flex;
    justify-content:center;
    align-items: center;
    p {
        margin: 8px
    }
    a {
        color: ${props => props.theme.third};
        text-decoration: none;
    }
`
export const XDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
        margin-right: 20px;
    }
`

export const EmailDiv = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

`
export const UserInfoDiv = styled.div`
    display: flex;
    align-items: center;
`