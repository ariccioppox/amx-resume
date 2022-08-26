export default function Courses({data}) {
    return (
      <div className="mb-0">
        <h2 className="bg-black text-cyan-250 font-bold rounded-lg w-fit mb-4">
          {data.coursesHeading}
        </h2>
        <div className="mb-4">
          <h3 className="font-bold ">
            {data.course1Title}
          </h3>
          <p>
            {data.course1School}
          </p>
        </div>
        <div>
          <h3 className="font-bold ">
            {data.course2Title}
          </h3>
          <p>
            {data.course2School}
          </p>
        </div>
      </div>
    )
  }