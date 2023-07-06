import Static_part from "./Static_part";

function Course(props) {
    const courseAction = (event) => {
      let courseNum = event.target.getAttribute("number");
      console.log(courseNum);
    };
    return (
      <div className="course" onClick={courseAction} number={props.num}>
        <i number={props.num} class="bi bi-play-circle-fill"></i>
        <p number={props.num}>{props.title}</p>
      </div>
    );
  }
  export default Course;