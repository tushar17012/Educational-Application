import "./Activityframe.css";

export function Activityframe(props) {
  const { title } = props;
  return (
    <>
      <div class="main">
        <div class="mainwrapper">
          <div class="progressBar"></div>
          <div class="mainframe">{props.children}</div>
        </div>
      </div>
    </>
  );
}
