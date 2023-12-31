const NoResults = ({ status, length }) => {
  if (status == 'error' || length == 0) {
    return (
      <div className="shadow-lg rounded-2xl p-4 bg-gray-50 w-64 m-auto">
        <div className="w-full h-full text-center">
          <div className="flex h-full flex-col justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-primary m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="  font-bold mt-4">
              {status == 'error' ? 'Error' : `We couldn't find what you're looking for`}
            </p>
          </div>
        </div>
      </div>
    )
  }
  return <></>
}

export default NoResults
