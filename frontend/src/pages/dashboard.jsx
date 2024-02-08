import { removeHashAfterQuestionMark, extractUrlParams } from "../helpers/urls";

export default function Dashboard() {
  const urlWithoutHash = removeHashAfterQuestionMark(window.location.href);
  const params = extractUrlParams(urlWithoutHash);

  console.log(params);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
