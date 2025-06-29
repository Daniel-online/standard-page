import Column from "./../Content/Column"
import PropTypes from "prop-types"
import Copyright from "./Copyright";

const Footer = ({ data }) => {
  return (
    <div className="w-full bg-red-500 text-white">
      <footer className=" justify-around place-content-center px-4 py-2 space-x-4 flex flex-row  ">

        {data.map((section, index) => {
          return <Column key={index} title={section.title} list={section.list} links={section.links} />
        })}

      </footer>
      <Copyright className="place-content-center   " />
    </div>
  )
}
Footer.propTypes = {
  data: PropTypes.array
}

export default Footer

