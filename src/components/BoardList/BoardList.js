import React, { useEffect, useState } from "react";
import axios from "axios";
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
  console.log(issues);
  const getData = async () => {
    try {
      const response = await axios(config);
      console.log(response);
      setIssues(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ul>
      {issues.map((issue) => {
        return (
          <li key={issue.id}>
            <div>
              #{issue.number}
              {issue.title}
              {issue.created_at}
              {issue.user.login}
              이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
              {issue.comments}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BoardList;
