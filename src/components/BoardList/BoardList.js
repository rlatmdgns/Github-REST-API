import React, { useEffect, useState } from "react";
import axios from "axios";
import { BoardGroup, BoardItem, Boardcontent, CommentCount, Title } from "./styles";
import moment from "moment";
import { Link } from "react-router-dom";
const BoardList = () => {
  const config = {
    method: "get",
    url: "https://api.github.com/repos/angular/angular-cli/issues?sort=comments",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: "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",
    },
  };

  const [issues, setIssues] = useState([]);
  const getData = async () => {
    try {
      const response = await axios(config);
      setIssues(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <BoardGroup>
      {issues.map((issue, index) => {
        if (index === 4) {
          return (
            <BoardItem key={index}>
              <a href="https://thingsflow.com/ko/home">
                <img src="https://placehold.it/500x100?text=ad" />
              </a>
            </BoardItem>
          );
        }
        return (
          <BoardItem key={issue.id}>
            <Link to={`/${issue.id}`}>
              <Boardcontent>
                <div>
                  #{issue.number}
                  <Title>{issue.title}</Title>
                  <span>{issue.user.login}</span>
                  <span>{moment(issue.created_at).format("YYYY-MM-DD")}</span>
                </div>
                <CommentCount>코멘트 수 {issue.comments}</CommentCount>
              </Boardcontent>
            </Link>
          </BoardItem>
        );
      })}
    </BoardGroup>
  );
};

export default BoardList;
