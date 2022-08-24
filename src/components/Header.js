export default function Header({data}) {
    return (
      <div className="flex w-full m-auto p-10 bg-black opacity-90 mb-4">
        <div className="flex flex-col w-full justify-center">
          <h1 className="font-bold">
            {data.name}
          </h1>
          <h3 className="tracking-wider">
            {data.jobTitle}
          </h3>
        </div>
        <div className="flex flex-col w-full items-end">
          <p className="tracking-wider lh-header">
            {data.phone}
          </p>
          <p className="tracking-wider lh-header">
            <a className="hover:underline" href={data.emailLink}>
              {data.email}
            </a>
          </p>
          <p className="tracking-wider lh-header">
            <a className="hover:underline" href={data.websiteLink} target="_blank">
              {data.website}
            </a>
          </p>
          <p className="tracking-wider lh-header">
            {data.location}
          </p>
        </div>
      </div>
    )
  }