import styled from 'styled-components'

export const BoardGroup = styled.ul`
  padding: 0;
  margin:0;
  list-style: none;
`

export const BoardItem = styled.li`
  border-bottom : 1px solid #ddd;
  a{
    color: #333;
    text-decoration: none;
  }
`


export const Boardcontent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  span {
    display: inline-block;
    margin: 0 4px;
  }
`
export const CommentCount = styled.div`
margin-left:  auto;
`
export const Title = styled.p`
  font-weight: 600;
`
