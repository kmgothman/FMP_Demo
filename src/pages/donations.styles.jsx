import styled from 'styled-components'

export const MainContainer = styled.div`
    font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    grid-column-start: 2;
    grid-column-end:3;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.main};
`




export const DonationsContainer = styled.div`
    background-color: ${props => props.theme.fifth};
    border-radius : 20px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`

export const DonationsControlsContainer = styled.div`
    display: flex;
    height: 68px;
    justify-content: space-between;
    align-items: center;
    font-Weight: bold; 
    p {
        color: ${props => props.theme.third}
    }
    
`

export const TableContainer = styled.div`
    background-color: ${props => props.theme.sixth};
    height: 476px;
    overflow-y: scroll;
    color: ${props => props.theme.third};
    
    table {
        padding-top: 5px;
       width: 100%;
       border: 1px solid;
       border-color: ${props => props.theme.seventh};
        border-collapse: collapse;

    }
    tr {
        height : 30px;
        border: 1px solid
        border-style: solid
        border-color: black;
        &:hover {
            background-color: ${props => props.theme.fourth};
        }
    }
    td {
        border: 1px solid;
        border-color: ${props => props.theme.seventh};
        text-align: left;
        padding-left: 20px
    }
    a {
        text-decoration: none;
        color: #0B57D0;
    }
    img {
        margin-top: 200px
    }
    
`

export const ControlDiv = styled.div`
    display: flex;
    align-items: center;
    color: #0B57D0;
    margin: 15px;
    &:hover {
        color: ${props => props.theme.fourth};
        cursor: pointer;
      }
`


